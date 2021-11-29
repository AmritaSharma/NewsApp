import {USER_ACCOUNTDATA} from '../action';

const initState = {
  useraccountData: [],
};

export const useraccountReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_ACCOUNTDATA: {
      return {...state, useraccountData: action.payload};
    }
    default: {
      return state;
    }
  }
};
