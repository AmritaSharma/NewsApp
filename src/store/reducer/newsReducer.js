import {
    NEWS_LIST_DATA,
  } from '../action';
  
  const initState = {
    newsTitle: [],
  };
  
  export const newsReducer = (state = initState, action) => {
    switch (action.type) {
      case NEWS_LIST_DATA: {
        return {...state, newsTitle: action.payload};
      }
      default: {
        return state;
      }
    }
  };
  