import React from 'react';
import {View, Text} from 'react-native';
import {AppColors} from '../constants/appColors';

const Splash = ({navigation}) => {
  return (
    <View>
      <Text style={{color: AppColors().accent}}>Splash</Text>
    </View>
  );
};

export default Splash;
