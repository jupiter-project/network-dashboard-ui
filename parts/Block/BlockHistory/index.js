
import { memo, useState, useEffect, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TableCell,
  TableRow
} from '@material-ui/core'

import * as jupiterAPI from 'services/api-jupiter'
import TableContainer from 'parts/Table/TableContainer'
import TablePagination from 'parts/Table/TablePagination'
import CardWrapper from 'parts/CardWrapper'
import AccountItem from 'parts/AccountItem'
import { useBlock } from 'contexts/block-context'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import { NQT_WEIGHT } from 'utils/constants/common'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    overflowX: 'overlay'
  },
  block: {
    color: theme.custom.palette.green,
    cursor: 'pointer'
  }
}));

const ROWS_PER_PAGE = 8;
const INTERVAL_MS = 30000;
const columns = [
  { id: 'height', label: 'Height', minWidth: 90 },
  // { id: 'block', label: 'Block', minWidth: 90 },
  { id: 'age', label: 'Age', minWidth: 120 },
  { id: 'txs', label: 'Txs', minWidth: 120 },
  { id: 'amount', label: 'Amount', minWidth: 70 },
  { id: 'fee', label: 'Fee', minWidth: 70 },
  { id: 'generatorRS', label: 'Generator', minWidth: 140 },
];

const BlockHistory = ({
  onBlock
}) => {
  const classes = useStyles();
  const { blockStatus } = useBlock();

  const [blocks, setBlocks] = useState([])
  const [page, setPage] = useState(0)

  const getData = useCallback(async () => {
    try {
      const params = {
        firstIndex: page * ROWS_PER_PAGE,
        lastIndex: (page + 1) * ROWS_PER_PAGE
      }
      const { blocks = [] } = await jupiterAPI.getBlocks(params);
      setBlocks(blocks)
    } catch (error) {
      console.log(error)
    }
  }, [page, setBlocks])

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [getData]);

  useEffect(() => {
    getData()
  }, [page, getData])

  const blockHandler = (block) => () => {
    onBlock(block)
  }

  return (
    <CardWrapper title='Blocks'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={blocks.length === 0}>
          {blocks.map((block) => (
            <TableRow key={block.block} onClick={blockHandler(block)}>
              <TableCell component='th' scope='row' className={classes.block}>
                {block.height}
              </TableCell>
              {/* <TableCell>
                {block.block}
              </TableCell> */}
              <TableCell>
                {getDateFromTimestamp(block.timestamp)}
              </TableCell>
              <TableCell>
                {block.transactions.length}
              </TableCell>
              <TableCell>
                {block.totalAmountNQT / NQT_WEIGHT}
              </TableCell>
              <TableCell>
                {block.totalFeeNQT / NQT_WEIGHT}
              </TableCell>
              <TableCell>
                <AccountItem
                  account={block.generator}
                  accountRS={block.generatorRS}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
      <TablePagination
        page={page}
        setPage={setPage}
        total={blockStatus.numberOfBlocks}
        rowsPerPage={ROWS_PER_PAGE}
      />
    </CardWrapper>
  )
}

export default memo(BlockHistory)