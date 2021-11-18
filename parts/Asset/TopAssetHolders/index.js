
import { memo, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TableCell,
  TableRow
} from '@material-ui/core'

import * as jupiterAPI from 'services/api-jupiter'
import TableContainer from 'parts/Table/TableContainer'
import TablePagination from 'parts/Table/TablePagination'
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

const ROWS_PER_PAGE = 8;
const columns = [
  { id: 'account', label: 'Account', minWidth: 120 },
  { id: 'quantity', label: 'Quantity', minWidth: 120 },
];

const TopAssetHolders = ({
  selectedAsset
}) => {
  const classes = useStyles();

  const [accountAssets, setAccountAssets] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const load = async () => {
      try {
        const { accountAssets = [] } = await jupiterAPI.getAssetAccounts(selectedAsset.asset);
        setAccountAssets(accountAssets)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [selectedAsset])

  console.log(accountAssets)
  return (
    <CardWrapper title='Top Asset Holders'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={accountAssets.length === 0}>
          {accountAssets.slice(
            page * ROWS_PER_PAGE,
            page * ROWS_PER_PAGE + ROWS_PER_PAGE
          ).map((accountAsset, index) => (
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
      <TablePagination
        page={page}
        setPage={setPage}
        total={accountAssets.length}
        rowsPerPage={ROWS_PER_PAGE}
      />
    </CardWrapper>
  )
}

export default memo(TopAssetHolders)