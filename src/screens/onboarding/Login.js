import React,{useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity} from 'react-native';
import { InputTextArea } from '../../components/InputTextArea';
import { AppColors } from '../../constants/appColors';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginFun = () => {
    console.log('email'+ email, ' password'+password)
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}>
      {/*  */}
      <ImageBackground
        source={require('../../assets/login_bg.png')}
        style={styles.imageBackgroundStyle}>
          <Image
            style={styles.iconImageStyle}
            source={require('../../assets/splashscreen_logo.png')}
          />
          <Text style={styles.welcomeTitleText}>{strings.welcomeBack}</Text>
      </ImageBackground>
      {/*  */}
      <ScrollView style={styles.inputViewWrapper}>
        <View>
          <Text style={styles.loginTitleText}>{strings.login}</Text>
        </View>
        <Text style={styles.titleText}>{strings.email}</Text>
        <InputTextArea
          placeholder={strings.emailPlaceholder}
          setValue={(text)=>setEmail(text)} 
          value={email} 
          keyboardType={'email-address'}
          secureTextEntry={false} 
          onSubmitEditing={(text)=>console.log('text',text)} 
          maxLength={100}
          IconName={'envelope'}
          IconSize={20}
        />
        <Text style={styles.titleText}>{strings.password}</Text>
        <InputTextArea
          placeholder={strings.passwordPlaceholder}
          setValue={(text)=>setPassword(text)} 
          value={password} 
          keyboardType={'default'}
          secureTextEntry={true} 
          onSubmitEditing={(text)=>console.log('text',text)} 
          maxLength={100}
          IconName={'lock'}
          IconSize={20}
        />
        <View>
          <Text style={styles.forgetPassText}>{strings.forgetPassword}</Text>
        </View>  
        <TouchableOpacity 
          onPress={()=> loginFun()}
          style={styles.loginButtonView}
        >
          <Text style={styles.loginButtonText}>{strings.login}</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.dontHaveAccntView} onPress={()=>navigation.navigate('Signup')}>
          <Text style={styles.dontHaveAccntText}>{strings.dontHaveAccnt}</Text>
        </TouchableOpacity>   
      </ScrollView>  
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors().background,
  },
  inputViewWrapper: {
    padding: 20,
    flex: 1,
  },
  imageBackgroundStyle: {
    width: '100%',
    height: 350,
    alignItems: 'center',
  },
  iconImageStyle: {
    marginTop: '20%',
    height: 150, 
    width: 150
  },
  welcomeTitleText: {
    fontSize: textSize.h1,
    fontWeight: 'bold',
    color: AppColors().headerColor
  },
  titleText: {
    fontWeight: '500',
    fontSize: textSize.h3,
    color: AppColors().headerColor,
    marginVertical: 10
  },
  loginTitleText: {
    color: AppColors().headerColor,
    fontSize: textSize.h1,
    fontWeight: 'bold',
    marginBottom: 20
  },
  forgetPassText: {
    fontSize: textSize.h6,
    color: AppColors().headerColor,
    textAlign: 'right',
    marginVertical: 15
  },
  loginButtonView: {
    backgroundColor: AppColors().buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10
  },
  loginButtonText: {
    fontSize: textSize.h4,
    color: AppColors().headerColor,
    fontWeight: '600',
  },
  dontHaveAccntView: {
    marginVertical: 50,
  },
  dontHaveAccntText: {
    fontWeight: '600',
    fontSize: textSize.h4,
    color: AppColors().headerColor,
    textAlign: 'center'
  }
})
export default Login;
