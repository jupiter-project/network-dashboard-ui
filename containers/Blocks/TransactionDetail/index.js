
import { memo } from 'react'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import { NQT_WEIGHT } from 'utils/constants/common'

const TransactionDetail = ({
  transaction
}) => {

  return (
    <CardWrapper title={`Transaction: ${transaction.transaction}`}>
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
      />
      <ValueItem
        label='Amt + Fee'
        value={`${transaction.amountNQT / NQT_WEIGHT} + ${transaction.feeNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Sender'
        value={transaction.senderRS}
      />
      <ValueItem
        label='Type'
        value={transaction.type}
      />
    </CardWrapper>
  )
};

export default memo(TransactionDetail);