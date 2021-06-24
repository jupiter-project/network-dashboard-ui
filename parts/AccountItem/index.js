
import { memo } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LINKS from 'utils/constants/links'

const useStyles = makeStyles((theme) => ({
  account: {
    fontSize: 14,
    color: theme.custom.palette.green,
    cursor: 'pointer'
  },
}));

const AccountItem = ({
  accountRS,
  account
}) => {
  const classes = useStyles();
  const router = useRouter();

  const accountHandler = () => {
    router.push(
      LINKS.ACCOUNT.HREF,
      LINKS.ACCOUNT.HREF.replace('[account]', account)
    )
  }

  return (
    <Typography className={classes.account} onClick={accountHandler}>
      {accountRS}
    </Typography>
  )
}

export default memo(AccountItem);