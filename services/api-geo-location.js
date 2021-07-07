import axios from 'axios'

import { GEO_LOCATION_URL } from 'config'

const apiAxios = axios.create({
  baseURL: GEO_LOCATION_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

apiAxios.interceptors.response.use((response) => {
  return response.data;
});

const getGeoLocation = async (ipAddress) => {
  return await apiAxios.get(`/${ipAddress}`)
}

export {
  getGeoLocation
};
