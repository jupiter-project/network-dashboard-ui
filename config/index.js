const PROXY_URL = process.env.NODE_ENV === 'production'
  ? 'https://stats.jup.io/'
  : 'http://localhost:8000'

const JUPITER_URL = 'https://nodes.gojupiter.tech'
const GEO_LOCATION_URL = 'https://freegeoip.app/json'

export {
  PROXY_URL,
  JUPITER_URL,
  GEO_LOCATION_URL
}