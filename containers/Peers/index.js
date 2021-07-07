
import { memo, useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import * as jupiterAPI from 'services/api-jupiter'
import PeerMaps from './PeerMaps'
import NetworkPeers from './NetworkPeers'

const ROWS_PER_PAGE = 12;
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const Peers = () => {
  const classes = useStyles()

  const [page, setPage] = useState(0)
  const [peers, setPeers] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { peers = [] } = await jupiterAPI.getPeers();
        setPeers(peers)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [])

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <PeerMaps
            page={page}
            peers={peers}
            rowsPerPage={ROWS_PER_PAGE}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <NetworkPeers
            page={page}
            peers={peers}
            setPage={setPage}
            rowsPerPage={ROWS_PER_PAGE}
          />
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Peers)