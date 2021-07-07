
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import FeeIcon from '@material-ui/icons/AccountBalance'
import AlarmIcon from '@material-ui/icons/Alarm'
import TransactionIcon from '@material-ui/icons/AirportShuttle'

import { useBlock } from 'contexts/block-context'
import CardWrapper from 'parts/CardWrapper'
import SearchInput from './SearchInput'
import { NQT_WEIGHT } from 'utils/constants/common'

const useStyles = makeStyles(theme => ({
  value: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1,
    color: theme.custom.palette.green
  },
  icon: {
    marginLeft: theme.spacing(1)
  }
}));

const BlockInfo = () => {
  const classes = useStyles();
  const { blockInfo } = useBlock();

  return (
    <CardWrapper>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            TX per Block Avg
          </Typography>
          <Typography className={classes.value}>
            {(blockInfo?.txsPerBlock || 0).toFixed(3)}
            <TransactionIcon className={classes.icon} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Fee per Block Avg
          </Typography>
          <Typography className={classes.value}>
            {((blockInfo?.feePerBlock || 0) / NQT_WEIGHT).toFixed(3)} JUP
            <FeeIcon className={classes.icon} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Block generation Time
          </Typography>
          <Typography className={classes.value}>
            {(blockInfo?.blockGenerationTime || 0).toFixed(3)} s
            <AlarmIcon className={classes.icon} />
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