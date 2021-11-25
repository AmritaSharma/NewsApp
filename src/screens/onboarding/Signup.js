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
  const signupFun = () => {

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
            <Icon
              name={!checkTerm?'square-outline': 'checkbox-outline'}
              size={20}
              style={{marginRight: 10}}
              color={colors.iconColor}
              onPress={()=>setCheckTerm(!checkTerm)}
            />
            <Text style={styles(colors).passwordNoteStyles}>{strings.readPolicy}</Text>
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
    height: 50,
    width: '100%',
    backgroundColor: props.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    marginTop: 15
  },
  signupButtonText: {
    fontSize: textSize.h4,
    color: props.headerColor,
    fontWeight: '600',
  },
});
export default Signup;
