
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import HomeHeader from './HomeHeader'
import HomeJourney from './HomeJourney'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    marginBottom: theme.spacing(15)
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <HomeHeader />
      <HomeJourney />
    </main>
  )
}

export default memo(Home)