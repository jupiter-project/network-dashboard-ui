
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import MagicLoading from 'components/MagicLoading'
import TopAppBar from './TopAppBar'
import Footer from './Footer'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative'
  },
  container: {
    flex: '1 0 auto',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    backgroundColor: theme.palette.background.primary
  },
}));

const Layout = ({
  children
}) => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const { loadingStatus } = useSelector(state => state.loading);

  return (
    <main className={classes.root}>
      {loadingStatus && <MagicLoading loading={loadingStatus} />}
      <TopAppBar />
      <div className={clsx(classes.container, commonClasses.containerWidth)} >
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default memo(Layout);
