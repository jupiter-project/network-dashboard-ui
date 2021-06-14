import { createContext, useContext, useEffect, useState } from 'react'

import * as jupiterAPI from 'services/api-jupiter'

const BlockContext = createContext(null)
const INTERVAL_MS = 180000

export function BlockProvider({ children }) {
  const [blockStatus, setBlockStatus] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      getInit();
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  const getInit = async () => {
    try {
      const response = await jupiterAPI.getBlockchainStatus();
      setBlockStatus(response)
    } catch (error) {
      console.log('[Error] getInit => ', error)
    }
  }

  return (
    <BlockContext.Provider
      value={{ blockStatus }}
    >
      {children}
    </BlockContext.Provider>
  )
}

export function useBlock() {
  const context = useContext(BlockContext)
  if (!context) { throw new Error('Missing stats context') }

  const {
    blockStatus
  } = context

  return {
    blockStatus
  }
}