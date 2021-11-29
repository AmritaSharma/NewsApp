import {
    DASHBOARD_DATA,
  } from '../action';
  
  const initState = {
    cardsData: [],
  };
  
  export const dashboardReducer = (state = initState, action) => {
    switch (action.type) {
      case DASHBOARD_DATA: {
        return {...state, cardsData: action.payload};
      }
      default: {
        return state;
      }
    }
  };
  