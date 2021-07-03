import axios from 'axios'

import { JUPITER_URL } from 'config'

const apiAxios = axios.create({
  baseURL: JUPITER_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

apiAxios.interceptors.response.use((response) => {
  return response.data;
});

const getBlock = async (block) => {
  return await apiAxios.get(`/nxt?requestType=getBlock&includeTransactions=true&block=${block}`)
}

const getBlocks = async ({ firstIndex, lastIndex }) => {
  return await apiAxios.get(`/nxt?requestType=getBlocks&includeTransactions=true&firstIndex=${firstIndex}&lastIndex=${lastIndex}`)
}

const getUnconfirmedTransactions = async () => {
  return await apiAxios.get(`/nxt?requestType=getUnconfirmedTransactions&firstIndex=${0}&lastIndex=${20}`)
}

const getBlockchainStatus = async () => {
  return await apiAxios.get(`/nxt?requestType=getBlockchainStatus`)
}

const getNextBlockGenerators = async () => {
  return await apiAxios.get(`/nxt?requestType=getNextBlockGenerators&limit=10`)
}

const getAccount = async (account) => {
  return await apiAxios.get(`/nxt?requestType=getAccount&account=${account}`)
}

const getForgeAsset = async () => {
  return await apiAxios.get(`/nxt?requestType=getAssetAccounts&asset=15210174725739850610&firstIndex=${0}&lastIndex=${0}`)
}

const getBlockchainTransactions = async ({ account, firstIndex, lastIndex }) => {
  return await apiAxios.get(`/nxt?requestType=getBlockchainTransactions&account=${account}&firstIndex=${firstIndex}&lastIndex=${lastIndex}`)
}

const getAccountAssets = async (account) => {
  return await apiAxios.get(`/nxt?requestType=getAccountAssets&account=${account}&includeAssetInfo=true`)
}

const getAccountCurrencies = async (account) => {
  return await apiAxios.get(`/nxt?requestType=getAccountCurrencies&account=${account}&includeCurrencyInfo=true`)
}

const getAliases = async (account) => {
  return await apiAxios.get(`/nxt?requestType=getAliases&account=${account}`)
}

const getAliasByName = async (alias) => {
  return await apiAxios.get(`/nxt?requestType=getAlias&aliasName=${alias}`)
}

const getAliasByID = async (alias) => {
  return await apiAxios.get(`/nxt?requestType=getAlias&alias=${alias}`)
}

const getAllAssets = async () => {
  return await apiAxios.get(`/nxt?requestType=getAllAssets&includeCounts=true`)
}

const getAsset = async (asset) => {
  return await apiAxios.get(`/nxt?requestType=getAsset&asset=${asset}`)
}

const getPeers = async () => {
  return await apiAxios.get(`/nxt?requestType=getPeers&includePeerInfo=true&active=true`)
}

const getTransaction = async (transaction) => {
  return await apiAxios.get(`/nxt?requestType=getTransaction&transaction=${transaction}&includePhasingResult=true`)
}

const getAllWaitingTransactions = async () => {
  return await apiAxios.get(`/nxt?requestType=getAllWaitingTransactions`)
}

const searchAllOpenAskOrders = async () => {
  return await apiAxios.get(`/nxt?requestType=searchAllOpenAskOrders&query=nftleda`)
}

const getAskOrders = async (asset) => {
  return await apiAxios.get(`/nxt?requestType=getAskOrders&asset=${asset}&includeNTFInfo=true`)
}

const getBidOrders = async (asset) => {
  return await apiAxios.get(`/nxt?requestType=getBidOrders&asset=${asset}&includeNTFInfo=true`)
}

const getLastTrades = async (asset) => {
  return await apiAxios.get(`/nxt?requestType=getLastTrades&assets=${asset}`)
}

const getAssetAccounts = async (asset) => {
  return await apiAxios.get(`/nxt?requestType=getAssetAccounts&asset=${asset}`)
}

export {
  getAccount,
  getBlock,
  getBlocks,
  getBlockchainStatus,
  getNextBlockGenerators,
  getUnconfirmedTransactions,
  getForgeAsset,
  getBlockchainTransactions,
  getAccountAssets,
  getAccountCurrencies,
  getAliases,
  getAliasByName,
  getAliasByID,
  getAllAssets,
  getAsset,
  getPeers,
  getTransaction,
  getAllWaitingTransactions,
  searchAllOpenAskOrders,
  getAskOrders,
  getBidOrders,
  getLastTrades,
  getAssetAccounts
};
