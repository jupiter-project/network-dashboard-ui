
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
import AccountItem from 'parts/AccountItem'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    overflowX: 'overlay'
  },
  accountAsset: {
    color: theme.custom.palette.green,
    cursor: 'pointer'
  }
}));

const columns = [
  { id: 'account', label: 'Account', minWidth: 120 },
  { id: 'quantity', label: 'Quantity', minWidth: 120 },
];

const TopAssetHolders = ({
  selectedAsset
}) => {
  const classes = useStyles();

  const [accountAssets, setBidOrders] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { accountAssets = [] } = await jupiterAPI.getAssetAccounts(selectedAsset.asset);
        setBidOrders(accountAssets)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [selectedAsset])

  return (
    <CardWrapper title='Top Asset Holders'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {accountAssets.map((accountAsset, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                <AccountItem
                  account={accountAsset.account}
                  accountRS={accountAsset.accountRS}
                />
              </TableCell>
              <TableCell>
                {accountAsset.quantityQNT}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(TopAssetHolders)