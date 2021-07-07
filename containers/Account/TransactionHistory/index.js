
import { memo, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TableCell,
  TableRow
} from '@material-ui/core'

import * as jupiterAPI from 'services/api-jupiter'
import TableContainer from 'parts/Table/TableContainer'
import CardWrapper from 'parts/CardWrapper'
import getMainType from 'utils/helpers/types/getMainType'
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
  { id: 'id', label: 'ID', minWidth: 90 },
  { id: 'timestamp', label: 'Timestamp', minWidth: 120 },
  { id: 'sender', label: 'Sender', minWidth: 120 },
  { id: 'type', label: 'Type', minWidth: 120 },
  { id: 'fee', label: 'Amt + Fee', minWidth: 140 },
];

const TransactionHistory = ({
  account,
  setSelectedTransaction
}) => {
  const classes = useStyles();

  const [transactions, setTransactions] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const load = async () => {
      try {
        const params = {
          account,
          firstIndex: page * ROWS_PER_PAGE,
          lastIndex: (page + 1) * ROWS_PER_PAGE
        }
        const { transactions = [] } = await jupiterAPI.getBlockchainTransactions(params);
        setTransactions(transactions)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [account, page])

  const transactionHandler = (transaction) => () => {
    setSelectedTransaction(transaction)
  }

  return (
    <CardWrapper title='Transactions'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={transactions.length === 0}>
          {transactions.map((transaction) => (
            <TableRow key={transaction.transaction}>
              <TableCell component='th' scope='row' onClick={transactionHandler(transaction)} className={classes.block}>
                {transaction.transaction}
              </TableCell>
              <TableCell>
                {getDateFromTimestamp(transaction.timestamp)}
              </TableCell>
              <TableCell>
                {transaction.senderRS}
              </TableCell>
              <TableCell>
                {getMainType(transaction.type)}
              </TableCell>
              <TableCell>
                {`${transaction.amountNQT / NQT_WEIGHT} + ${transaction.feeNQT / NQT_WEIGHT}`}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(TransactionHistory)