
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import CardWrapper from 'parts/CardWrapper'
import SearchInput from './SearchInput'

const useStyles = makeStyles(theme => ({
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.custom.palette.blue
  }
}));

const BlockInfo = () => {
  const classes = useStyles();

  return (
    <CardWrapper>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            TX per Block Avg
          </Typography>
          <Typography className={classes.value}>
            4.5
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Fee per Block Avg
          </Typography>
          <Typography className={classes.value}>
            22.3
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Block generation Time
          </Typography>
          <Typography className={classes.value}>
            230s
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchInput />
        </Grid>
      </Grid>
    </CardWrapper>
  )
};

export default memo(BlockInfo);