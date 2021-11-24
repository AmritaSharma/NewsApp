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
import {AppColors} from '../../constants/appColors';
import {InputTextArea} from '../../components/InputTextArea';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize'

const Signup = ({navigation}) => {
  const [userID, setUserID] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [sponsersID, setSponsersID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const signupFun = () => {

  }
  return (
    <ImageBackground
      source={require('../../assets/register_bg.png')}
      style={styles.imageBackgroundStyle}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.iconImageStyle}
              source={require('../../assets/splashscreen_logo.png')}
            />
          </View>
          <View>
              <Text style={styles.createAccountText}>{strings.createAccount}</Text>
          </View>    
          <View style={styles.textInputWrapper}>
            <InputTextArea
              placeholder={strings.userId}
              setValue={text => setUserID(text)}
              value={userID}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'user'}
              IconSize={20}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <InputTextArea
              placeholder={strings.fullName}
              setValue={text => setFullName(text)}
              value={fullName}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'user'}
              IconSize={20}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <InputTextArea
              placeholder={strings.mobile}
              setValue={text => setMobileNo(text)}
              value={mobileNo}
              keyboardType={'decimal-pad'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'mobile'}
              IconSize={26}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <InputTextArea
              placeholder={strings.position}
              setValue={text => setPosition(text)}
              value={position}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'map'}
              IconSize={15}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <InputTextArea
              placeholder={strings.email}
              setValue={text => setEmail(text)}
              value={email}
              keyboardType={'email-address'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'envelope'}
              IconSize={16}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <InputTextArea
              placeholder={strings.sponserID}
              setValue={text => setSponsersID(text)}
              value={sponsersID}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'users'}
              IconSize={15}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <InputTextArea
              placeholder={strings.signupPassword}
              setValue={text => setPassword(text)}
              value={password}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'lock'}
              IconSize={20}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <InputTextArea
              placeholder={strings.confirmPassword}
              setValue={text => setConfirmPassword(text)}
              value={confirmPassword}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'lock'}
              IconSize={20}
            />
          </View>
          <TouchableOpacity 
          onPress={()=> signupFun()}
          style={styles.signupButtonView}
        >
          <Text style={styles.signupButtonText}>{strings.signup}</Text>
        </TouchableOpacity> 
        </View>
        
      </ScrollView>
     </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
  },
  iconImageStyle: {
    height: 150,
    width: 150,
  },
  textInputWrapper: {
    marginVertical: 10,
    // backgroundColor: '#000'
  },
  createAccountText: {
    color: AppColors().headerColor,
    fontSize: textSize.h1,
    fontWeight: '800',
    marginVertical: 10
  },
  signupButtonView: {
    height: 50,
    width: '100%',
    backgroundColor: AppColors().buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    marginTop: 15
  },
  signupButtonText: {
    fontSize: textSize.h4,
    color: AppColors().headerColor,
    fontWeight: '600',
  },
});
export default Signup;
