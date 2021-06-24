
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
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'

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
  { id: 'name', label: 'Name', minWidth: 90 },
  { id: 'timestamp', label: 'Timestamp', minWidth: 120 },
];

const AccountAliases = ({
  account
}) => {
  const classes = useStyles();

  const [aliases, setAliases] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { aliases = [] } = await jupiterAPI.getAliases(account);
        setAliases(aliases)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [account])

  return (
    <CardWrapper title='Currencies'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {aliases.map((alias) => (
            <TableRow key={alias.alias}>
              <TableCell component='th' scope='row' className={classes.block}>
                {alias.aliasName}
              </TableCell>
              <TableCell>
                {getDateFromTimestamp(alias.timestamp)}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(AccountAliases)