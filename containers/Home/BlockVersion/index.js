
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import SchoolIcon from '@material-ui/icons/School'
import LineWeightIcon from '@material-ui/icons/LineWeight'

import { useBlock } from 'contexts/block-context'
import CardWrapper from 'parts/CardWrapper'

const useStyles = makeStyles(theme => ({
  value: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1,
    color: theme.custom.palette.blue
  },
  icon: {
    marginLeft: theme.spacing(1)
  }
}));

const BlockVersion = () => {
  const classes = useStyles();
  const { blockStatus } = useBlock();

  return (
    <CardWrapper>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Jupiter Version
          </Typography>
          <Typography className={classes.value}>
            {blockStatus.version}
            <SchoolIcon className={classes.icon} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' color='textSecondary'>
            Block Height
          </Typography>
          <Typography className={classes.value}>
            {blockStatus.numberOfBlocks?.toLocaleString()}
            <LineWeightIcon className={classes.icon} />
          </Typography>
        </Grid>
      </Grid>
    </CardWrapper>
  )
};

export default memo(BlockVersion);