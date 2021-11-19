
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'

import FooterMenuItem from '../FooterMenuItem'
import FOOTER_MENU from 'utils/constants/footer-menu'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5, 0)
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1)
  }
}));

const FooterContact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant='h6'
        className={classes.title}
      >
        Contact
      </Typography>
      <Grid container spacing={1}>
        {
          FOOTER_MENU.map((menuItem) => (
            <Grid item key={menuItem.TITLE} xs={6}>
              <FooterMenuItem menu={menuItem} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

export default memo(FooterContact);
