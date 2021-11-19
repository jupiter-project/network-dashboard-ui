
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import MonetizationOn from '@material-ui/icons/MonetizationOn'

import CardWrapper from 'parts/CardWrapper'
import { useCoingecko } from 'contexts/coingecko-context'

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

const JupiterInfo = () => {
  const classes = useStyles();
  const { prices, marketCap } = useCoingecko();

  return (
    <CardWrapper>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Jupiter Price
          </Typography>
          <Typography className={classes.value}>
            ${prices}
            <MonetizationOn className={classes.icon} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Jupiter Marketcap
          </Typography>
          <Typography className={classes.value}>
            ${marketCap.toLocaleString()}
            <MonetizationOn className={classes.icon} />
          </Typography>
        </Grid>
      </Grid>
    </CardWrapper>
  )
};

export default memo(JupiterInfo);