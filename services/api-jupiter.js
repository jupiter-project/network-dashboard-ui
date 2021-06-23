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

export {
  getAccount,
  getBlock,
  getBlocks,
  getBlockchainStatus,
  getNextBlockGenerators,
  getUnconfirmedTransactions
};
