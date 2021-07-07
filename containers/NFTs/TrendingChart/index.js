
import { memo, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import * as jupiterAPI from 'services/api-jupiter'
import CardWrapper from 'parts/CardWrapper'
import { NQT_WEIGHT } from 'utils/constants/common'
import theme from 'styles/theme'

const useStyles = makeStyles(() => ({
  container: {
    height: 400
  },
}));

const TrendingChart = () => {
  const classes = useStyles()
  const [purchases, setPurchases] = useState({})

  useEffect(() => {
    const searchAllTrades = async () => {
      const params = {
        first: 0,
        last: 12
      }
      const { trades = [] } = await jupiterAPI.searchAllTrades(params);
      let chartData = [];
      for (const item of trades) {
        chartData = [
          {
            name: item.description,
            price: item.priceNQT / NQT_WEIGHT
          },
          ...chartData,
        ]
      }
      setPurchases(chartData);
    }
    searchAllTrades();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CardWrapper title='Trading Chart'>
      <div className={classes.container}>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            width={500}
            height={300}
            data={purchases}
            margin={{
              top: 5,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='price'
              stroke={theme.palette.primary.main}
              fill={theme.palette.primary.main}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardWrapper>
  )
}

export default memo(TrendingChart)