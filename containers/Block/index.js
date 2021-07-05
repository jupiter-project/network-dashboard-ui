
import { memo, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import * as jupiterAPI from 'services/api-jupiter'
import BlockDetail from './BlockDetail'
import BlockTransactions from './BlockTransactions'
import TransactionDetail from './TransactionDetail'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const Block = () => {
  const classes = useStyles()
  const router = useRouter()

  const [selectedBlock, setSelectedBlock] = useState({})
  const [selectedTransaction, setSelectedTransaction] = useState({})

  useEffect(() => {
    const initData = async () => {
      try {
        const block = await jupiterAPI.getBlock(router.query.block)
        setSelectedBlock(block)
      } catch (error) {
        console.log(error)
      }
    }

    if (router.query.block) initData();
  }, [router]);

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              {!isEmpty(selectedBlock) &&
                <BlockDetail selectedBlock={selectedBlock} />
              }
            </Grid>
            <Grid item xs={12}>
              {!isEmpty(selectedTransaction) &&
                <TransactionDetail transaction={selectedTransaction} />
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          {!isEmpty(selectedBlock.transactions) &&
            <BlockTransactions
              transactions={selectedBlock.transactions}
              setSelectedTransaction={setSelectedTransaction}
            />
          }
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Block)