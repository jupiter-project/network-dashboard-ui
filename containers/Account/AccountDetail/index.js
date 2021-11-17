
import { memo } from 'react'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { NQT_WEIGHT } from 'utils/constants/common'

const AccountDetail = ({
  accountInfo
}) => {
  return (
    <CardWrapper title={`Account: ${accountInfo?.accountRS || ''}`}>
      <ValueItem
        label='Name'
        value={accountInfo?.name || 'No Name'}
      />
      <ValueItem
        label='Description'
        value={accountInfo?.description || 'No Description'}
      />
      <ValueItem
        label='Balance'
        value={`${accountInfo.balanceNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Fees earned'
        value={`${accountInfo.guaranteedBalanceNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Public key'
        value={accountInfo.publicKey}
      />
    </CardWrapper>
  )
};

export default memo(AccountDetail);