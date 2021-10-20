
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TableCell,
  TableRow
} from '@material-ui/core'

import { useBlock } from 'contexts/block-context'
import TableContainer from 'parts/Table/TableContainer'
import CardWrapper from 'parts/CardWrapper'
import AccountItem from 'parts/AccountItem'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import getType from 'utils/helpers/types/getType'
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
  { id: 'id', label: 'Id', minWidth: 140 },
  { id: 'age', label: 'Age', minWidth: 120 },
  { id: 'sender', label: 'Sender', minWidth: 120 },
  { id: 'type', label: 'Type', minWidth: 140 },
  { id: 'amount', label: 'Amount', minWidth: 70 },
  { id: 'fee', label: 'Fee', minWidth: 70 },
];

const UnconfirmedTransactions = () => {
  const classes = useStyles();
  const { unconfirmedTransactions } = useBlock();

  return (
    <CardWrapper title='Unconfirmed Transactions'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={unconfirmedTransactions.length === 0}>
          {unconfirmedTransactions.map((transaction) => (
            <TableRow key={transaction.transaction}>
              <TableCell
                component='th'
                scope='row'
                className={classes.transaction}
              >
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
                {getType(transaction.type, transaction.subtype)}
              </TableCell>
              <TableCell>
                {transaction.amountNQT / NQT_WEIGHT}
              </TableCell>
              <TableCell>
                {transaction.feeNQT / NQT_WEIGHT}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(UnconfirmedTransactions)