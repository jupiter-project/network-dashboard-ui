
import { memo, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import NextBlockGenerators from './NextBlockGenerators'
import GeneratorDetail from './GeneratorDetail'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const Generators = () => {
  const classes = useStyles()
  const [selectedGenerator, setSelectedGenerator] = useState({})

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <NextBlockGenerators setSelectedGenerator={setSelectedGenerator} />
        </Grid>
        <Grid item xs={12} md={5}>
          {!isEmpty(selectedGenerator) &&
            <GeneratorDetail generator={selectedGenerator} />
          }
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Generators)