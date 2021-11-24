import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Login'), 2000);
  });
  return (
    <ImageBackground
      source={require('../../assets/splashscreen_background.png')}
      style={styles.imageBackgroundStyle}>
      <Image
        style={styles.iconImageStyle}
        source={require('../../assets/splashscreen_logo.png')}
      />
      <Button
        title="go to accounts"
        onPress={() => navigation.navigate('UserAccount')}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImageStyle: {
    height: 150,
    width: 150,
  },
});
export default Splash;
