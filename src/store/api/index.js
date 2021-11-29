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
    // console.log('getDashboardData', data);
    const result = await axios({
      method: 'GET',
      url: `dashboard`,
      headers: {Authorization: `Bearer ${data.token}`},
    });
    return result;
  },

  getUserData: async data => {
    // console.log('getDashboardData', data);
    const result = await axios({
      method: 'GET',
      url: `get-profile-info`,
      headers: {Authorization: `Bearer ${data.token}`},
    });
    return result;
  },
};
