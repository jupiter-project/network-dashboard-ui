
import { memo, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TableCell,
  TableRow
} from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import * as jupiterAPI from 'services/api-jupiter'
import TableContainer from 'parts/Table/TableContainer'
import CardWrapper from 'parts/CardWrapper'
import AccountItem from 'parts/AccountItem'
import ProductContent from 'parts/ProductContent'
import getJSONParse from 'utils/helpers/getJSONParse'
import { NQT_WEIGHT } from 'utils/constants/common'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    overflowX: 'overlay'
  },
  block: {
    color: theme.custom.palette.green,
    cursor: 'pointer'
  },
  image: {
    width: 70,
    height: 70,
    objectFit: 'cover',
  },
}));

const ROWS_PER_PAGE = 8;
const columns = [
  { id: 'image', label: 'Image', minWidth: 90 },
  { id: 'asset', label: 'Asset', minWidth: 120 },
  { id: 'name', label: 'Name', minWidth: 120 },
  { id: 'price', label: 'Price', minWidth: 140 },
  { id: 'generatorRS', label: 'Generator', minWidth: 140 },
];

const NFTList = ({
  setSelectedNFT
}) => {
  const classes = useStyles();

  const [openOrders, setOpenOrders] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const load = async () => {
      try {
        const { openOrders = [] } = await jupiterAPI.searchAllOpenAskOrders();
        setOpenOrders(openOrders)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [])

  const nftHandler = (order) => () => {
    setSelectedNFT(order)
  }

  return (
    <CardWrapper title='NFTs'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {openOrders.slice(
            page * ROWS_PER_PAGE,
            page * ROWS_PER_PAGE + ROWS_PER_PAGE
          ).map((order) => {
            const info = getJSONParse(order.message);

            return (
              <TableRow key={order.block} onClick={nftHandler(order)}>
                <TableCell component='th' scope='row'>
                  <ProductContent
                    info={info}
                    className={classes.image}
                  />
                </TableCell>
                <TableCell>
                  {order.asset}
                </TableCell>
                <TableCell>
                  {order.description}
                </TableCell>
                <TableCell>
                  {`${order.priceNQT / NQT_WEIGHT}`}
                </TableCell>
                <TableCell>
                  <AccountItem
                    account={order.account}
                    accountRS={order.accountRS}
                  />
                </TableCell>
              </TableRow>
            )
          })}
        </TableContainer>
      </Box>
      <Pagination
        variant='outlined'
        shape='rounded'
        page={page + 1}
        count={Math.ceil(openOrders.length / ROWS_PER_PAGE)}
        onChange={(event, page) => setPage(page - 1)}
      />
    </CardWrapper>
  )
}

export default memo(NFTList)