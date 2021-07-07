
import { memo, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TableCell,
  TableRow
} from '@material-ui/core'

import TableContainer from 'parts/Table/TableContainer'
import TablePagination from 'parts/Table/TablePagination'
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

const ROWS_PER_PAGE = 12;
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

  const [page, setPage] = useState(0)

  const transactionHandler = (transaction) => () => {
    setSelectedTransaction(transaction)
  }

  return (
    <CardWrapper title='Transactions'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={transactions.length === 0}>
          {transactions.slice(
            page * ROWS_PER_PAGE,
            page * ROWS_PER_PAGE + ROWS_PER_PAGE
          ).map((transaction) => (
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
      <TablePagination
        page={page}
        setPage={setPage}
        total={transactions.length}
        rowsPerPage={ROWS_PER_PAGE}
      />
    </CardWrapper>
  )
}

export default memo(BlockTransactions)