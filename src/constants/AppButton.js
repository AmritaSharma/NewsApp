import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppColors} from './appColors';
import textSize from './textSize';
// import { Container } from './styles';

const AppButton = ({text, onPress, style}) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{x: 0.0, y: 0.13}}
          end={{x: 0.0, y: 0.85}}
          style={styles.buttonView}
          colors={[
            AppColors().buttonColor,
            AppColors().heading,
            AppColors().buttonColor,
          ]}>
          <Text style={styles.ButtonText}> {text} </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: AppColors().buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '4%',
    borderRadius: 25,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors().background,
  },

  ButtonText: {
    fontSize: textSize.h3,
    color: AppColors().background,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
