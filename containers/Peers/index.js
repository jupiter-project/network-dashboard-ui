
import { memo, useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import * as jupiterAPI from 'services/api-jupiter'
import PeerMaps from './PeerMaps'
import NetworkPeers from './NetworkPeers'
import SearchInput from './SearchInput'
import PeerDetail from './PeerDetail'
import { isEmpty } from 'utils/helpers/utility'

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
  const [query, setQuery] = useState('')
  const [filterPeers, setFilterPeers] = useState([])
  const [selectedPeer, setSelectedPeer] = useState({})

  useEffect(() => {
    const load = async () => {
      try {
        const { peers = [] } = await jupiterAPI.getPeers();
        setPeers(peers)
        if (!isEmpty(peers)) {
          setSelectedPeer(peers[0])
        }
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [])

  useEffect(() => {
    if (!query) {
      setFilterPeers(peers)
    } else {
      let filterPeers = [];
      for (const peer of peers) {
        const { address = '', platform = '' } = peer
        if (address.includes(query) || platform.includes(query)) {
          filterPeers = [...filterPeers, peer]
        }
      }
      setFilterPeers(filterPeers)
    }
  }, [query, peers])

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <SearchInput onSearch={setQuery} />
            </Grid>
            <Grid item xs={12}>
              <NetworkPeers
                page={page}
                peers={filterPeers}
                rowsPerPage={ROWS_PER_PAGE}
                setPage={setPage}
                setSelectedPeer={setSelectedPeer}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <PeerMaps peer={selectedPeer} />
            </Grid>
            <Grid item xs={12}>
              {!isEmpty(selectedPeer) &&
                <PeerDetail
                  peer={selectedPeer}
                />
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Peers)