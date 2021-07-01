
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import CardWrapper from 'parts/CardWrapper'
import { useBlock } from 'contexts/block-context'

const useStyles = makeStyles(theme => ({
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.custom.palette.blue
  }
}));

const RewardInfo = () => {
  const classes = useStyles();
  const { forgeAPY, nodeFee } = useBlock();

  return (
    <CardWrapper>
      <Grid container spacing={1}>
        {/* <Grid item xs={12}>
          <Typography className={classes.value}>
            DEX Volume = 2, 394.39 JUP
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <Typography className={classes.value}>
            $Forge APY = {forgeAPY.toFixed(5) * 100}%
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.value}>
            Node Rewards = {nodeFee.toFixed(6)} JUP
          </Typography>
        </Grid>
      </Grid>
    </CardWrapper>
  )
};

export default memo(RewardInfo);