
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import { JUPITER_LOGO_IMAGE_PATH } from 'utils/constants/image-paths'
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import LINKS from 'utils/constants/links';

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  title: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(2)
  },
  logo: {
    height: 40,
    objectFit: 'contain'
  },
  description: {
    fontSize: 15,
    maxWidth: 240,
    marginBottom: theme.spacing(2)
  }
}));

const FooterJupiter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img
          alt='jupiter-logo'
          src={JUPITER_LOGO_IMAGE_PATH}
          className={classes.logo}
        />
        <Typography
          variant='h6'
          color='textPrimary'
          className={classes.title}
        >
          Powered by Jupiter
        </Typography>
      </div>
      <Typography
        color='textPrimary'
        className={classes.description}
      >
        Check the usage, performance and overall state of Jupiter in realtime.
      </Typography>
      <ContainedButton 
        href={LINKS.EUROPA_EXTENSION.HREF}
        target='_blank'
        color='secondary'
      >
        Install Europa
      </ContainedButton>
    </div>
  );
};

export default memo(FooterJupiter);
