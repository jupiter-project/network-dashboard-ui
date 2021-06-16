
import { memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import {
  Button,
  Hidden
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';

import TOP_BAR_MENU from 'utils/constants/top-bar-menu'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.palette.text.primary
  },
  selected: {
    color: theme.custom.palette.blue
  }
}));

const NavBarMenu = () => {
  const classes = useStyles();
  const router = useRouter()

  const onNavHandler = useCallback((item) => () => {
    router.push(item.HREF)
  }, [router])

  return (
    <Hidden smDown>
      <div className={classes.root}>
        {TOP_BAR_MENU.map((item, index) => (
          <Button
            key={index}
            onClick={onNavHandler(item)}
            className={clsx(classes.item, { [classes.selected]: item.HREF === router.pathname })}
          >
            {item.TITLE}
          </Button>
        ))}
      </div>
    </Hidden>
  );
};

export default memo(NavBarMenu);