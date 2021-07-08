
import { memo, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import * as jupiterAPI from 'services/api-jupiter'
import TransactionDetail from 'parts/Block/TransactionDetail'
import TransactionHistory from './TransactionHistory'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const Account = () => {
  const classes = useStyles()
  const router = useRouter();

  const [selectedTransaction, setSelectedTransaction] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await jupiterAPI.getTransaction(router.query.transaction)
        setSelectedTransaction(response)
      } catch (error) {
        console.log(error)
      }
    }

    if (router.query.transaction) {
      getData();
    }
  }, [router.query.transaction])

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TransactionDetail transaction={selectedTransaction} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <TransactionHistory />
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Account)