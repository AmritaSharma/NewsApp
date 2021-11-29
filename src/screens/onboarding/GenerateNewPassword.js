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
import {InputTextArea} from '../../components/InputTextArea';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize';
import {useTheme} from '@react-navigation/native';

const GenerateNewPassword = ({navigation}) => {
  const {colors} = useTheme();
  const [userID, setUserID] = useState('');

  const generatePasswordFun = () => {
    navigation.navigate('PassUpdateSuccessMessage');
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
            <View>
              <Text style={styles(colors).generatePassTitleText}>
                {strings.generateNewPass}
              </Text>
              <Text style={styles(colors).generatePassParagraphText}>
                {strings.generateNewPassParagraph}
              </Text>
            </View>
            <Text style={styles(colors).titleText}>{strings.newPass}</Text>
            <InputTextArea
              placeholder={strings.newPassPlaceholder}
              setValue={text => setUserID(text)}
              value={userID}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'lock-closed'}
              IconSize={20}
            />
            <Text style={styles(colors).titleText}>{strings.confirmPassword}</Text>
            <InputTextArea
              placeholder={strings.confirmNewPassPlaceholder}
              setValue={text => setUserID(text)}
              value={userID}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'lock-closed'}
              IconSize={20}
            />
            <TouchableOpacity
              onPress={() => generatePasswordFun()}
              style={styles(colors).updateButtonView}>
              <Text style={styles(colors).updateButtonText}>{strings.updatePass}</Text>
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
    inputViewWrapper: {
      padding: 20,
      flex: 1,
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
    titleText: {
      fontWeight: '500',
      fontSize: textSize.h3,
      color: props.headerColor,
      marginVertical: 10,
    },
    generatePassTitleText: {
      color: props.headerColor,
      fontSize: textSize.h1,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    generatePassParagraphText: {
        color: props.headerColor,
        fontSize: textSize.h5,
        fontWeight: '500',
        marginBottom: 20,
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
export default GenerateNewPassword;
