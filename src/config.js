import axios from 'axios';

const url = process.env.BASE_URL || "https://webttcn.herokuapp.com";
axios.defaults.baseURL = `${url}/v1`;
axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token_user');
  if(!!token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  if (!(config.method === 'get' && config.url === `/users/me`)) {
    delete config.headers['authorization']
  }
  return config;
}, function (error) {
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {

  return response;
}, function (error) {
  return Promise.reject(error);
});

export const config = {
  url : url
}
