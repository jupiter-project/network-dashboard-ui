import { createContext, useContext, useEffect, useState } from 'react'

import * as jupiterAPI from 'services/api-jupiter'

const BlockContext = createContext(null)

export function BlockProvider({ children }) {
  const [blockStatus, setBlockStatus] = useState({})

  useEffect(() => {
    if (true) {
      getInit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getInit = async () => {
    try {
      const response = await jupiterAPI.getBlockchainStatus();

      setBlockStatus(response)
      console.log('response => ', response)
    } catch (error) {
      console.log('[Error] getInit => ', error)
    }
  }

  return (
    <BlockContext.Provider
      value={{
        blockStatus
      }}
    >
      {children}
    </BlockContext.Provider>
  )
}

export function useBlock() {
  const context = useContext(BlockContext)
  if (!context) {
    throw new Error('Missing stats context')
  }

  const {
    blockStatus
  } = context

  return {
    blockStatus
  }
}