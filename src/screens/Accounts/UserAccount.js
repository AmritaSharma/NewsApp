import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import textSize from '../../constants/textSize';
import strings from '../../constants/localization';
import {useTheme} from '@react-navigation/native';
import {InputTextArea} from '../../components/InputTextArea';
import AppButton from '../../constants/AppButton';
import showMessage from '../../components/showMessage';
import axios from 'axios';

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
  const [userdata, setUserData] = useState('');
  const [showresult, setShowResult] = useState(false);

  const token =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkNWY0ZDQ0Yzc0MmM5NzJjZTllYmM1NTM2M2YwMzRhNzJlYzhiYzNjYWI5MTUwOTgyNjNiNzM0NzRjNThkNjRkNTdjMjg5Mjg2ZDYxYTdiIn0.eyJhdWQiOiI2IiwianRpIjoiOWQ1ZjRkNDRjNzQyYzk3MmNlOWViYzU1MzYzZjAzNGE3MmVjOGJjM2NhYjkxNTA5ODI2M2I3MzQ3NGM1OGQ2NGQ1N2MyODkyODZkNjFhN2IiLCJpYXQiOjE2MzgxNzI1ODIsIm5iZiI6MTYzODE3MjU4MiwiZXhwIjoxNjY5NzA4NTgyLCJzdWIiOiIyIiwic2NvcGVzIjpbIioiXX0.gJgMgEiXuGDWAiq62HN2Fy7BTskWUgEHqbluVltqKmJ9hkGBnJ47lXiJkE1TprVNIfiDWyNOGsG0NtTue0eJJMFzkLmjM7TQoJ1t0Q-raYqgASqh9mz9_c4cJ_wj4eMZY0hfW1x4kMz__z6VDsrxuA3sdX4aEj9PBVjuZQTLemyZTmnaRQSUBu2dMqvnsjywiKef-yD5hp_YqE7agSus2lDMFxJ5wNQLwHxxo1CAsY5-zgWcidE2rrS6rsuhuUClmP4x4nvcuO6Eo5fnm6s4-YU5pjlyreArNGN601VdvvBaFE-gVTNipFgFFgO3-ZgmVpKYrh96zj7gArTFXPrvVhhGvJLyw2CcFGEQZ5j3QY5gVocDMzbOjPttUSWhSeazHLuajhRCccgLWA9V1co6QwMHq7gqm8AexL6WRfBAqZBr_GzH9zPvsKLJX-m6izNHpTxXHggIpVBbZlvnnvkj1X5GxzUGegKoh2DahhYg4zQsqUpcXNGot6YkHC_2y37nGao8fJql3jEpdKyud9AJqpsXOwAxZUwcTeAhEgWpnmZjyLO4AQ2lzk3yop0LQQokJwCE6ywJrKIz4lFK5IEIaRbT_lbwNHVED0IPRvUlwaP4odHwiHeMYKphyPwwUPqZPRwo492Ki2zbYXI5_MvWAVREsRFJnjK3ZQCqDqnch-0';
  const Bgimage = require('../../assets/panelBG.png');

  const CreateAcc = () => {
    // if (!userId) {
    //   Alert.alert(
    //     '',
    //     'Please Enter userId ..',
    //     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    //     {cancelable: false},
    //   );
    //   return;
    // }
    // if (userId.trim() === '') {
    //   Alert.alert(
    //     '',
    //     'Please Enter userId ..',
    //     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    //     {cancelable: false},
    //   );
    //   return;
    // }
    console.log('email', email);
    console.log('data', userId);
    axios
      .get(
        'http://172.105.175.248/replica/crypto-brite-app/api/get-profile-info',
        {
          auth: token,
          // email: email,
          // code: userId,
        },
      )
      .then(function (response) {
        console.log('VerifyuserId ResponseData: ', response);
        // showMessage(response.data.message);
      })
      .catch(function (error) {
        console.log('Error', error);
        // Alert.alert(error.message);
      });

    // console.log('userId' + userId, ' name' + name);
  };

  // const CreateAcc = async () => {
  //   try {
  //     const data = await axios.get(
  //       'http://172.105.175.248/replica/crypto-brite-app/api/get-profile-info',
  //       {
  //         auth: token,
  //       },
  //     );
  //     setUserData(data);

  //     setShowResult(true);
  //   } catch (error) {
  //     //console.log(error);
  //     console.log(userdata);
  //   }
  // };

  // useEffect(() => {
  //   console.log(userdata, '====userdata');
  // }, [userdata]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={Bgimage}
          resizeMode="cover"
          style={styles(colors).bgImg}>
          <ScrollView style={styles(colors).accountView}>
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
                  onEndEditing={() => {
                    CreateAcc();
                  }}
                />

                <AppButton
                  style={styles(colors).btn}
                  onPress={() => CreateAcc()}
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
      flex: 1,
      marginVertical: 20,
    },
    accountView: {
      flex: 1,
      marginVertical: 20,
    },
    btn: {
      width: '100%',
      height: '12%',
    },
  });
