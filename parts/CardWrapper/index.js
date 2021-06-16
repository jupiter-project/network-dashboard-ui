
import { memo } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.background.default
  },
  content: {
    padding: theme.spacing(1.5, 3.5)
  }
}));

const CardWrapper = ({
  children
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        {children}
      </CardContent>
    </Card>
  )
}

export default memo(CardWrapper);