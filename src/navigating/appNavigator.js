import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import {useSelector} from 'react-redux';

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

  useEffect(() => {}, [loginData]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.keys(loginData).length > 0 ? loginStack() : loginStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
