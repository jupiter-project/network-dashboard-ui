
import { memo, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TableCell,
  TableRow
} from '@material-ui/core'

import * as jupiterAPI from 'services/api-jupiter'
import TableContainer from 'parts/Table/TableContainer'
import TablePagination from 'parts/Table/TablePagination'
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

const ROWS_PER_PAGE = 14;
const columns = [
  { id: 'id', label: 'ID', minWidth: 90 },
  { id: 'announcedAddress', label: 'Announced', minWidth: 120 },
  { id: 'ip', label: 'IP', minWidth: 120 },
  { id: 'platform', label: 'Platform', minWidth: 120 },
  { id: 'application', label: 'Application', minWidth: 120 },
  { id: 'version', label: 'Version', minWidth: 120 },
  { id: 'updated', label: 'Updated', minWidth: 120 },
];

const NetworkPeers = () => {
  const classes = useStyles();

  const [peers, setPeers] = useState([])
  const [page, setPage] = useState(0)

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
          {peers.slice(
            page * ROWS_PER_PAGE,
            page * ROWS_PER_PAGE + ROWS_PER_PAGE
          ).map((peer, index) => (
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
      <TablePagination
        page={page}
        setPage={setPage}
        total={peers.length}
        rowsPerPage={ROWS_PER_PAGE}
      />
    </CardWrapper>
  )
}

export default memo(NetworkPeers)