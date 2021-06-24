import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as jupiterAPI from 'services/api-jupiter'

const BlockContext = createContext(null)
const INTERVAL_MS = 30000

export function BlockProvider({ children }) {
  const [blockStatus, setBlockStatus] = useState({})
  const [generatorsInfo, setGeneratorsInfo] = useState([])
  const [unconfirmedTransactions, setUnconfirmedTransactions] = useState([])
  const [nodeFee, setNodeFee] = useState(0)

  const forgeAPY = useMemo(() => 5000000 / (1000000000 - 909000000), []);

  useEffect(() => {
    getInit();
    const interval = setInterval(() => {
      getInit();
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const getInit = async () => {
    try {
      const [
        blockStatus,
        generatorsInfo,
        unconfirmedTransactions,
        forgeAsset
      ] = await Promise.all([
        jupiterAPI.getBlockchainStatus(),
        jupiterAPI.getNextBlockGenerators(),
        jupiterAPI.getUnconfirmedTransactions(),
        jupiterAPI.getForgeAsset()
      ])

      const { accountAssets } = forgeAsset;
      const nodeFee = (8760000 / accountAssets[0].quantityQNT) * 100
      setBlockStatus(blockStatus)
      setGeneratorsInfo(generatorsInfo)
      setUnconfirmedTransactions(unconfirmedTransactions?.unconfirmedTransactions || [])
      setNodeFee(nodeFee)
    } catch (error) {
      console.log('[Error] getInit => ', error)
    }
  }

  return (
    <BlockContext.Provider
      value={{
        blockStatus,
        generatorsInfo,
        unconfirmedTransactions,
        forgeAPY,
        nodeFee
      }}
    >
      {children}
    </BlockContext.Provider>
  )
}

export function useBlock() {
  const context = useContext(BlockContext)
  if (!context) { throw new Error('Missing stats context') }

  const {
    forgeAPY,
    nodeFee,
    blockStatus,
    generatorsInfo,
    unconfirmedTransactions
  } = context

  return {
    blockStatus,
    generatorsInfo,
    unconfirmedTransactions,
    forgeAPY,
    nodeFee
  }
}