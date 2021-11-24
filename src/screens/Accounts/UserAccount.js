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

const UserAccount = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [sponserId, setSponserID] = useState('');
  const [country, setCountry] = useState('');
  const [btcadd, setBtcAdd] = useState('');
  const [tronadd, setTronAdd] = useState('');
  const [email, setEmail] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <ImageBackground
            source={require('../assets/splashscreen_background.png')}
            resizeMode="cover"
            style={{height: '100%', width: '100%'}}>
            <View
              style={{
                backgroundColor: AppColors().background,
                height: '8%',

                justifyContent: 'space-around',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/menu_icon.png')}
                  style={{margin: 10}}
                />
                <Image
                  source={require('../assets/user_id_icon.png')}
                  style={{marginHorizontal: 10}}
                />
                <View>
                  <Text
                    style={{
                      fontSize: textSize.h1,
                      color: AppColors().heading,
                    }}>
                    {' '}
                    User Account
                  </Text>
                  <Text
                    style={{
                      fontSize: textSize.p,
                      color: AppColors().heading,
                      left: 5,
                    }}>
                    {' '}
                    Account
                  </Text>
                </View>
              </View>
            </View>
            <View style={{alignItems: 'center', margin: 20}}>
              <Image
                source={require('../assets/user_account_img.png')}
                style={{}}
              />
              <Text
                style={{
                  fontSize: textSize.h2,
                  color: AppColors().background,
                  fontWeight: '600',
                  padding: 10,
                }}>
                {' '}
                Account Information{' '}
              </Text>
              <View
                style={{
                  backgroundColor: AppColors().heading,
                  height: '80%',
                  width: '100%',
                  borderRadius: 15,
                  paddingHorizontal: 20,
                }}>
                <Text style={styles.label}> User ID</Text>
                <TextInput
                  placeholder="Cbhc565"
                  placeholderTextColor={AppColors().heading}
                  style={styles.input}
                  onChangeText={userId => setUserId(userId)}
                  value={userId}
                />

                <Text style={styles.label}> Full Name</Text>
                <TextInput
                  placeholder="name"
                  placeholderTextColor={AppColors().heading}
                  style={styles.input}
                  onChangeText={name => setName(name)}
                  value={name}
                />

                <Text style={styles.label}>Sponser Id</Text>
                <TextInput
                  placeholder="sponser id"
                  placeholderTextColor={AppColors().heading}
                  style={styles.input}
                  onChangeText={sponserId => setSponserID(sponserId)}
                  value={sponserId}
                />

                <Text style={styles.label}> Country</Text>
                <TextInput
                  placeholder="India"
                  placeholderTextColor={AppColors().heading}
                  style={styles.input}
                  onChangeText={country => setCountry(country)}
                  value={country}
                />

                <Text style={styles.label}> BTC Address</Text>
                <TextInput
                  placeholder=" Address"
                  placeholderTextColor={AppColors().heading}
                  style={styles.input}
                  onChangeText={btcadd => setBtcAdd(btcadd)}
                  value={btcadd}
                />

                <Text style={styles.label}> TRON Address</Text>
                <TextInput
                  placeholder="Tron address"
                  placeholderTextColor={AppColors().heading}
                  style={styles.input}
                  onChangeText={tronadd => setTronAdd(tronadd)}
                  value={tronadd}
                />

                <Text style={[styles.label]}> Email ID</Text>
                <TextInput
                  type="email"
                  placeholder="Email"
                  placeholderTextColor={AppColors().heading}
                  style={[styles.input]}
                  onChangeText={email => setEmail(email)}
                  value={email}
                />

                <View></View>
              </View>
            </View>

            <Text></Text>
          </ImageBackground>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default UserAccount;

const styles = StyleSheet.create({
  input: {
    backgroundColor: AppColors().background,
    borderRadius: 30,
    paddingHorizontal: 20,
    height: '7%',
    color: AppColors().heading,
  },
  label: {
    fontSize: textSize.h4,
    color: AppColors().background,
    fontWeight: '600',
    margin: 5,
    top: 3,
  },
});
