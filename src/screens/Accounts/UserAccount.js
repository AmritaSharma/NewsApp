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
  Button,
} from 'react-native';
import {AppColors} from '../../constants/appColors';
import textSize from '../../constants/textSize';
import Icon from 'react-native-vector-icons/FontAwesome';
import strings from '../../constants/localization';
import {NavigationContainer} from '@react-navigation/native';

const UserAccount = ({navigation}) => {
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
          style={styles.bgImg}>
          <View style={styles.toolbar}>
            <Image
              source={require('../../assets/menu_icon.png')}
              style={{margin: 10}}
            />
            <Icon name="user" size={30} color={AppColors().heading} />
            <View>
              <Text style={styles.title}>{strings.UserAcc}</Text>
              <Text style={styles.subTitle}> {strings.Account}</Text>
            </View>
          </View>

          <View style={styles.body}>
            <Image
              source={require('../../assets/user_account_img.png')}
              style={{}}
            />
            <Text style={styles.heading}>{strings.AccountInfo}</Text>

            <ScrollView style={styles.innerView}>
              <Text style={styles.label}>{strings.UserId}</Text>
              <TextInput
                placeholder="Cbhc565"
                placeholderTextColor={AppColors().heading}
                style={styles.input}
                onChangeText={userId => setUserId(userId)}
                value={userId}
              />

              <Text style={styles.label}> {strings.FullName}</Text>
              <TextInput
                placeholder="name"
                placeholderTextColor={AppColors().heading}
                style={styles.input}
                onChangeText={name => setName(name)}
                value={name}
              />

              <Text style={styles.label}> {strings.sponserID}</Text>
              <TextInput
                placeholder="sponser id"
                placeholderTextColor={AppColors().heading}
                style={styles.input}
                onChangeText={sponserId => setSponserID(sponserId)}
                value={sponserId}
              />

              <Text style={styles.label}> {strings.Country}</Text>
              <TextInput
                placeholder="India"
                placeholderTextColor={AppColors().heading}
                style={styles.input}
                onChangeText={country => setCountry(country)}
                value={country}
              />

              <Text style={styles.label}> {strings.BTCAddress}</Text>
              <TextInput
                placeholder=" Address"
                placeholderTextColor={AppColors().heading}
                style={styles.input}
                onChangeText={btcadd => setBtcAdd(btcadd)}
                value={btcadd}
              />

              <Text style={styles.label}> {strings.TRONAddress}</Text>
              <TextInput
                placeholder="Tron address"
                placeholderTextColor={AppColors().heading}
                style={styles.input}
                onChangeText={tronadd => setTronAdd(tronadd)}
                value={tronadd}
              />

              <Text style={[styles.label]}> {strings.email} </Text>
              <TextInput
                type="email"
                placeholder="Email"
                keyboardType={'email-address'}
                placeholderTextColor={AppColors().heading}
                style={[styles.input]}
                onChangeText={email => setEmail(email)}
                value={email}
              />

              <Button
                title="deposit"
                onPress={() => navigation.navigate('InitiateDeposite')}
              />
            </ScrollView>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default UserAccount;

const styles = StyleSheet.create({
  bgImg: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: textSize.h1,
    color: AppColors().heading,
  },
  subTitle: {
    fontSize: textSize.p,
    color: AppColors().heading,
    left: 5,
  },
  input: {
    backgroundColor: AppColors().inputBackgroud,
    borderRadius: 30,
    paddingHorizontal: 20,
    height: '7%',
    color: AppColors().heading,
  },
  label: {
    fontSize: textSize.h4,
    color: AppColors().subTitle,
    fontWeight: '600',
    margin: 5,
    top: 3,
  },
  toolbar: {
    backgroundColor: AppColors().subTitle,
    height: '8%',
    flexDirection: 'row',
    paddingTop: 10,
  },
  innerView: {
    backgroundColor: AppColors().heading,
    height: '80%',
    width: '100%',
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: textSize.h2,
    color: AppColors().inputBackgroud,
    fontWeight: '600',
    padding: 10,
  },
  body: {
    alignItems: 'center',
    margin: 20,
  },
});
