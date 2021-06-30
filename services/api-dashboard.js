import axios from 'services/axios'

const getDashboard = async () => {
  return await axios.get('/api/dashboard');
};

export {
  getDashboard,
};