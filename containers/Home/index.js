
import { memo } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LatestBlock from './LatestBlock'
import BlockVersion from './BlockVersion'
import BlockInfo from './BlockInfo'
import RewardInfo from './RewardInfo'
import UnconfirmedTransactions from './UnconfirmedTransactions'
import BlockHistory from './BlockHistory'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const Home = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <BlockVersion />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LatestBlock />
            </Grid>
            <Grid item xs={12}>
              <UnconfirmedTransactions />
            </Grid>
            <Grid item xs={12}>
              <BlockHistory />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <BlockInfo />
            </Grid>
            <Grid item xs={12}>
              <RewardInfo />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Home)