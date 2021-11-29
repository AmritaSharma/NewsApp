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
import InitiateDeposite from '../../screens/Deposite/InitiateDeposite';
import PerfectMoneyFundReports from '../../screens/Deposite/PerfectMoneyFundReports';
import PurchaseWalletReport from '../../screens/Deposite/PurchaseWalletReport';
import DepositFromPurchaseWallet from '../../screens/Deposite/DepositFromPurchaseWallet';
import RoiRevenue from '../Revenue/RoiRevenue';
import BinaryRevenue from '../Revenue/BinaryRevenue';
import TeamView from '../../screens/Partners/TeamView';
import DirectPartnerList from '../../screens/Partners/DirectPartnerList';

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
      <Drawer.Screen name="DashboardScreen" component={ControlPanal} />
      <Drawer.Screen name="InitiateDeposite" component={InitiateDeposite} />
      <Drawer.Screen name="UserAccount" component={UserAccount} />
      <Drawer.Screen name="Logout" component={DemoTheme} />
      <Drawer.Screen name="SettledFundReport" component={SettledFundReport} />
      <Drawer.Screen name="UnsettledFundReport"component={UnsettledFundReport}  />
      <Drawer.Screen name="PerfectMoneyFundReports" component={PerfectMoneyFundReports} />
      <Drawer.Screen name="PurchaseWalletReport" component={PurchaseWalletReport} />
      <Drawer.Screen name="DepositFromPurchaseWallet" component={DepositFromPurchaseWallet} />
      <Drawer.Screen name="Genealogy" component={Genealogy} />
      <Drawer.Screen name="ROIRevenue" component={RoiRevenue} />
      <Drawer.Screen name="BinaryRevenue" component={BinaryRevenue} />
      <Drawer.Screen name="TeamView" component={TeamView} />
      <Drawer.Screen name="DirectPartnerList" component={DirectPartnerList} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
