
import { memo, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import * as jupiterAPI from 'services/api-jupiter'
import TransactionDetail from 'parts/Block/TransactionDetail'
import AccountDetail from './AccountDetail'
import TransactionHistory from './TransactionHistory'
import AccountAssets from './AccountAssets'
import AccountCurrencies from './AccountCurrencies'
import AccountAliases from './AccountAliases'
import AccountLessors from './AccountLessors'
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
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => {
    const initData = async () => {
      try {
        const accountInfo = await jupiterAPI.getAccount(router.query.account)
        setAccountInfo(accountInfo)
      } catch (error) {
        console.log(error)
      }
    }

    if (router.query.account) initData();
  }, [router.query.account]);

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <AccountDetail accountInfo={accountInfo} />
            </Grid>
            <Grid item xs={12}>
              {!isEmpty(selectedTransaction) &&
                <TransactionDetail transaction={selectedTransaction} />
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
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
            <Grid item xs={12} sm={6}>
              <AccountLessors lessors={accountInfo?.lessorsInfo || []} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Account)