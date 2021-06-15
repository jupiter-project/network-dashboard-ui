
import { memo, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TableCell,
  TableRow
} from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import * as jupiterAPI from 'services/api-jupiter'
import TableContainer from 'parts/Table/TableContainer'
import { useBlock } from 'contexts/block-context'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  tableContainer: {
    overflowX: 'overlay'
  }
}));

const ROWS_PER_PAGE = 10;
const columns = [
  { id: 'block', label: 'Block', minWidth: 90 },
  { id: 'date', label: 'Date', minWidth: 120 },
  { id: 'generatorRS', label: 'Generator', minWidth: 140 },
  { id: 'cumulativeDifficulty', label: 'Cumulative Difficulty', minWidth: 140 },
];

const BlockHistory = () => {
  const classes = useStyles();
  const { blockStatus } = useBlock();

  const [blocks, setBlocks] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const load = async () => {
      try {
        const params = {
          firstIndex: page * ROWS_PER_PAGE,
          lastIndex: (page + 1) * ROWS_PER_PAGE
        }
        const { blocks = [] } = await jupiterAPI.getBlocks(params);
        setBlocks(blocks)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [page])

  return (
    <main className={classes.root}>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns}>
          {blocks.map((block) => (
            <TableRow key={block.block}>
              <TableCell component='th' scope='row'>
                {block.block}
              </TableCell>
              <TableCell>
                {getDateFromTimestamp(block.timestamp)}
              </TableCell>
              <TableCell>
                {block.generatorRS}
              </TableCell>
              <TableCell>
                {block.cumulativeDifficulty}
              </TableCell>

            </TableRow>
          ))}
        </TableContainer>
      </Box>
      <Pagination
        variant='outlined'
        shape='rounded'
        page={page + 1}
        count={Math.ceil(blockStatus.numberOfBlocks / ROWS_PER_PAGE)}
        onChange={(event, page) => setPage(page - 1)}
      />
    </main>
  )
}

export default memo(BlockHistory)