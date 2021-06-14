
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import { useBlock } from 'contexts/block-context'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'

const useStyles = makeStyles(theme => ({
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.custom.palette.blue
  }
}));

const LatestBlock = () => {
  const classes = useStyles();
  const { blockStatus } = useBlock();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography color='textSecondary'>
          Latest Block Number
        </Typography>
        <Typography className={classes.value}>
          {blockStatus.lastBlock}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color='textSecondary'>
          Latest Block Time
        </Typography>
        <Typography className={classes.value}>
          {getDateFromTimestamp(blockStatus.time)}
        </Typography>
      </Grid>
    </Grid>
  )
};

export default memo(LatestBlock);