
import { memo } from 'react'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import getMainType from 'utils/helpers/types/getMainType'
import { NQT_WEIGHT } from 'utils/constants/common'
import LINKS from 'utils/constants/links'

const TransactionDetail = ({
  transaction
}) => {

  return (
    <CardWrapper
      title={`Transaction: ${transaction.transaction}`}
      link={LINKS.TRANSACTION.HREF.replace('[transaction]', transaction.transaction)}
    >
      <ValueItem
        label='Timestamp'
        value={getDateFromTimestamp(transaction.timestamp)}
      />
      <ValueItem
        label='Height'
        value={`${transaction.height} / ${transaction.confirmations} confirmation(s)`}
      />
      <ValueItem
        label='Block ID'
        value={transaction.block}
        link={LINKS.BLOCK.HREF.replace('[block]', transaction.block)}
      />
      <ValueItem
        label='Amt + Fee'
        value={`${transaction.amountNQT / NQT_WEIGHT} + ${transaction.feeNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Sender'
        value={transaction.senderRS}
        link={LINKS.ACCOUNT.HREF.replace('[account]', transaction.sender)}
      />
      <ValueItem
        label='Type'
        value={getMainType(transaction.type)}
      />
    </CardWrapper>
  )
};

export default memo(TransactionDetail);