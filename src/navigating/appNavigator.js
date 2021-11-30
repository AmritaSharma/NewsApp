import React, {useEffect, useMemo, useState} from 'react';
import darkColors from '../constants/color_dark.json';
import lightColors from '../constants/color_light.json';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/onboarding/Splash';
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
import NewsList from '../screens/News/NewsList';
import NewsDetails from '../screens/News/NewsDetails';

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
        name="NewsList"
        component={NewsList}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{headerShown: false}}
      />
    </>
  );
};

const AppNavigator = () => {
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


  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            { loginStack() }
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default AppNavigator;
