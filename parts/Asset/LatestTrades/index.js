
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
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    overflowX: 'overlay'
  },
  trade: {
    color: theme.custom.palette.green,
    cursor: 'pointer'
  }
}));

const columns = [
  { id: 'time', label: 'Age', minWidth: 120 },
  { id: 'type', label: 'Type', minWidth: 90 },
  { id: 'price', label: 'Price', minWidth: 120 },
  { id: 'quantity', label: 'Quantity', minWidth: 120 },
  { id: 'seller', label: 'Seller', minWidth: 120 },
  { id: 'buyer', label: 'Buyer', minWidth: 120 },
];
const LatestTrades = ({
  selectedAsset
}) => {
  const classes = useStyles();

  const [trades, setTrades] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { trades = [] } = await jupiterAPI.getLastTrades(selectedAsset.asset);
        setTrades(trades)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [selectedAsset])

  return (
    <CardWrapper title='Latest Trades'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={trades.length === 0}>
          {trades.map((trade, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                {getDateFromTimestamp(trade.timestamp)}
              </TableCell>
              <TableCell>
                {trade.tradeType}
              </TableCell>
              <TableCell>
                {trade.priceNQT / NQT_WEIGHT} JUP
              </TableCell>
              <TableCell>
                {trade.quantityQNT}
              </TableCell>
              <TableCell>
                <AccountItem
                  account={trade.seller}
                  accountRS={trade.sellerRS}
                />
              </TableCell>
              <TableCell>
                <AccountItem
                  account={trade.buyer}
                  accountRS={trade.buyerRS}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(LatestTrades)