import React from 'react';
import {View, Text, Button} from 'react-native';
const Splash = ({navigation}) => {
  return (
    <View>
      <Text>Splash</Text>

      <Button
        title="go to accounts"
        onPress={() => navigation.navigate('UserAccount')}
      />
    </View>
  );
};

export default Splash;
