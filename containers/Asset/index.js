
import { memo, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import * as jupiterAPI from 'services/api-jupiter'
import AssetDetail from 'parts/Asset/AssetDetail'
import AskOrders from 'parts/Asset/AskOrders'
import BidOrders from 'parts/Asset/BidOrders'
import LatestTrades from 'parts/Asset/LatestTrades'
import TopAssetHolders from 'parts/Asset/TopAssetHolders'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const Asset = () => {
  const classes = useStyles()
  const router = useRouter();

  const [selectedAsset, setSelectedAsset] = useState({})

  useEffect(() => {
    const initData = async () => {
      try {
        const asset = await jupiterAPI.getAsset(router.query.asset)
        setSelectedAsset(asset)
      } catch (error) {
        console.log(error)
      }
    }

    if (router.query.asset) initData();
  }, [router]);

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              {!isEmpty(selectedAsset) &&
                <AskOrders selectedAsset={selectedAsset} />
              }
            </Grid>
            <Grid item xs={12} md={6}>
              {!isEmpty(selectedAsset) &&
                <BidOrders selectedAsset={selectedAsset} />
              }
            </Grid>
            <Grid item xs={12}>
              {!isEmpty(selectedAsset) &&
                <LatestTrades selectedAsset={selectedAsset} />
              }
            </Grid>
            <Grid item xs={12}>
              {!isEmpty(selectedAsset) &&
                <TopAssetHolders selectedAsset={selectedAsset} />
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              {!isEmpty(selectedAsset) &&
                <AssetDetail selectedAsset={selectedAsset} />
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Asset)