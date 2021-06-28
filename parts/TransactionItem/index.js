
import { memo } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LINKS from 'utils/constants/links'

const useStyles = makeStyles((theme) => ({
  transaction: {
    fontSize: 14,
    color: theme.custom.palette.green,
    cursor: 'pointer'
  },
}));

const TransactionItem = ({
  transaction
}) => {
  const classes = useStyles();
  const router = useRouter();

  const transactionHandler = () => {
    router.push(
      LINKS.TRANSACTION.HREF,
      LINKS.TRANSACTION.HREF.replace('[transaction]', transaction)
    )
  }

  return (
    <Typography className={classes.transaction} onClick={transactionHandler}>
      {transaction}
    </Typography>
  )
}

export default memo(TransactionItem);