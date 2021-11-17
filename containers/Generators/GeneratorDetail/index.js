
import { memo, useEffect, useState } from 'react'

import * as jupiterAPI from 'services/api-jupiter'
import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { getDateFromTimestamp } from 'utils/helpers/getTimestamp'
import { NQT_WEIGHT } from 'utils/constants/common'
import LINKS from 'utils/constants/links'

const GeneratorDetail = ({
  generator
}) => {
  const [generatorInfo, setGeneratorInfo] = useState({})

  useEffect(() => {
    const getData = async () => {
      const generatorInfo = await jupiterAPI.getAccount(generator.account)
      setGeneratorInfo(generatorInfo)
    }
    getData()
  }, [generator])

  return (
    <CardWrapper
      title={`Generator: ${generator.accountRS}`}
      link={LINKS.ACCOUNT.HREF.replace('[account]', generator.account)}
    >
      <ValueItem
        label='Name'
        value={generatorInfo.name || 'No Name'}
      />
      <ValueItem
        label='Description'
        value={generatorInfo?.description || 'No Description'}
      />
      <ValueItem
        label='Deadline'
        value={generator.deadline}
      />
      <ValueItem
        label='Hit Time'
        value={getDateFromTimestamp(generator.hitTime)}
      />
      <ValueItem
        label='Balance'
        value={`${generatorInfo.balanceNQT / NQT_WEIGHT} JUP`}
      />
      {/* <ValueItem
        label='Eff. balance'
        value={`${generator.effectiveBalanceNXT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Forged balance'
        value={`${generatorInfo.forgedBalanceNQT / NQT_WEIGHT} JUP`}
      /> */}
      <ValueItem
        label='publicKey'
        value={generatorInfo.publicKey}
      />
    </CardWrapper>
  )
};

export default memo(GeneratorDetail);