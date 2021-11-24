import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import AppColors from '../constants/appColors';
import textSize from '../constants/textSize';
const UserAccount = () => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/splashscreen_background.png')}
        resizeMode="cover"
        style={{height: '100%', width: '100%'}}>
        <View
          style={{
            backgroundColor: '#2D2942',
            height: '10%',
            justifyContent: 'space-around',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/menu_icon.png')}
              style={{margin: 10}}
            />
            <Image
              source={require('../assets/user_id_icon.png')}
              style={{marginHorizontal: 10}}
            />

            <Text style={{fontSize: textSize.h1, color: '#fff'}}>
              {' '}
              User Account
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', margin: 20}}>
          <Image
            source={require('../assets/user_account_img.png')}
            style={{}}
          />
          <Text style={{fontSize: textSize.h2}}> Account Information </Text>
        </View>
        <View></View>
        <Text></Text>
      </ImageBackground>
    </View>
  );
};

export default UserAccount;
