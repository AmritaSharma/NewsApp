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
import Icon from 'react-native-vector-icons/Ionicons';
import {InputTextArea} from '../../components/InputTextArea';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize'
import { useTheme } from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';

const Signup = ({navigation}) => {
  const {colors} = useTheme();
  const [userID, setUserID] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [sponsersID, setSponsersID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkTerm, setCheckTerm] = useState(false);
  const [checked, setChecked] = useState(false);

  const signupFun = () => {
    navigation.navigate('ForgotPassword')
  }
  return (
    <ImageBackground
      source={require('../../assets/register_bg.png')}
      style={styles(colors).imageBackgroundStyle}>
      <ScrollView>
        <View style={styles(colors).container}>
          <View>
            <Image
              style={styles(colors).iconImageStyle}
              source={require('../../assets/login_logo.png')}
            />
          </View>
          <View>
              <Text style={styles(colors).createAccountText}>{strings.createAccount}</Text>
          </View>    
          <View style={styles(colors).textInputWrapper}>
            <InputTextArea
              placeholder={strings.userId}
              setValue={text => setUserID(text)}
              value={userID}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'person-outline'}
              IconSize={20}
            />
          </View>
          <View style={styles(colors).textInputWrapper}>
            <InputTextArea
              placeholder={strings.fullName}
              setValue={text => setFullName(text)}
              value={fullName}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'person-outline'}
              IconSize={20}
            />
          </View>
          <View style={styles(colors).textInputWrapper}>
            <InputTextArea
              placeholder={strings.mobile}
              setValue={text => setMobileNo(text)}
              value={mobileNo}
              keyboardType={'decimal-pad'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'call-outline'}
              IconSize={20}
            />
          </View>
          <View style={styles(colors).textInputWrapper}>
            <InputTextArea
              placeholder={strings.position}
              setValue={text => setPosition(text)}
              value={position}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'map-outline'}
              IconSize={15}
            />
          </View>
          <View style={styles(colors).textInputWrapper}>
            <InputTextArea
              placeholder={strings.email}
              setValue={text => setEmail(text)}
              value={email}
              keyboardType={'email-address'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'mail-outline'}
              IconSize={16}
            />
          </View>
          <View style={styles(colors).textInputWrapper}>
            <InputTextArea
              placeholder={strings.sponserID}
              setValue={text => setSponsersID(text)}
              value={sponsersID}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'people-outline'}
              IconSize={15}
            />
          </View>
          <View style={styles(colors).textInputWrapper}>
            <InputTextArea
              placeholder={strings.signupPassword}
              setValue={text => setPassword(text)}
              value={password}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'lock-closed-outline'}
              IconSize={15}
            />
          </View>
          <View style={styles(colors).textInputWrapper}>
            <InputTextArea
              placeholder={strings.confirmPassword}
              setValue={text => setConfirmPassword(text)}
              value={confirmPassword}
              keyboardType={'default'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'lock-closed-outline'}
              IconSize={15}
            />
          </View>
          <View style={styles(colors).passwordNoteView}>
            <Text style={styles(colors).passwordNoteStyles}>{strings.passwordNote}</Text>
          </View> 
          <View style={styles(colors).termsWrapperView}>
            <Checkbox
              color={colors.iconColor}
              uncheckedColor={colors.iconColor}
              status={checkTerm ? 'checked' : 'unchecked'}
              onPress={() => {
                setCheckTerm(!checkTerm);
              }}
            />
            <Text style={styles(colors).passwordNoteStyles}>{strings.readPolicy}</Text>
          </View> 
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
          onPress={()=> signupFun()}
          style={styles(colors).signupButtonView}
        >
          <Text style={styles(colors).signupButtonText}>{strings.signup}</Text>
        </TouchableOpacity> 
        </View>
      </ScrollView>
     </ImageBackground>
  );
};
const styles = (props) => StyleSheet.create({
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
    height: 110,
    width: 280,
  },
  textInputWrapper: {
    marginVertical: 10,
  },
  createAccountText: {
    color: props.headerColor,
    fontSize: textSize.h1,
    fontWeight: '800',
    marginVertical: 10
  },
  passwordNoteView: {
    alignSelf: 'flex-start'
  },
  passwordNoteStyles: {
    color: props.headerColor,
    fontSize: textSize.h5,
    fontWeight: '400',
    marginVertical: 5,
  },
  termsWrapperView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  signupButtonView: {
    width: '100%',
    backgroundColor: props.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3%',
    borderRadius: 25,
    marginVertical: 20
  },
  signupButtonText: {
    fontSize: textSize.h2,
    color: props.headerColor,
    fontWeight: '600',
  },
  checkboxContainer: {
    flexDirection: 'row',
    backgroundColor: '#EAEBDC',
    height: 45,
    width: '100%',
    marginTop: 10,
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  checkboxView: {
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '90%'
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
export default Signup;
