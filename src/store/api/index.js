import axios from 'axios';
import * as config from '../../constants/config.json';

axios.defaults.baseURL = config.liveUrl;

export const API = {
  getNewsList: async data => {
    const result = await axios({
      method: 'GET',
      url:'https://newsapi.org/v2/everything?q=tesla&from=2021-10-30&sortBy=publishedAt&apiKey=cde2c5a59de04c6a8fb445c7c4d0268b',
    });
    return result;
  },
};
