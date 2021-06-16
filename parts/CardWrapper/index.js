
import { memo } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.background.default
  },
  content: {
    padding: theme.spacing(2)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1,
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    color: theme.custom.palette.blue,
    marginBottom: theme.spacing(2)
  },
}));

const CardWrapper = ({
  title,
  children
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        {title &&
          <Typography className={classes.title}>
            {title}
          </Typography>
        }
        {children}
      </CardContent>
    </Card>
  )
}

export default memo(CardWrapper);