import React, {useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {getDimen} from '../../dimensions/dimen';
import DrawerMenu from '../Drawer/DrawerMenu';
import {createStackNavigator} from '@react-navigation/stack';
import {Colour} from '../../constants/color_dark.json';
import ControlPanal from '../Dashboard/ControlPanal';
import InitiateDeposite from '../../screens/Deposite/InitiateDeposite';
import SettledFundReport from '../../screens/Deposite/SettledFundReport';
import UnsettledFundReport from '../../screens/Deposite/UnsettledFundReport';
import Genealogy from '../../screens/Partners/Genealogy';
import {useTheme} from '@react-navigation/native';

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
          backgroundColor: '#FFF000',
          //width: '90%',
        },
      }}
      drawerContent={() => <DrawerMenu />}>
      {/* <Drawer.Screen name="DashboardScreen" component={ControlPanal} /> */}
      <Drawer.Screen name="InitiateDeposite" component={InitiateDeposite} />
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
