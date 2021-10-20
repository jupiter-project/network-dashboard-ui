
import { memo } from 'react'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import { NQT_WEIGHT } from 'utils/constants/common'
import LINKS from 'utils/constants/links'

const BlockDetail = ({
  selectedBlock
}) => {

  return (
    <CardWrapper
      title={`Block: ${selectedBlock.block}`}
      link={LINKS.BLOCK.HREF.replace('[block]', selectedBlock.block)}
    >
      <ValueItem
        label='Height'
        value={selectedBlock.height}
      />
      <ValueItem
        label='Transactions'
        value={selectedBlock.numberOfTransactions}
      />
      <ValueItem
        label='Base target'
        value={selectedBlock.baseTarget}
      />
      <ValueItem
        label='Version'
        value={selectedBlock.version}
      />
      <ValueItem
        label='Cumulative Diff'
        value={selectedBlock.cumulativeDifficulty}
      />
      <ValueItem
        label='Timestamp'
        value={getDateFromTimestamp(selectedBlock.timestamp)}
      />
      <ValueItem
        label='Amount'
        value={`${selectedBlock.totalAmountNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Fee'
        value={`${selectedBlock.totalFeeNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Payload'
        value={`${selectedBlock.payloadLength} / 44880`}
      />
      <ValueItem
        label='Payload Hash'
        value={selectedBlock.payloadHash}
      />
      <ValueItem
        label='Block Signature'
        value={selectedBlock.blockSignature}
      />
      <ValueItem
        label='Generator'
        value={selectedBlock.generatorRS}
        link={LINKS.ACCOUNT.HREF.replace('[account]', selectedBlock.generator)}
      />
      <ValueItem
        label='Generation Signature'
        value={selectedBlock.generationSignature}
      />
      <ValueItem
        label='Generation PublicKey'
        value={selectedBlock.generatorPublicKey}
      />
      <ValueItem
        label='Previous Block'
        value={selectedBlock.previousBlock}
        link={LINKS.BLOCK.HREF.replace('[block]', selectedBlock.previousBlock)}
      />
      <ValueItem
        label='Previous Block Hash'
        value={selectedBlock.previousBlockHash}
      />
    </CardWrapper>
  )
};

export default memo(BlockDetail);