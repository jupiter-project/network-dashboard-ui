
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import { useBlock } from 'contexts/block-context'
import CardWrapper from 'parts/CardWrapper'

const useStyles = makeStyles(theme => ({
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.custom.palette.blue
  }
}));

const BlockVersion = () => {
  const classes = useStyles();
  const { blockStatus } = useBlock();

  return (
    <CardWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography color='textSecondary'>
            Jupiter Version
          </Typography>
          <Typography className={classes.value}>
            {blockStatus.version}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color='textSecondary'>
            Total Blocks
          </Typography>
          <Typography className={classes.value}>
            {blockStatus.numberOfBlocks?.toLocaleString()}
          </Typography>
        </Grid>
      </Grid>
    </CardWrapper>
  )
};

export default memo(BlockVersion);