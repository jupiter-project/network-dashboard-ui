import { createContext, useContext, useState, useEffect } from 'react'
import CoinGecko from 'coingecko-api'

const CoingeckoContext = createContext(null)

export function CoingeckoProvider({ children }) {
  const [prices, setPrices] = useState(0)
  const [marketCap, setMarketCap] = useState(0)

  useEffect(() => {
    const getPrices = async () => {
      const CoinGeckoClient = new CoinGecko()
      const { data: response } = await CoinGeckoClient.simple.price({
        ids: [
          'jupiter',
        ],
        vs_currencies: ['usd'],
        include_market_cap: true
      })

      setPrices(response['jupiter']?.usd || 0)
      setMarketCap(response['jupiter']?.usd_market_cap || 0,)
    }

    getPrices()
    const interval = setInterval(() => getPrices(), 120000)
    return () => clearInterval(interval)
  }, [])

  return (
    <CoingeckoContext.Provider value={{ prices, marketCap }} >
      {children}
    </CoingeckoContext.Provider>
  )
}

export function useCoingecko() {
  const context = useContext(CoingeckoContext)
  if (!context) {
    throw new Error('Missing stats context')
  }

  return context
}
