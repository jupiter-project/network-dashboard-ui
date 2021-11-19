
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  item: {
    fontSize: 14,
    cursor: 'pointer',
    color: theme.palette.text.primary,
    textDecoration: 'unset'
  }
}));

const FooterMenuItem = ({
  menu
}) => {
  const classes = useStyles();

  return (
    <a
      className={classes.item}
      href={menu.HREF}
      target='_blank'
      rel="noreferrer"
    >
      {menu.TITLE}
    </a>
  );
};

export default memo(FooterMenuItem);
