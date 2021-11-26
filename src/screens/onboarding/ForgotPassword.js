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
import {Checkbox} from 'react-native-paper';
import {InputTextArea} from '../../components/InputTextArea';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize';
import {useTheme} from '@react-navigation/native';
import EnterOtpPopView from './components/EnterOtpPopView';

const ForgotPassword = ({navigation}) => {
  const {colors} = useTheme();
  const [userID, setUserID] = useState('');
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const forgotPasswordFun = () => {
    console.log('userID' + userID);
    setModalVisible(true);
    // navigation.navigate('DemoTheme');
  };
  const callbackFromOTP = useCallback(status => {
    setModalVisible(status);
  }, []);
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
              <Text style={styles(colors).forgotTitleText}>
                {strings.forgotPassword}
              </Text>
            </View>
            <Text style={styles(colors).titleText}>{strings.userId}</Text>
            <InputTextArea
              placeholder={strings.userIdPlaceholder}
              setValue={text => setUserID(text)}
              value={userID}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'person-outline'}
              IconSize={20}
            />
            <View style={styles(colors).checkboxContainer}>
              <View style={styles(colors).checkboxView}>
                <Checkbox
                  color={colors.iconColor}
                  uncheckedColor={colors.iconColor}
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text style={styles(colors).textlabel}>{strings.notRobot}</Text>
              </View>
              <View style={styles(colors).rightIconWrapper}>
                <Image
                  style={styles(colors).rightIcon}
                  color={'white'}
                  source={require('../../assets/captcha.png')}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => forgotPasswordFun()}
              style={styles(colors).sendButtonView}>
              <Text style={styles(colors).sendButtonText}>Send</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      {modalVisible && (
        <EnterOtpPopView
          modalVisible={modalVisible}
          parentCallback={callbackFromOTP}
        />
      )}
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
    forgotTitleText: {
      color: props.headerColor,
      fontSize: textSize.h1,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    sendButtonView: {
      backgroundColor: props.buttonColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: '3%',
      borderRadius: 25,
      marginVertical: 20,
    },
    sendButtonText: {
      fontSize: textSize.h2,
      color: props.headerColor,
      fontWeight: '600',
    },
    checkboxContainer: {
      flexDirection: 'row',
      backgroundColor: '#EAEBDC',
      height: 45,
      width: '100%',
      marginTop: 25,
      marginBottom: 10,
      alignItems: 'center',
    },
    checkboxView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '90%',
    },
    textlabel: {
      color: props.headerColor,
      fontSize: textSize.h5,
      fontWeight: 'bold',
      // marginLeft: 5,
    },
    rightIconWrapper: {
      marginTop: 9,
      // marginLeft: '30%'
    },
    rightIcon: {
      height: 30,
      width: 30,
    },
  });
export default ForgotPassword;
