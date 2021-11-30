import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('NewsList'), 2000);
  });
  return (
    <ImageBackground
      source={require('../../assets/splash_design.png')}
      style={styles.imageBackgroundStyle}>
      <Image
        style={styles.iconImageStyle}
        source={require('../../assets/logoTatva.png')}
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
    height: 250,
    width: 250,
  },
});
export default Splash;
