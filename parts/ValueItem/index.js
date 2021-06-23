
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  label: {
    width: 200,
    fontSize: 18,
    color: theme.custom.palette.grey
  },
  value: {
    fontSize: 18,
    color: theme.custom.palette.blue
  }
}));

const ValueItem = ({
  label,
  value
}) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <Typography className={classes.label}>
        {label}:
      </Typography>
      <Typography className={classes.value}>
        {value}
      </Typography>
    </div>
  )
};

export default memo(ValueItem);