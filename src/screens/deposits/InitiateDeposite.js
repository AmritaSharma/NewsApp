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
const InitiateDeposite = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [prevdeposite, setPrevDeposite] = useState('');
  const [mode, setMode] = useState('');

  const modeData = ['Bitcoin', 'Tron', 'Binance'];

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
            </ScrollView>

            <AppButton
              style={{
                marginVertical: 5,
                width: '90%',
                bottom: '13%',
                paddingBottom: 50,
              }}
              onPress={() => {}}
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
