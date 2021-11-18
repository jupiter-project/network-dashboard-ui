
import { memo } from 'react'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import LINKS from 'utils/constants/links'

const AssetDetail = ({
  selectedAsset
}) => {

  return (
    <CardWrapper
      title={`Asset: ${selectedAsset.asset}`}
      link={LINKS.ASSET.HREF.replace('[asset]', selectedAsset.asset)}
    >
      <ValueItem
        label='Name'
        value={selectedAsset.name === 'nftleda' ? selectedAsset.description : selectedAsset.name}
      />
      <ValueItem
        label='Quantity'
        value={selectedAsset.quantityQNT / (10 ** selectedAsset.decimals)}
      />
      <ValueItem
        label='Decimals'
        value={selectedAsset.decimals}
      />
      <ValueItem
        label='Issuer'
        value={selectedAsset.accountRS}
        link={LINKS.ACCOUNT.HREF.replace('[account]', selectedAsset.account)}
      />
      <ValueItem
        label='Accounts'
        value={selectedAsset?.numberOfAccounts || 0}
      />
      <ValueItem
        label='Transfers'
        value={selectedAsset?.numberOfTransfers || 0}
      />
      <ValueItem
        label='Trades'
        value={selectedAsset?.numberOfTrades || 0}
      />
    </CardWrapper>
  )
};

export default memo(AssetDetail);