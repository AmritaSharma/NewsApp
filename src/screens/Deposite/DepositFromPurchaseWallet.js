import React, {useState} from 'react';
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
const DepositFromPurchaseWallet = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [userId, setUserID] = useState('');
  const [mode, setMode] = useState('');

  const modeData = ['$50', '$80', '$100'];

  const {colors} = useTheme();
  const theme = useTheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/splashscreen_background.png')}
          resizeMode="cover"
          style={styles.bgImg}>
          <View style={styles(colors).body}>
            <Image
              source={require('../../assets/initdeposite_img.png')}
              style={{height: 200, width: 260, marginVertical: '18%'}}
            />

            <ScrollView style={styles(colors).innerView}>
              <Text style={styles(colors).label}>{strings.UserId}</Text>
              <InputTextArea
                placeholder="User Id"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                setValue={userId => setUserID(userId)}
                value={userId}
                keyboardType="numeric"
                maxLength={6}
              />

              <Text style={styles(colors).label}>
                {' '}
                {strings.EnterAmt}
              </Text>
              <InputTextArea
                 placeholder=" $ Enter Amount"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                keyboardType="numeric"
                setValue={amount => setAmount(amount)}
                value={amount}
                maxLength={6}
              />

              <Text style={styles(colors).label}> {strings.Package}</Text>

              <View style={{flexDirection: 'row'}}>
                <SelectDropdown
                  data={modeData}
                  defaultButtonText="$50"
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
            </ScrollView>

            <AppButton
              style={{
                marginVertical: 5,
                width: '90%',
                bottom: '11%',
              }}
              onPress={() => {}}
              text={strings.Submit}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DepositFromPurchaseWallet;

const styles = props =>
  StyleSheet.create({
    bgImg: {
      height: '100%',
      width: '100%',
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
      borderWidth: 1.5,
      borderRadius: 25,
      backgroundColor: props.heading,
    },
    DDtextstyle: {
      color: props.headerColor,
      textAlign: 'left',
    },
  });
