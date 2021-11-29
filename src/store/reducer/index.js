import {combineReducers} from 'redux';
import {CommonReducer} from './commonReducer';
import {LoginReducer} from './loginReducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {LOGOUT_DATA} from '../action';
import {ThemeReducer} from './themeReducer';
import {RevenueReducer} from './revenueReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['login', 'theme', 'revenue'],
};

const RootReducer = combineReducers({
  common: CommonReducer,
  login: LoginReducer,
  theme: ThemeReducer,
  revenue: RevenueReducer,
});

const rootReducer1 = (state, action) => {
  if (action.type === LOGOUT_DATA) {
    state = undefined;
    AsyncStorage.clear();
  }
  return RootReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer1);
