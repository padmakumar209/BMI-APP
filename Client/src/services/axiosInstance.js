import * as axios from 'axios';

let axiosInstance;
export default axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',  
});

