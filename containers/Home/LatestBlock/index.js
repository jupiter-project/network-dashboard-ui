
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import AlarmIcon from '@material-ui/icons/Alarm'
import CasinoIcon from '@material-ui/icons/Casino'

import { useBlock } from 'contexts/block-context'
import CardWrapper from 'parts/CardWrapper'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'

const useStyles = makeStyles(theme => ({
  value: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1,
    color: theme.custom.palette.yellow
  },
  icon: {
    marginLeft: theme.spacing(1)
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
            <CasinoIcon className={classes.icon} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Latest Block Time
          </Typography>
          <Typography className={classes.value}>
            {getDateFromTimestamp(blockStatus.time)}
            <AlarmIcon className={classes.icon} />
          </Typography>
        </Grid>
      </Grid>
    </CardWrapper>
  )
};

export default memo(LatestBlock);