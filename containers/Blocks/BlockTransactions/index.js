
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TableCell,
  TableRow
} from '@material-ui/core'

import TableContainer from 'parts/Table/TableContainer'
import CardWrapper from 'parts/CardWrapper'
import AccountItem from 'parts/AccountItem'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import getMainType from 'utils/helpers/types/getMainType'
import { NQT_WEIGHT } from 'utils/constants/common'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    overflowX: 'overlay'
  },
  transaction: {
    color: theme.custom.palette.green,
    cursor: 'pointer'
  }
}));

const columns = [
  { id: 'id', label: 'ID', minWidth: 90 },
  { id: 'timestamp', label: 'Timestamp', minWidth: 120 },
  { id: 'sender', label: 'Sender', minWidth: 120 },
  { id: 'type', label: 'Type', minWidth: 120 },
  { id: 'fee', label: 'Amt + Fee', minWidth: 140 },
];

const BlockTransactions = ({
  transactions,
  setSelectedTransaction
}) => {
  const classes = useStyles();

  const transactionHandler = (transaction) => () => {
    setSelectedTransaction(transaction)
  }

  return (
    <CardWrapper title='Transactions'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {transactions.map((transaction) => (
            <TableRow key={transaction.transaction}>
              <TableCell component='th' scope='row' onClick={transactionHandler(transaction)} className={classes.transaction}>
                {transaction.transaction}
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

export default memo(BlockTransactions)