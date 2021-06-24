
import { memo, useState } from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import AccountDetail from './AccountDetail'
import TransactionHistory from './TransactionHistory'
import TransactionDetail from './TransactionDetail'
import AccountAssets from './AccountAssets'
import AccountCurrencies from './AccountCurrencies'
import AccountAliases from './AccountAliases'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const Account = () => {
  const classes = useStyles()
  const router = useRouter();

  const [selectedTransaction, setSelectedTransaction] = useState({})

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <AccountDetail account={router.query.account} />
            </Grid>
            <Grid item xs={12}>
              {!isEmpty(selectedTransaction) &&
                <TransactionDetail transaction={selectedTransaction} />
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TransactionHistory
                account={router.query.account}
                setSelectedTransaction={setSelectedTransaction}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AccountAssets account={router.query.account} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AccountCurrencies account={router.query.account} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AccountAliases account={router.query.account} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Account)