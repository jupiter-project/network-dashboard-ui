
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
  { id: 'account', label: 'Account', minWidth: 140 },
  { id: 'jup', label: 'JUP', minWidth: 120 },
  { id: 'deadline', label: 'Deadline', minWidth: 120 },
  { id: 'timestamp', label: 'Timestamp', minWidth: 140 },
];

const NextBlockGenerators = ({
  setSelectedGenerator
}) => {
  const classes = useStyles();
  const [generators, setGenerators] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const { generators = [] } = await jupiterAPI.getNextBlockGenerators();
        setGenerators(generators)
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, []);

  const generatorHandler = (generator) => () => {
    setSelectedGenerator(generator)
  }

  return (
    <CardWrapper title='Next Block Generators'>
      <Box className={classes.tableContainer}>
        <TableContainer columns={columns} isEmpty={generators.length === 0}>
          {generators.map((generator) => (
            <TableRow key={generator.accountRS}>
              <TableCell
                component='th'
                scope='row'
                className={classes.generator}
                onClick={generatorHandler(generator)}
              >
                {generator.accountRS}
              </TableCell>
              <TableCell>
                {generator.effectiveBalanceNXT}
              </TableCell>
              <TableCell>
                {generator.deadline}
              </TableCell>
              <TableCell>
                {getDateFromTimestamp(generator.hitTime)}
              </TableCell>
            </TableRow>
          ))}
        </TableContainer>
      </Box>
    </CardWrapper>
  )
}

export default memo(NextBlockGenerators)