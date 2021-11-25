import React, { useEffect } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { getDimen } from '../../dimensions/dimen';
import DrawerMenu from '../Drawer/DrawerMenu';
import { createStackNavigator } from '@react-navigation/stack';
import { Colour } from '../../constants/color_dark.json'
import dashboard from '../../screens/Dashboard/dashboard';
import InitiateDeposite from '../../screens/Deposite/InitiateDeposite'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator({ navigation }) {
    console.log('DrawerNavigator')
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTintColor: '#FFF',
                headerStyle: {
                    backgroundColor: '#000',
                },
                drawerStyle: {
                    backgroundColor: '#FFF',
                    //width: '90%',
                },
            }}
            drawerContent={() => <DrawerMenu />}>
            <Drawer.Screen name="DashboardScreen" component={dashboard} />
            <Drawer.Screen name="InitialDeposite" component={InitiateDeposite} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;


