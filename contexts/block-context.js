import { createContext, useContext, useEffect, useState } from 'react'

import * as jupiterAPI from 'services/api-jupiter'

const BlockContext = createContext(null)
const INTERVAL_MS = 30000

export function BlockProvider({ children }) {
  const [blockStatus, setBlockStatus] = useState({})
  const [generatorsInfo, setGeneratorsInfo] = useState([])

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
        generatorsInfo
      ] = await Promise.all([
        jupiterAPI.getBlockchainStatus(),
        jupiterAPI.getNextBlockGenerators()
      ])
      setBlockStatus(blockStatus)
      setGeneratorsInfo(generatorsInfo)
    } catch (error) {
      console.log('[Error] getInit => ', error)
    }
  }

  return (
    <BlockContext.Provider
      value={{
        blockStatus,
        generatorsInfo
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
    blockStatus,
    generatorsInfo
  } = context

  return {
    blockStatus,
    generatorsInfo
  }
}