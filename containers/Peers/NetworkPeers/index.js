
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
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    overflowX: 'overlay'
  },
  generator: {
    color: theme.custom.palette.green,
    cursor: 'pointer'
  }
}));

const columns = [
  { id: 'id', label: 'ID', minWidth: 90 },
  { id: 'announcedAddress', label: 'Announced', minWidth: 120 },
  { id: 'ip', label: 'IP', minWidth: 120 },
  { id: 'platform', label: 'Platform', minWidth: 120 },
  { id: 'weight', label: 'Weight', minWidth: 120 },
  { id: 'application', label: 'Application', minWidth: 120 },
  { id: 'version', label: 'Version', minWidth: 120 },
  { id: 'updated', label: 'Updated', minWidth: 120 },
];

const NetworkPeers = () => {
  const classes = useStyles();

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
    <CardWrapper title={`Peers: ${peers.length}`}>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {peers.map((peer, index) => (
            <TableRow key={index}>
              <TableCell
                component='th'
                scope='row'
              >
                {index + 1}
              </TableCell>
              <TableCell>
                {peer.announcedAddress}
              </TableCell>
              <TableCell>
                {peer.address}
              </TableCell>
              <TableCell>
                {peer.platform}
              </TableCell>
              <TableCell>
                {peer.weight}
              </TableCell>
              <TableCell>
                {peer.application}
              </TableCell>
              <TableCell>
                {peer.version}
              </TableCell>
              <TableCell>
                {getDateFromTimestamp(peer.lastConnectAttempt)}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(NetworkPeers)