import React from 'react';
import {View, Text, Button} from 'react-native';
import {AppColors} from '../constants/appColors';

const Splash = ({navigation}) => {
  return (
    <View>
      <Text style={{color: AppColors().accent}}>Splash</Text>
      <Button
        title="go to accounts"
        onPress={() => navigation.navigate('UserAccount')}
      />
    </View>
  );
};

export default Splash;
