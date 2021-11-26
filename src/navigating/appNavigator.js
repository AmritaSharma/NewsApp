import React, {useEffect, useMemo, useState} from 'react';
import darkColors from '../constants/color_dark.json';
import lightColors from '../constants/color_light.json';
//import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DemoTheme from '../screens/DemoTheme';
import Login from '../screens/onboarding/Login';
import Splash from '../screens/onboarding/Splash';
import Signup from '../screens/onboarding/Signup';
import ForgotPassword from '../screens/onboarding/ForgotPassword';
import {useSelector} from 'react-redux';
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
import {AuthContext} from '../components/context';
import AsyncStorage from '@react-native-community/async-storage';
import DrawerNavigator from '../screens/Drawer/DrawerNavigator';


const Stack = createStackNavigator();

const loginStack = () => {
  return (
    <>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DemoTheme"
        component={DemoTheme}
        options={{headerShown: false}}
     />

      <Stack.Screen
        name="Dashboard"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </>
  );
};

const homeStack = () => {
  return (
    <>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </>
  );
};

const AppNavigator = () => {
  const loginData = useSelector(state => state.login.loginData);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const authContext = useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),
    [],
  );
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
      ...lightColors,
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#ffffff',
      text: '#333333',
      ...darkColors,
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {}, [loginData]);

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            {Object.keys(loginData).length > 0 ? loginStack() : loginStack()}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default AppNavigator;
