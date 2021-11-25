import React, {useState} from 'react';
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
import {AppColors} from '../../constants/appColors';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize';
import {useTheme} from '@react-navigation/native';

const Login = ({navigation}) => {
  const {colors} = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const {color} = useTheme();
  const loginFun = () => {
    console.log('email' + email, ' password' + password);
    navigation.navigate('DemoTheme');
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
            <Text style={styles(colors).welcomeTitleText}>
              {strings.welcomeBack}
            </Text>
          </ImageBackground>
        </View>
        <View style={{height: '65%'}}>
          {/*  */}
          <ScrollView style={styles(colors).inputViewWrapper}>
            <View>
              <Text style={styles(colors).loginTitleText}>{strings.login}</Text>
            </View>
            <Text style={styles(colors).titleText}>{strings.email}</Text>
            <InputTextArea
              placeholder={strings.emailPlaceholder}
              setValue={text => setEmail(text)}
              value={email}
              keyboardType={'email-address'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'mail'}
            />
            <Text style={styles(colors).titleText}>{strings.password}</Text>
            <InputTextArea
              placeholder={strings.passwordPlaceholder}
              setValue={text => setPassword(text)}
              value={password}
              keyboardType={'default'}
              secureTextEntry={true}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'lock-closed'}
            />
            <View>
              <Text style={styles(colors).forgetPassText}>
                {strings.forgetPassword}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => loginFun()}
              style={styles(colors).loginButtonView}>
              <Text style={styles(colors).loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles(colors).dontHaveAccntView}>
              <Text style={styles(colors).dontHaveAccntText}>
                {strings.dontHaveAccnt}
              </Text>
            </View>
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
      marginTop: '10%',
      height: '34%',
      width: '50%',
    },
    welcomeTitleText: {
      fontSize: textSize.h1,
      marginTop: '5%',
      fontWeight: 'bold',
      color: props.headerColor,
    },
    titleText: {
      fontWeight: '500',
      fontSize: textSize.h3,
      color: props.headerColor,
      marginVertical: 10,
    },
    loginTitleText: {
      color: props.headerColor,
      fontSize: textSize.h1,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    forgetPassText: {
      fontSize: textSize.h6,
      color: props.headerColor,
      textAlign: 'right',
      marginVertical: 15,
    },
    loginButtonView: {
      backgroundColor: props.buttonColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: '4%',
      borderRadius: 25,
    },
    loginButtonText: {
      fontSize: textSize.h4,
      color: props.headerColor,
      fontWeight: '600',
    },
    dontHaveAccntView: {
      marginVertical: 10,
    },
    dontHaveAccntText: {
      fontWeight: '600',
      fontSize: textSize.h4,
      color: props.headerColor,
      textAlign: 'center',
    },
  });
export default Login;
