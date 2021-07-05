
import { memo } from 'react'
import Link from 'next/link'
import { Card, CardContent, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.background.default
  },
  content: {
    padding: theme.spacing(2)
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1,
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    color: theme.custom.palette.blue,
  },
  link: {
    color: theme.custom.palette.blue,
  }
}));

const CardWrapper = ({
  title,
  link,
  children
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          {title &&
            <Typography className={classes.title}>
              {title}
            </Typography>
          }
          {link &&
            <Link href={link}>
              <a aria-label={link} target='_blank' rel='noreferrer'>
                <IconButton className={classes.link}>
                  <OpenInNewIcon />
                </IconButton>
              </a>
            </Link>
          }
        </div>
        {children}
      </CardContent>
    </Card>
  )
}

export default memo(CardWrapper);