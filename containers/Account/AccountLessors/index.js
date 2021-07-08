
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

const columns = [
  { id: 'from', label: 'From Height', minWidth: 80 },
  { id: 'to', label: 'To Height', minWidth: 80 },
  { id: 'account', label: 'Account', minWidth: 140 },
  { id: 'balance', label: 'Balance', minWidth: 80 }
];

const AccountLessors = ({
  lessors
}) => {
  const classes = useStyles();

  return (
    <CardWrapper title='Lessors'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={lessors.length === 0}>
          {lessors.map((lessor) => (
            <TableRow key={lessor.lessor}>
              <TableCell component='th' scope='row'>
                {lessor.currentHeightFrom}
              </TableCell>
              <TableCell component='th' scope='row'>
                {lessor.currentHeightTo}
              </TableCell>
              <TableCell>
                <AccountItem
                  account={lessor.currentLessee}
                  accountRS={lessor.currentLesseeRS}
                />
              </TableCell>
              <TableCell>
                {lessor.effectiveBalanceNXT / NQT_WEIGHT}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(AccountLessors)