
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import { useBlock } from 'contexts/block-context'

const useStyles = makeStyles(theme => ({
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.custom.palette.blue
  }
}));

const BlockInfo = () => {
  const classes = useStyles();
  const { blockStatus } = useBlock();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography color='textSecondary'>
          Ledger Trim Keep
        </Typography>
        <Typography className={classes.value}>
          {blockStatus.ledgerTrimKeep}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color='textSecondary'>
          Max API Records
        </Typography>
        <Typography className={classes.value}>
          {blockStatus.maxAPIRecords}
        </Typography>
      </Grid>
    </Grid>
  )
};

export default memo(BlockInfo);