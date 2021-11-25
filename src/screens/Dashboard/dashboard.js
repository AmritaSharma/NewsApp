import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {getDimen} from '../../dimensions/dimen';
import {Color} from '../../constants/color_dark.json';

const Dashboard = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Dashboard!!</Text>
    </View>
  );
};

export default Dashboard;
