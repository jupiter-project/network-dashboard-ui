
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
  asset: {
    color: theme.custom.palette.green,
    cursor: 'pointer'
  }
}));

const ROWS_PER_PAGE = 8;
const columns = [
  { id: 'asset', label: 'Asset', minWidth: 90 },
  { id: 'name', label: 'Name', minWidth: 120 },
  { id: 'totalQuantity', label: 'Total Quantity', minWidth: 120 },
  { id: 'account', label: 'Account', minWidth: 120 }
];

const AssetList = ({
  setSelectedAsset
}) => {
  const classes = useStyles();

  const [assets, setAssets] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const load = async () => {
      try {
        const { assets = [] } = await jupiterAPI.getAllAssets();
        setAssets(assets)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [page])

  const assetHandler = (asset) => () => {
    setSelectedAsset(asset)
  }

  return (
    <CardWrapper title='Assets'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {assets.slice(
            page * ROWS_PER_PAGE,
            page * ROWS_PER_PAGE + ROWS_PER_PAGE
          ).map((asset) => (
            <TableRow key={asset.asset}>
              <TableCell component='th' scope='row' onClick={assetHandler(asset)} className={classes.asset}>
                {asset.asset}
              </TableCell>
              <TableCell>
                {asset.name}
              </TableCell>
              <TableCell>
                {asset.quantityQNT}
              </TableCell>
              <TableCell>
                <AccountItem
                  account={asset.account}
                  accountRS={asset.accountRS}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
      <TablePagination
        page={page}
        setPage={setPage}
        total={assets.length}
        rowsPerPage={ROWS_PER_PAGE}
      />
    </CardWrapper>
  )
}

export default memo(AssetList)