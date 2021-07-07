
import { memo, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TrendingChart from './TrendingChart'
import NFTList from './NFTList'
import NFTDetail from './NFTDetail'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const NFTs = () => {
  const classes = useStyles()
  const [selectedNFT, setSelectedNFT] = useState({})

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TrendingChart />
        </Grid>
        <Grid item xs={12} md={7}>
          <NFTList setSelectedNFT={setSelectedNFT} />
        </Grid>
        <Grid item xs={12} md={5}>
          {!isEmpty(selectedNFT) &&
            <NFTDetail item={selectedNFT} />
          }
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(NFTs)