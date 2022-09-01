import axios from 'axios';
import { API_BASE } from '@/appConfigs';

const http = axios.create({
  baseURL: API_BASE,
  // timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export { http };
