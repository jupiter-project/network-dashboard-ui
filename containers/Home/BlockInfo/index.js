
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import { useBlock } from 'contexts/block-context'
import CardWrapper from 'parts/CardWrapper'
import SearchInput from './SearchInput'
import { NQT_WEIGHT } from 'utils/constants/common'

const useStyles = makeStyles(theme => ({
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.custom.palette.blue
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
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Fee per Block Avg
          </Typography>
          <Typography className={classes.value}>
            {((blockInfo?.feePerBlock || 0) / NQT_WEIGHT).toFixed(3)} JUP
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Block generation Time
          </Typography>
          <Typography className={classes.value}>
            {(blockInfo?.blockGenerationTime || 0).toFixed(3)}s
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