
import { memo, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import AssetList from 'parts/Asset/AssetList'
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

const Assets = () => {
  const classes = useStyles()

  const [selectedAsset, setSelectedAsset] = useState({})

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <AssetList setSelectedAsset={setSelectedAsset} />
            </Grid>
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
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              {!isEmpty(selectedAsset) &&
                <AssetDetail selectedAsset={selectedAsset} />
              }
            </Grid>
            <Grid item xs={12}>
              {!isEmpty(selectedAsset) &&
                <TopAssetHolders selectedAsset={selectedAsset} />
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Assets)