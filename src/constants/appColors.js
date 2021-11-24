import darkColors from '../constants/color_dark.json';
import lightColors from '../constants/color_light.json';
import AsyncStorage from '@react-native-community/async-storage';
import {DarkBg} from '../components/DarkBg';
import {LightBg} from '../components/LightBg';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

let defaultTheme = true;
export const SetColors = theme => {
  console.log(theme);
  //console.log('AsyncStorage', AsyncStorage.getItem('theme'));
  defaultTheme = theme;
};

export const AppColors = () => {
  return defaultTheme ? darkColors : lightColors;
};

export const AppBgs = () => {
  return defaultTheme ? DarkBg : LightBg;
};
