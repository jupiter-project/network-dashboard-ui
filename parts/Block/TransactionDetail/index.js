
import { memo } from 'react'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import getType from 'utils/helpers/types/getType'
import { NQT_WEIGHT } from 'utils/constants/common'
import LINKS from 'utils/constants/links'

const TransactionDetail = ({
  transaction
}) => {
  console.log(transaction)
  return (
    <CardWrapper
      title={`Transaction: ${transaction.transaction}`}
      link={LINKS.TRANSACTION.HREF.replace('[transaction]', transaction.transaction)}
    >
      <ValueItem
        label='Transaction Index'
        value={transaction.transactionIndex}
      />
      <ValueItem
        label='Type'
        value={getType(transaction.type, transaction.subtype)}
      />
      <ValueItem
        label='Version'
        value={transaction.version}
      />
      <ValueItem
        label='Deadline'
        value={transaction.deadline}
      />
      <ValueItem
        label='Height'
        value={`${transaction.height} / ${transaction.confirmations} confirmation(s)`}
      />
      <ValueItem
        label='Transaction Timestamp'
        value={getDateFromTimestamp(transaction.timestamp)}
      />
      <ValueItem
        label='Sender'
        value={transaction.senderRS}
      />
       <ValueItem
        label='Receiver'
        value={transaction.recipientRS}
      />
      <ValueItem
        label='Phased'
        value={transaction.phased ? 'True' : 'False'}
      />
      <ValueItem
        label='Amount'
        value={`${transaction.amountNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Fee'
        value={`${transaction.feeNQT / NQT_WEIGHT} JUP`}
      />
      {transaction?.attachment?.message &&
        <ValueItem
          label='Attachment Message'
          value={transaction.attachment.message}
        />
      }
      {transaction?.attachment?.messageIsText &&
        <ValueItem
          label='Attachment Message Is Text'
          value={transaction.attachment.messageIsText ? 'True' : 'False'}
        />
      }
      {transaction?.attachment?.asset &&
        <ValueItem
          label='Attachment Asset'
          value={transaction.attachment.asset}
          link={LINKS.ASSET.HREF.replace('[asset]', transaction.attachment.asset)}
        />
      }
      {transaction?.attachment?.priceNQT &&
        <ValueItem
          label='Attachment Price'
          value={`${transaction.attachment.priceNQT / NQT_WEIGHT} JUP`}
        />
      }
      {transaction?.attachment?.quantityQNT &&
        <ValueItem
          label='Attachment Quantity'
          value={transaction.attachment.quantityQNT}
        />
      }
      <ValueItem
        label='Block ID'
        value={transaction.block}
        link={LINKS.BLOCK.HREF.replace('[block]', transaction.block)}
      />
      <ValueItem
        label='Block Timestamp'
        value={getDateFromTimestamp(transaction.blockTimestamp)}
      />
      <ValueItem
        label='Full Hash'
        value={transaction.fullHash}
      />
      <ValueItem
        label='Signature'
        value={transaction.signature}
      />
      <ValueItem
        label='Signature Hash'
        value={transaction.signatureHash}
      />
      <ValueItem
        label='Sender'
        value={transaction.senderRS}
        link={LINKS.ACCOUNT.HREF.replace('[account]', transaction.sender)}
      />
      <ValueItem
        label='Sender Public Key'
        value={transaction.senderPublicKey}
      />
    </CardWrapper>
  )
};

export default memo(TransactionDetail);