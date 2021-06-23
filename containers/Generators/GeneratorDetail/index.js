
import { memo, useEffect, useState } from 'react'

import * as jupiterAPI from 'services/api-jupiter'
import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import { NQT_WEIGHT } from 'utils/constants/common'

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
    <CardWrapper title={`Account: ${generator.account}`}>
      <ValueItem
        label='Name'
        value={generatorInfo.name}
      />
      <ValueItem
        label='Balance'
        value={generatorInfo.balanceNQT / NQT_WEIGHT}
      />
      <ValueItem
        label='Eff. balance'
        value={generatorInfo.forgedBalanceNQT / NQT_WEIGHT}
      />
      <ValueItem
        label='publicKey'
        value={generatorInfo.publicKey}
      />
    </CardWrapper>
  )
};

export default memo(GeneratorDetail);