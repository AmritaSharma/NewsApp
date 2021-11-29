import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerMenu from '../Drawer/DrawerMenu';
import {createStackNavigator} from '@react-navigation/stack';
import {Colour} from '../../constants/color_dark.json';
import ControlPanal from '../Dashboard/ControlPanal';
// import Dashboard from '../Dashboard/dashboard';
import UserAccount from '../Accounts/UserAccount';
import DemoTheme from '../DemoTheme';
import SettledFundReport from '../../screens/Deposite/SettledFundReport';
import UnsettledFundReport from '../../screens/Deposite/UnsettledFundReport';
import Genealogy from '../../screens/Partners/Genealogy';
import {useTheme} from '@react-navigation/native';
import InitiateDeposite from '../deposits/InitiateDeposite';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator({navigation}) {
  const {colors} = useTheme();

  console.log('DrawerNavigator');
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: colors.heading,
        headerStyle: {
          backgroundColor: colors.headerColor,
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
      <Drawer.Screen name="Genealogy" component={Genealogy} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
