import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.API_BASE_URL,
});

const success = (res) => {
  return res?.data;
};
const error = (err) => {
  throw err?.response?.data || err?.message || err;
};

Axios.interceptors.response.use(success, error);

export default Axios;
