
import { memo } from 'react'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import getMainType from 'utils/helpers/types/getMainType'
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
        label='Recipient'
        value={transaction.recipientRS}
      />
      <ValueItem
        label='Deadline'
        value={transaction.deadline}
      />
      <ValueItem
        label='Sender pubkey'
        value={transaction.senderPublicKey}
      />
      <ValueItem
        label='EC Block'
        value={transaction.ecBlockId}
      />
      <ValueItem
        label='Signature'
        value={transaction.signature}
      />
      <ValueItem
        label='Signature hash'
        value={transaction.signatureHash}
      />
      <ValueItem
        label='Full hash'
        value={transaction.fullHash}
      />
      <ValueItem
        label='Type'
        value={getMainType(transaction.type)}
      />
      <ValueItem
        label='Versions'
        value={transaction.version}
      />
      <ValueItem
        label='MessageIsText'
        value={transaction?.attachment?.encryptedMessage?.isText || false ? 'True' : 'False'}
      />
      <ValueItem
        label='Message Hash'
        value={transaction?.attachment?.encryptedMessageHash || ''}
      />
      <ValueItem
        label='Message'
        value={transaction?.attachment?.encryptedMessage?.data || ''}
      />
    </CardWrapper>
  )
};

export default memo(TransactionDetail);