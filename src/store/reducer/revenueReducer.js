import {USER_LOGIN, ROI_REVENUE_DATA, BINARY_REVENUE_DATA} from '../action';

const initState = {
  revenueData: [],
  binaryRevenueData: [],
};

export const RevenueReducer = (state = initState, action) => {
  switch (action.type) {
    case ROI_REVENUE_DATA: {
      return {...state, revenueData: action.payload};
    }
    case BINARY_REVENUE_DATA: {
      return {...state, binaryRevenueData: action.payload};
    }
    default: {
      return state;
    }
  }
};
