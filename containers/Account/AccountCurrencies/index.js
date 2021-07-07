
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
  { id: 'currency', label: 'Currency', minWidth: 90 },
  { id: 'code', label: 'Code', minWidth: 120 },
  { id: 'units', label: 'Units', minWidth: 120 }
];

const AccountCurrencies = ({
  account
}) => {
  const classes = useStyles();

  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { accountCurrencies = [] } = await jupiterAPI.getAccountCurrencies(account);
        setCurrencies(accountCurrencies)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [account])

  return (
    <CardWrapper title='Currencies'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={currencies.length === 0}>
          {currencies.map((currency) => (
            <TableRow key={currency.currency}>
              <TableCell component='th' scope='row' className={classes.block}>
                {currency.currency}
              </TableCell>
              <TableCell>
                {currency.code}
              </TableCell>
              <TableCell>
                {currency.units}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(AccountCurrencies)