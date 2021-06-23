
import { memo, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TableCell,
  TableRow
} from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import * as jupiterAPI from 'services/api-jupiter'
import TableContainer from 'parts/Table/TableContainer'
import CardWrapper from 'parts/CardWrapper'
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

const TransactionHistory = ({
  setSelectedTransaction
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

  const transactionHandler = (transaction) => () => {
    setSelectedTransaction(transaction)
  }

  return (
    <CardWrapper title='Transactions'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {blocks.map((block) => (
            <TableRow key={block.block}>
              <TableCell component='th' scope='row' onClick={transactionHandler(block)} className={classes.block}>
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
                {block.generatorRS}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
      <Pagination
        variant='outlined'
        shape='rounded'
        page={page + 1}
        count={Math.ceil(blockStatus.numberOfBlocks / ROWS_PER_PAGE)}
        onChange={(event, page) => setPage(page - 1)}
      />
    </CardWrapper>
  )
}

export default memo(TransactionHistory)