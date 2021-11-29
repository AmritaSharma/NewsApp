import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize';
import {useTheme} from '@react-navigation/native';

const PassUpdateSuccessMessage = ({navigation}) => {
  const {colors} = useTheme();

  const gotoAccountFun = () => {
    navigation.navigate('ThankYou');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles(colors).container}>
      <View style={{flex: 1}}>
        <View style={{height: '35%'}}>
          {/*  */}
          <ImageBackground
            source={require('../../assets/login_bg.png')}
            style={styles(colors).imageBackgroundStyle}>
            <Image
              style={styles(colors).iconImageStyle}
              source={require('../../assets/login_logo.png')}
            />
          </ImageBackground>
        </View>
        <View style={{height: '65%'}}>
          {/*  */}
          <ScrollView style={styles(colors).inputViewWrapper}>
            <View style={styles(colors).successMsgView}>
                <Icon
                    name={'checkmark-circle'}
                    size={100}
                    style={{marginRight: 10}}
                    color={colors.buttonColor}
                />
                <Text style={styles(colors).generatePassTitleText}>
                    {strings.passUpdateSuccessMessage}
                </Text>
            </View>  
            <TouchableOpacity
              onPress={() => gotoAccountFun()}
              style={styles(colors).updateButtonView}>
              <Text style={styles(colors).updateButtonText}>{strings.gotoAccount}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.background,
    },
    imageBackgroundStyle: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    iconImageStyle: {
      marginTop: '20%',
      height: '34%',
      width: '50%',
    },
    inputViewWrapper: {
        padding: 20,
        flex: 1,
    },
    titleText: {
      fontWeight: '500',
      fontSize: textSize.h3,
      color: props.headerColor,
      marginVertical: 10,
    },
    successMsgView: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    generatePassTitleText: {
      color: props.headerColor,
      fontSize: textSize.h1,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center'
    },
    updateButtonView: {
      backgroundColor: props.buttonColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: '3%',
      borderRadius: 25,
      marginVertical: 20,
    },
    updateButtonText: {
      fontSize: textSize.h2,
      color: props.headerColor,
      fontWeight: '600',
    },
    
  });
export default PassUpdateSuccessMessage;
