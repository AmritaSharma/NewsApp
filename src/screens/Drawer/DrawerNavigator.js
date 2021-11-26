import React, {useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {getDimen} from '../../dimensions/dimen';
import DrawerMenu from '../Drawer/DrawerMenu';
import { createStackNavigator } from '@react-navigation/stack';
import { Colour } from '../../constants/color_dark.json'
import Dashboard from '../Dashboard/Dashboard';
import InitiateDeposite from '../../screens/Deposite/InitiateDeposite'
import SettledFundReport from '../../screens/Deposite/SettledFundReport'
import UnsettledFundReport from '../../screens/Deposite/UnsettledFundReport'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator({ navigation }) {
    console.log('DrawerNavigator')
    return (
        <Drawer.Navigator
        screenOptions={{
          headerShown:true,
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#F17E2B',
          },
          drawerStyle: {
            backgroundColor: '#FFF000',
            //width: '90%',
          },
        }}
        drawerContent={() => <DrawerMenu />}>
            <Drawer.Screen name="DashboardScreen" component={Dashboard} />
            <Drawer.Screen name="InitiateDeposite" component={InitiateDeposite} />
            <Drawer.Screen name="SettledFundReport" component={SettledFundReport} />
            <Drawer.Screen name="UnsettledFundReport" component={UnsettledFundReport} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
