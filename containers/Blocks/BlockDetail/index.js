
import { memo } from 'react'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import { NQT_WEIGHT } from 'utils/constants/common'

const BlockDetail = ({
  selectedBlock
}) => {

  return (
    <CardWrapper title={`Block: ${selectedBlock.block}`}>
      <ValueItem
        label='Height'
        value={selectedBlock.height}
      />
      <ValueItem
        label='Cumulative diff'
        value={selectedBlock.cumulativeDifficulty}
      />
      <ValueItem
        label='Timestamp'
        value={getDateFromTimestamp(selectedBlock.timestamp)}
      />
      <ValueItem
        label='Amt + Fee'
        value={`${selectedBlock.totalAmountNQT / NQT_WEIGHT} + ${selectedBlock.totalFeeNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Generator'
        value={selectedBlock.generatorRS}
      />
      <ValueItem
        label='Payload'
        value={`${selectedBlock.payloadLength} / 44880`}
      />
      <ValueItem
        label='Base target'
        value={selectedBlock.baseTarget}
      />
    </CardWrapper>
  )
};

export default memo(BlockDetail);