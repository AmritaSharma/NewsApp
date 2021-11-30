import axios from 'axios';
import * as config from '../../constants/config.json';

axios.defaults.baseURL = config.liveUrl;

export const API = {
  getLogin: async data => {
    const result = await axios({
      method: 'POST',
      url: `user/login`,
      data: data.data,
    });
    return result;
  },

  getSignup: async data => {
    const result = await axios({
      method: 'POST',
      url: `/users/signup`,
      data: data,
    });
    return result;
  },

  getDashboardData: async data => {
    const result = await axios({
      method: 'GET',
      url: `get-user-dashboard`,
      headers: {Authorization: `Bearer ${data.token}`},
    });
    return result;
  },

  getRoiRevenueApi: async data => {
    console.log('getRoiRevenueApi', data);
    const result = await axios({
      method: 'POST',
      url: `roi-income`,
      data: data.data,
      headers: {Authorization: `Bearer ${data.token}`},
    });
    return result;
  },

  getBinaryRevenueApi: async data => {
    console.log('getBinaryRevenueApi', data);
    const result = await axios({
      method: 'POST',
      url: `binary-income`,
      data: data.data,
      headers: {Authorization: `Bearer ${data.token}`},
    });
    return result;
  },

  getUserData: async data => {
    const result = await axios({
      method: 'GET',
      url: `get-profile-info`,
      headers: {Authorization: `Bearer ${data.token}`},
    });
    return result;
  },
};
