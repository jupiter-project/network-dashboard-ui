import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TelegramIcon from 'components/Icons/TelegramIcon'
import TwitterIcon from 'components/Icons/TwitterIcon'
import DiscordIcon from 'components/Icons/DiscordIcon'

const useStyles = makeStyles((theme) => ({
  socialContainer: {
    margin: theme.spacing(2.5, 0)
  },
  socialIcon: {
    marginRight: theme.spacing(2)
  }
}));

const SocialGroup = () => {
  const classes = useStyles();

  return (
    <div className={classes.socialContainer}>
      <TwitterIcon className={classes.socialIcon} />
      <TelegramIcon className={classes.socialIcon} />
      <DiscordIcon className={classes.socialIcon} />
    </div>
  );
};

export default memo(SocialGroup);
