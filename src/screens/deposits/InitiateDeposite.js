import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {AppColors} from '../../constants/appColors';
import textSize from '../../constants/textSize';
import strings from '../../constants/localization';
import AppButton from '../../constants/AppButton';
import {useTheme} from '@react-navigation/native';
import {InputTextArea} from '../../components/InputTextArea';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

const InitiateDeposite = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [prevdeposite, setPrevDeposite] = useState('');
  const [mode, setMode] = useState('');
  const [data, setData] = useState('');
  const modeData = ['Bitcoin', 'Tron', 'Binance'];
  const [userdata, setUserData] = useState('');
  const [showresult, setShowResult] = useState(false);
  const {colors} = useTheme();
  const theme = useTheme();
  const bgImage = require('../../assets/panelBG.png');
  const screenImage = require('../../assets/initdeposite_img.png');
  const token =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkNWY0ZDQ0Yzc0MmM5NzJjZTllYmM1NTM2M2YwMzRhNzJlYzhiYzNjYWI5MTUwOTgyNjNiNzM0NzRjNThkNjRkNTdjMjg5Mjg2ZDYxYTdiIn0.eyJhdWQiOiI2IiwianRpIjoiOWQ1ZjRkNDRjNzQyYzk3MmNlOWViYzU1MzYzZjAzNGE3MmVjOGJjM2NhYjkxNTA5ODI2M2I3MzQ3NGM1OGQ2NGQ1N2MyODkyODZkNjFhN2IiLCJpYXQiOjE2MzgxNzI1ODIsIm5iZiI6MTYzODE3MjU4MiwiZXhwIjoxNjY5NzA4NTgyLCJzdWIiOiIyIiwic2NvcGVzIjpbIioiXX0.gJgMgEiXuGDWAiq62HN2Fy7BTskWUgEHqbluVltqKmJ9hkGBnJ47lXiJkE1TprVNIfiDWyNOGsG0NtTue0eJJMFzkLmjM7TQoJ1t0Q-raYqgASqh9mz9_c4cJ_wj4eMZY0hfW1x4kMz__z6VDsrxuA3sdX4aEj9PBVjuZQTLemyZTmnaRQSUBu2dMqvnsjywiKef-yD5hp_YqE7agSus2lDMFxJ5wNQLwHxxo1CAsY5-zgWcidE2rrS6rsuhuUClmP4x4nvcuO6Eo5fnm6s4-YU5pjlyreArNGN601VdvvBaFE-gVTNipFgFFgO3-ZgmVpKYrh96zj7gArTFXPrvVhhGvJLyw2CcFGEQZ5j3QY5gVocDMzbOjPttUSWhSeazHLuajhRCccgLWA9V1co6QwMHq7gqm8AexL6WRfBAqZBr_GzH9zPvsKLJX-m6izNHpTxXHggIpVBbZlvnnvkj1X5GxzUGegKoh2DahhYg4zQsqUpcXNGot6YkHC_2y37nGao8fJql3jEpdKyud9AJqpsXOwAxZUwcTeAhEgWpnmZjyLO4AQ2lzk3yop0LQQokJwCE6ywJrKIz4lFK5IEIaRbT_lbwNHVED0IPRvUlwaP4odHwiHeMYKphyPwwUPqZPRwo492Ki2zbYXI5_MvWAVREsRFJnjK3ZQCqDqnch-0';

  const deposite = async () => {
    try {
      const data = await axios.get(
        'http://172.105.175.248/replica/crypto-brite-app/api/getall-currency',
        {
          auth: token,
        },
      );
      if (code == '200') {
        console.log(response);
      }
      setUserData(data);

      setShowResult(true);
    } catch (error) {
      //console.log(error);
      console.log(userdata);
    }
  };

  useEffect(() => {
    console.log(userdata, '====userdata');
    deposite();
  }, [userdata]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.bgImg}>
          <View style={styles(colors).body}>
            <Image source={screenImage} style={styles(colors).img} />

            <View style={styles(colors).innerView}>
              <Text style={styles(colors).label}>{strings.EnterAmt}</Text>
              <InputTextArea
                placeholder=" $ Enter Amount"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                setValue={amount => setAmount(amount)}
                value={amount}
                keyboardType="numeric"
                maxLength={6}
              />

              <Text style={styles(colors).label}>
                {' '}
                {strings.PreviewDeposite}
              </Text>
              <InputTextArea
                placeholder="$ 3314"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                keyboardType="numeric"
                setValue={prevdeposite => setPrevDeposite(prevdeposite)}
                value={prevdeposite}
                maxLength={6}
                //onEndEditing={deposite()}
              />

              <Text style={styles(colors).label}> {strings.SelectMode}</Text>

              <View style={{flexDirection: 'row'}}>
                <SelectDropdown
                  data={modeData}
                  defaultButtonText="Bitcoin"
                  buttonTextStyle={styles(colors).DDtextstyle}
                  buttonStyle={styles(colors).showEntryDropView}
                  onSelect={(selectedItem, index) => {}}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
                <Icon name="caretdown" size={20} style={{right: 40, top: 10}} />
              </View>
            </View>

            <AppButton
              style={styles(colors).btn}
              onPress={() => deposite()}
              text={strings.InitiatePayment}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InitiateDeposite;

const styles = props =>
  StyleSheet.create({
    bgImg: {
      height: '100%',
      width: '100%',
    },

    img: {
      height: 200,
      width: 260,
      marginVertical: '10%',
    },

    label: {
      fontSize: textSize.h4,
      color: props.headerColor,
      fontWeight: '600',
      margin: 5,
      paddingVertical: 2,
      fontWeight: 'bold',
    },

    innerView: {
      backgroundColor: props.heading,
      height: '47%',
      width: '100%',
      borderRadius: 15,
      padding: 15,
    },

    body: {
      alignItems: 'center',
      margin: 20,
    },
    showEntryDropView: {
      flexDirection: 'row',
      width: '99%',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: props.borderColor,
      borderWidth: 1,
      borderRadius: 25,
      backgroundColor: props.heading,
    },
    DDtextstyle: {
      color: props.headerColor,
      textAlign: 'left',
    },
    btn: {
      marginVertical: 5,
      width: '90%',
      bottom: '12%',
      paddingBottom: 50,
    },
  });
