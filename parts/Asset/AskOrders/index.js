
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
import { NQT_WEIGHT } from 'utils/constants/common'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    overflowX: 'overlay'
  },
  askOrder: {
    color: theme.custom.palette.green,
    cursor: 'pointer'
  }
}));

const columns = [
  { id: 'order', label: 'Order', minWidth: 120 },
  { id: 'account', label: 'Account', minWidth: 120 },
  { id: 'price', label: 'Price', minWidth: 90 },
  { id: 'quantity', label: 'Quantity', minWidth: 90 },
];

const AskOrders = ({
  selectedAsset
}) => {
  const classes = useStyles();

  const [askOrders, setAskOrders] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { askOrders = [] } = await jupiterAPI.getAskOrders(selectedAsset.asset);
        setAskOrders(askOrders)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [selectedAsset])

  return (
    <CardWrapper title='Ask Orders'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={askOrders.length === 0}>
          {askOrders.map((askOrder) => (
            <TableRow key={askOrder.order}>
              <TableCell component='th' scope='row'>
                {askOrder.order}
              </TableCell>
              <TableCell>
                <AccountItem
                  account={askOrder.account}
                  accountRS={askOrder.accountRS}
                />
              </TableCell>
              <TableCell>
                {askOrder.priceNQT / NQT_WEIGHT} JUP
              </TableCell>
              <TableCell>
                {askOrder.quantityQNT}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(AskOrders)