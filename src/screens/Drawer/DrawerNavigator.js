import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerMenu from '../Drawer/DrawerMenu';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../Dashboard/dashboard';
import UserAccount from '../Accounts/UserAccount';
//import InitiateDeposite from '../../screens/Deposite/InitiateDeposite';
import DemoTheme from '../DemoTheme';
import InitiateDeposite from '../deposits/InitiateDeposite';
import {Colour} from '../../constants/color_dark.json';
// import ControlPanal from '../Dashboard/ControlPanal';
import SettledFundReport from '../../screens/Deposite/SettledFundReport';
import UnsettledFundReport from '../../screens/Deposite/UnsettledFundReport';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator({navigation}) {
  console.log('DrawerNavigator');
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#F17E2B',
        },
        drawerStyle: {
          backgroundColor: '#FFF',
          //width: '90%',
        },
      }}
      drawerContent={() => <DrawerMenu />}>
      {/* <Drawer.Screen name="DashboardScreen" component={ControlPanal} /> */}
      <Drawer.Screen name="InitiateDeposite" component={InitiateDeposite} />
      <Drawer.Screen name="UserAccount" component={UserAccount} />
      <Drawer.Screen name="Logout" component={DemoTheme} />
      <Drawer.Screen name="SettledFundReport" component={SettledFundReport} />
      <Drawer.Screen
        name="UnsettledFundReport"
        component={UnsettledFundReport}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
