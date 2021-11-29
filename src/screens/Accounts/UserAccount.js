import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import textSize from '../../constants/textSize';
import strings from '../../constants/localization';
import {useTheme} from '@react-navigation/native';
import {InputTextArea} from '../../components/InputTextArea';
import AppButton from '../../constants/AppButton';

const UserAccount = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();

  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [sponserId, setSponserID] = useState('');
  const [country, setCountry] = useState('');
  const [btcadd, setBtcAdd] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setEmail] = useState('');

  const CreateAcc = () => {
    console.log('userId' + userId, ' name' + name);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require('../../assets/splashscreen_background.png')}
          resizeMode="cover"
          style={styles(colors).bgImg}>
          <ScrollView style={{flex: 1, marginVertical: 20}}>
            <View style={styles(colors).body}>
              <View style={styles(colors).innerView}>
                <Text style={styles(colors).label}>{strings.UserId}</Text>
                <InputTextArea
                  placeholder="Cbhc565"
                  placeholderTextColor={colors.heading}
                  setValue={text => setUserId(text)}
                  value={userId}
                  name={'person'}
                  size={20}
                />

                <Text style={styles(colors).label}> {strings.FullName}</Text>
                <InputTextArea
                  placeholder="name"
                  placeholderTextColor={colors.heading}
                  setValue={text => setName(text)}
                  value={name}
                  name={'person'}
                  size={20}
                  maxLength={15}
                />

                <Text style={styles(colors).label}> {strings.sponserID}</Text>
                <InputTextArea
                  placeholder="sponser id"
                  placeholderTextColor={colors.heading}
                  setValue={text => setSponserID(text)}
                  value={sponserId}
                  name={'groups'}
                  size={20}
                  maxLength={10}
                />

                <Text style={styles(colors).label}> {strings.Country}</Text>
                <InputTextArea
                  placeholder="India"
                  placeholderTextColor={colors.heading}
                  setValue={text => setCountry(text)}
                  value={country}
                  IconName={'ios-location'}
                  IconSize={20}
                  maxLength={15}
                />

                <Text style={styles(colors).label}> {strings.BTCAddress}</Text>
                <InputTextArea
                  placeholder=" Address"
                  placeholderTextColor={colors.heading}
                  setValue={text => setBtcAdd(text)}
                  value={btcadd}
                  materialCName={'bitcoin'}
                  msize={20}
                  maxLength={20}
                />

                <Text style={[styles(colors).label]}> {strings.email} </Text>
                <InputTextArea
                  type="email"
                  placeholder="Email"
                  keyboardType={'email-address'}
                  placeholderTextColor={colors.heading}
                  setValue={text => setEmail(text)}
                  value={email}
                  IconName={'mail'}
                  IconSize={20}
                  maxLength={15}
                />

                <Text style={styles(colors).label}> {strings.Mobile}</Text>
                <InputTextArea
                  placeholder="Mobile"
                  keyboardType="numeric"
                  maxLength={10}
                  placeholderTextColor={colors.heading}
                  setValue={text => setmobile(text)}
                  value={mobile}
                  name={'phone-iphone'}
                  size={20}
                />

                <AppButton
                  style={{
                    width: '100%',
                    height: '12%',
                  }}
                  onPress={() => {}}
                  text={strings.savechanges}
                />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default UserAccount;

const styles = props =>
  StyleSheet.create({
    bgImg: {
      height: '100%',
      width: '100%',
    },

    input: {
      backgroundColor: props.headerColor,
      borderRadius: 30,
      paddingHorizontal: 20,
      height: '6%',
      color: props.heading,
    },
    label: {
      fontSize: textSize.h4,
      color: props.headerColor,
      fontWeight: '600',
      margin: 5,
      top: 3,
    },

    innerView: {
      backgroundColor: props.heading,
      height: '100%',
      width: '100%',
      borderRadius: 15,
      padding: 20,
    },

    body: {
      alignItems: 'center',
      margin: 20,
    },
  });
