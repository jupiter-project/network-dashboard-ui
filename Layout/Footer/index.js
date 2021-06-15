
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import Logo from 'components/Logo'
import LinkButton from 'components/UI/Buttons/LinkButton'
import SocialGroup from './SocialGroup'
import { useCommonStyles } from 'styles/use-styles'
import { SUPPORT_EMAIL } from 'utils/constants/contact'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  email: {
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.text.primary,
    textDecoration: 'unset',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <footer className={classes.root}>
      <div className={clsx(classes.container, commonClasses.containerWidth)}>
        <Logo />
        <SocialGroup />
        <LinkButton
          href={`mailto:${SUPPORT_EMAIL}`}
          className={classes.email}
        >
          {SUPPORT_EMAIL}
        </LinkButton>
      </div>
    </footer>
  );
};

export default memo(Footer);
