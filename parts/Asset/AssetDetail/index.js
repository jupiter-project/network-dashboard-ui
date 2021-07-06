
import { memo } from 'react'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'

const AssetDetail = ({
  selectedAsset
}) => {

  return (
    <CardWrapper title={`Asset: ${selectedAsset.asset}`}>
      <ValueItem
        label='Name'
        value={selectedAsset.name}
      />
      <ValueItem
        label='Description'
        value={selectedAsset.description}
      />
      <ValueItem
        label='Quantity'
        value={selectedAsset.quantityQNT}
      />
      <ValueItem
        label='Decimals'
        value={selectedAsset.decimals}
      />
      <ValueItem
        label='Issuer'
        value={selectedAsset.accountRS}
      />
      <ValueItem
        label='Accounts'
        value={selectedAsset.numberOfAccounts}
      />
      <ValueItem
        label='Transfers'
        value={selectedAsset.numberOfTransfers}
      />
      <ValueItem
        label='Trades'
        value={selectedAsset.numberOfTrades}
      />
    </CardWrapper>
  )
};

export default memo(AssetDetail);