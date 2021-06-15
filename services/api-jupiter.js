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

const getBlockchainStatus = async () => {
  return await apiAxios.get(`/nxt?requestType=getBlockchainStatus`)
}

const getBlocks = async ({ firstIndex, lastIndex }) => {
  return await apiAxios.get(`/nxt?requestType=getBlocks&firstIndex=${firstIndex}&lastIndex=${lastIndex}`)
}

export {
  getBlocks,
  getBlockchainStatus
};
