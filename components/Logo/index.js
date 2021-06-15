
import { memo } from 'react'
import Link from 'next/link'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import LINKS from 'utils/constants/links'
import { LOGO_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'unset'
  },
  picture: {
    display: 'flex',
  },
  img: {
    height: 45,
    objectFit: 'contain'
  },
  label: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 'normal',
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1)
  }
}));

const Logo = ({
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Link href={LINKS.HOME.HREF}>
      <a className={clsx(classes.root, className)}>
        <picture className={classes.picture} {...rest}>
          <source srcSet={LOGO_IMAGE_PATH} />
          <img
            className={classes.img}
            src={LOGO_IMAGE_PATH}
            alt='logo'
          />
        </picture>
        <Typography className={classes.label}>
          GALILEO
        </Typography>
      </a>
    </Link>
  )
}

export default memo(Logo);
