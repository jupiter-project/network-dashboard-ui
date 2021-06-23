
import { memo, useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LatestBlock from './LatestBlock'
import BlockVersion from './BlockVersion'
import BlockInfo from './BlockInfo'
import RewardInfo from './RewardInfo'
import UnconfirmedTransactions from './UnconfirmedTransactions'
import BlockHistory from './BlockHistory'
import BlockDetail from './BlockDetail'
import BlockTransactions from './BlockTransactions'
import TransactionDetail from './TransactionDetail'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
}));

const Home = () => {
  const classes = useStyles()

  const [selectedBlock, setSelectedBlock] = useState({})
  const [selectedTransaction, setSelectedTransaction] = useState({})

  return (
    <main className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <BlockVersion />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LatestBlock />
            </Grid>
            <Grid item xs={12}>
              <UnconfirmedTransactions />
            </Grid>
            <Grid item xs={12}>
              <BlockHistory setSelectedBlock={setSelectedBlock} />
            </Grid>
            {!isEmpty(selectedBlock.transactions) &&
              <Grid item xs={12}>
                <BlockTransactions
                  transactions={selectedBlock.transactions}
                  setSelectedTransaction={setSelectedTransaction}
                />
              </Grid>
            }
            {!isEmpty(selectedBlock) &&
              <Grid item xs={12} sm={6}>
                <BlockDetail selectedBlock={selectedBlock} />
              </Grid>
            }
            {!isEmpty(selectedTransaction) &&
              <Grid item xs={12} sm={6}>
                <TransactionDetail transaction={selectedTransaction} />
              </Grid>
            }
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <BlockInfo />
            </Grid>
            <Grid item xs={12}>
              <RewardInfo />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Home)