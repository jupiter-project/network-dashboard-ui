
import { memo, useState, useEffect } from 'react'
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
const columns = [
  { id: 'height', label: 'Height', minWidth: 90 },
  { id: 'age', label: 'Age', minWidth: 120 },
  { id: 'txs', label: 'Txs', minWidth: 120 },
  { id: 'fee', label: 'Amt + Fee', minWidth: 140 },
  { id: 'generatorRS', label: 'Generator', minWidth: 140 },
];

const BlockHistory = ({
  setSelectedBlock
}) => {
  const classes = useStyles();
  const { blockStatus } = useBlock();

  const [blocks, setBlocks] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const load = async () => {
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
    }
    load()
  }, [page])

  const blockHandler = (block) => () => {
    setSelectedBlock(block)
  }

  return (
    <CardWrapper title='Blocks'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {blocks.map((block) => (
            <TableRow key={block.block}>
              <TableCell component='th' scope='row' onClick={blockHandler(block)} className={classes.block}>
                {block.height}
              </TableCell>
              <TableCell>
                {getDateFromTimestamp(block.timestamp)}
              </TableCell>
              <TableCell>
                {block.transactions.length}
              </TableCell>
              <TableCell>
                {`${block.totalAmountNQT / NQT_WEIGHT} + ${block.totalFeeNQT / NQT_WEIGHT}`}
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