import {
  LOADING,
  LOGOUT_DATA,
  NOTIFY,
  SELECT_CURRENCY_DATA,
  TRANSFER_DATA,
  USER_ACCOUNT,
  USER_ACCOUNTDATA,
} from '../action';
import AsyncStorage from '@react-native-community/async-storage';

const initState = {
  loading: false,
  notify: '',
  currencyData: [],
  transferData: {},
  logoutData: {},
  userData: [],
};

export const CommonReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING: {
      return {...state, loading: action.payload};
    }
    case NOTIFY: {
      return {...state, notify: action.payload, loading: false};
    }
    case SELECT_CURRENCY_DATA: {
      return {...state, currencyData: action.payload};
    }
    case TRANSFER_DATA: {
      return {...state, transferData: action.payload};
    }

    case TRANSFER_DATA: {
      return {...state, transferData: action.payload};
    }
    case USER_ACCOUNTDATA: {
      return {...state, userData: action.payload};
    }
    // case LOGOUT_DATA: {
    //   //AsyncStorage.clear();
    //   console.log(AsyncStorage.getAllKeys());
    //   return;
    // }
    default: {
      return state;
    }
  }
};
