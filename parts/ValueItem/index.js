
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { useRouter } from 'next/router';
import clsx from 'clsx';

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
    color: theme.custom.palette.blue,
    wordBreak: 'break-word'
  },
  cursor: {
    cursor: 'pointer',
  }
}));

const ValueItem = ({
  label,
  value,
  link = ''
}) => {
  const classes = useStyles();
  const router = useRouter();

  const linkHandler = () => {
    if (link) router.push(link)
  }

  return (
    <div className={classes.item}>
      <div>
        <Typography className={classes.label}>
          {label}:
        </Typography>
      </div>
      <Typography className={clsx(classes.value, { [classes.cursor]: !!link })} onClick={linkHandler}>
        {value}
      </Typography>
    </div>
  )
};

export default memo(ValueItem);