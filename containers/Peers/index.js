
import { memo } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import NetworkPeers from './NetworkPeers'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const Peers = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <NetworkPeers />
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Peers)