const PROXY_URL = process.env.NODE_ENV === 'production'
  ? 'https://leda.gojupiter.tech/'
  : 'http://localhost:8000'

const JUPITER_URL = 'https://newnode.gojupiter.tech'

export {
  PROXY_URL,
  JUPITER_URL,
}