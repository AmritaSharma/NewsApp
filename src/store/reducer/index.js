import {combineReducers} from 'redux';
import {CommonReducer} from './commonReducer';
import {LoginReducer} from './loginReducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {LOGOUT_DATA} from '../action';
import {ThemeReducer} from './themeReducer';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'login',
    'theme',
  ],
};

const RootReducer = combineReducers({
  common: CommonReducer,
  login: LoginReducer,
  theme: ThemeReducer,
});

const rootReducer1 = (state, action) => {
  if (action.type === LOGOUT_DATA) {
    state = undefined;
    AsyncStorage.clear();
  }
  return RootReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer1);
