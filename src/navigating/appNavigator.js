import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/onboarding/Login';
import Splash from '../screens/onboarding/Splash';
import {useSelector} from 'react-redux';
import UserAccount from '../screens/Accounts/UserAccount';
import InitiateDeposite from '../screens/deposits/InitiateDeposite';

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
        name="UserAccount"
        component={UserAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InitiateDeposite"
        component={InitiateDeposite}
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
