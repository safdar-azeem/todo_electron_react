import axios from 'axios';

const baseURL = 'http://localhost:3001/api';

const instance = axios.create({
  baseURL,
  timeout: 30000, // 30 secs
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    // we can add any extra props here like auth token etc
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
