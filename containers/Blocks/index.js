
import { memo, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import BlockHistory from 'parts/Block/BlockHistory'
import BlockDetail from 'parts/Block/BlockDetail'
import BlockTransactions from 'parts/Block/BlockTransactions'
import TransactionDetail from 'parts/Block/TransactionDetail'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const Blocks = () => {
  const classes = useStyles()

  const [selectedBlock, setSelectedBlock] = useState({})
  const [selectedTransaction, setSelectedTransaction] = useState({})

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <BlockHistory onBlock={setSelectedBlock} />
            </Grid>
            <Grid item xs={12}>
              {!isEmpty(selectedBlock.transactions) &&
                <BlockTransactions
                  transactions={selectedBlock.transactions}
                  setSelectedTransaction={setSelectedTransaction}
                />
              }
            </Grid>
          </Grid>
        </Grid>
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
      </Grid>
    </main>
  )
}

export default memo(Blocks)