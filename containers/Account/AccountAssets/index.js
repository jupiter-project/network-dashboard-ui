
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
  { id: 'asset', label: 'Asset', minWidth: 90 },
  { id: 'name', label: 'Name', minWidth: 120 },
  { id: 'quantity', label: 'Quantity', minWidth: 120 }
];

const AccountAssets = ({
  account
}) => {
  const classes = useStyles();

  const [assets, setAssets] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { accountAssets = [] } = await jupiterAPI.getAccountAssets(account);
        setAssets(accountAssets)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [account])

  return (
    <CardWrapper title='Assets'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {assets.map((asset) => (
            <TableRow key={asset.asset}>
              <TableCell component='th' scope='row' className={classes.block}>
                {asset.asset}
              </TableCell>
              <TableCell>
                {asset.name}
              </TableCell>
              <TableCell>
                {asset.quantityQNT}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(AccountAssets)