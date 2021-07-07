
import { memo, useEffect, useState } from 'react'

import * as jupiterAPI from 'services/api-jupiter'
import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { NQT_WEIGHT } from 'utils/constants/common'

const AccountDetail = ({
  account
}) => {
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => {
    const initData = async () => {
      try {
        const accountInfo = await jupiterAPI.getAccount(account)
        setAccountInfo(accountInfo)
      } catch (error) {
        console.log(error)
      }
    }

    if (account) initData();
  }, [account]);

  return (
    <CardWrapper title={`Account: ${accountInfo?.accountRS || ''}`}>
      <ValueItem
        label='Name'
        value={accountInfo?.name || 'No Name'}
      />
      <ValueItem
        label='Balance'
        value={`${accountInfo.balanceNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Eff. balance'
        value={`${accountInfo.unconfirmedBalanceNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Fees earned'
        value={`${accountInfo.forgedBalanceNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Public key'
        value={accountInfo.publicKey}
      />
    </CardWrapper>
  )
};

export default memo(AccountDetail);