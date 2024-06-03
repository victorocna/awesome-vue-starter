import axios from 'axios';

const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

const success = (res) => {
  return res?.data;
};
const error = (err) => {
  throw err?.response?.data || err?.message || err;
};

Axios.interceptors.response.use(success, error);

export default Axios;
