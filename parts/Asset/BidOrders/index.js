
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
import { NQT_WEIGHT } from 'utils/constants/common'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    overflowX: 'overlay'
  },
  bidOrder: {
    color: theme.custom.palette.green,
    cursor: 'pointer'
  }
}));

const columns = [
  { id: 'order', label: 'Order', minWidth: 120 },
  { id: 'price', label: 'Price', minWidth: 90 },
  { id: 'quantity', label: 'Quantity', minWidth: 120 },
];

const BidOrders = ({
  selectedAsset
}) => {
  const classes = useStyles();

  const [bidOrders, setBidOrders] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { bidOrders = [] } = await jupiterAPI.getBidOrders(selectedAsset.asset);
        setBidOrders(bidOrders)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [selectedAsset])

  return (
    <CardWrapper title='Bid Orders'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {bidOrders.map((bidOrder) => (
            <TableRow key={bidOrder.order}>
              <TableCell component='th' scope='row'>
                {bidOrder.order}
              </TableCell>
              <TableCell>
                {bidOrder.priceNQT / NQT_WEIGHT} JUP
              </TableCell>
              <TableCell>
                {bidOrder.quantityQNT}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(BidOrders)