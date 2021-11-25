import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import {AppColors} from '../../constants/appColors';
import textSize from '../../constants/textSize';
import Icon from 'react-native-vector-icons/FontAwesome';
import strings from '../../constants/localization';
import {useTheme} from '@react-navigation/native';

const UserAccount = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();

  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [sponserId, setSponserID] = useState('');
  const [country, setCountry] = useState('');
  const [btcadd, setBtcAdd] = useState('');
  const [tronadd, setTronAdd] = useState('');
  const [email, setEmail] = useState('');

  const CreateAcc = () => {
    console.log('userId' + userId, ' name' + name);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require('../../assets/splashscreen_background.png')}
          resizeMode="cover"
          style={styles(colors).bgImg}>
          <View style={styles(colors).toolbar}>
            <Image
              source={require('../../assets/menu_icon.png')}
              style={{margin: 10}}
            />
            <Icon name="user" size={30} color={colors.heading} />
            <View>
              <Text style={styles(colors).title}>{strings.UserAcc}</Text>
              <Text style={styles(colors).subTitle}> {strings.Account}</Text>
            </View>
          </View>

          <View style={styles(colors).body}>
            <Image
              source={require('../../assets/user_account_img.png')}
              style={{}}
            />
            <Text style={styles(colors).heading}>{strings.AccountInfo}</Text>

            <ScrollView style={styles(colors).innerView}>
              <Text style={styles(colors).label}>{strings.UserId}</Text>
              <TextInput
                placeholder="Cbhc565"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                onChangeText={userId => setUserId(userId)}
                value={userId}
              />

              <Text style={styles(colors).label}> {strings.FullName}</Text>
              <TextInput
                placeholder="name"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                onChangeText={name => setName(name)}
                value={name}
              />

              <Text style={styles(colors).label}> {strings.sponserID}</Text>
              <TextInput
                placeholder="sponser id"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                onChangeText={sponserId => setSponserID(sponserId)}
                value={sponserId}
              />

              <Text style={styles(colors).label}> {strings.Country}</Text>
              <TextInput
                placeholder="India"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                onChangeText={country => setCountry(country)}
                value={country}
              />

              <Text style={styles(colors).label}> {strings.BTCAddress}</Text>
              <TextInput
                placeholder=" Address"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                onChangeText={btcadd => setBtcAdd(btcadd)}
                value={btcadd}
              />

              <Text style={styles(colors).label}> {strings.TRONAddress}</Text>
              <TextInput
                placeholder="Tron address"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                onChangeText={tronadd => setTronAdd(tronadd)}
                value={tronadd}
              />

              <Text style={[styles(colors).label]}> {strings.email} </Text>
              <TextInput
                type="email"
                placeholder="Email"
                keyboardType={'email-address'}
                placeholderTextColor={colors.heading}
                style={[styles(colors).input]}
                onChangeText={email => setEmail(email)}
                value={email}
              />
            </ScrollView>
          </View>
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
    title: {
      fontSize: textSize.h1,
      color: props.heading,
    },
    subTitle: {
      fontSize: textSize.p,
      color: props.heading,
      left: 5,
    },
    input: {
      backgroundColor: props.headerColor,
      borderRadius: 30,
      paddingHorizontal: 20,
      height: '7%',
      color: props.heading,
    },
    label: {
      fontSize: textSize.h4,
      color: props.headerColor,
      fontWeight: '600',
      margin: 5,
      top: 3,
    },
    toolbar: {
      backgroundColor: props.headerColor,
      height: '9%',
      flexDirection: 'row',
      paddingTop: 10,
    },
    innerView: {
      backgroundColor: props.heading,
      height: '70%',
      width: '100%',
      borderRadius: 15,
      paddingHorizontal: 20,
    },
    heading: {
      fontSize: textSize.h2,
      color: props.headerColor,
      fontWeight: '600',
      padding: 10,
    },
    body: {
      alignItems: 'center',
      margin: 20,
    },
  });
