
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import { useBlock } from 'contexts/block-context'
import CardWrapper from 'parts/CardWrapper'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'

const useStyles = makeStyles(theme => ({
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.custom.palette.yellow
  }
}));

const LatestBlock = () => {
  const classes = useStyles();
  const { blockStatus } = useBlock();

  return (
    <CardWrapper>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Block Hash
          </Typography>
          <Typography className={classes.value}>
            {blockStatus.lastBlock}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Latest Block Time
          </Typography>
          <Typography className={classes.value}>
            {getDateFromTimestamp(blockStatus.time)}
          </Typography>
        </Grid>
      </Grid>
    </CardWrapper>
  )
};

export default memo(LatestBlock);