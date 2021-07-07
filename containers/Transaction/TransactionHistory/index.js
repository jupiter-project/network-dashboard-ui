
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
import TransactionItem from 'parts/TransactionItem'
import AccountItem from 'parts/AccountItem'
import getMainType from 'utils/helpers/types/getMainType'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import { NQT_WEIGHT } from 'utils/constants/common'

const useStyles = makeStyles(() => ({
  tableContainer: {
    overflowX: 'overlay'
  }
}));

const columns = [
  { id: 'id', label: 'ID', minWidth: 90 },
  { id: 'timestamp', label: 'Timestamp', minWidth: 120 },
  { id: 'sender', label: 'Sender', minWidth: 120 },
  { id: 'type', label: 'Type', minWidth: 120 },
  { id: 'fee', label: 'Amt + Fee', minWidth: 140 },
];

const TransactionHistory = () => {
  const classes = useStyles();

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { transactions = [] } = await jupiterAPI.getAllWaitingTransactions();
        setTransactions(transactions)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [])

  return (
    <CardWrapper title='Transactions'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={transactions.length === 0}>
          {transactions.map((transaction) => (
            <TableRow key={transaction.transaction}>
              <TableCell component='th' scope='row' >
                <TransactionItem
                  transaction={transaction.transaction}
                />
              </TableCell>
              <TableCell>
                {getDateFromTimestamp(transaction.timestamp)}
              </TableCell>
              <TableCell>
                <AccountItem
                  account={transaction.sender}
                  accountRS={transaction.senderRS}
                />
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