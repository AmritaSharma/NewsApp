import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import {AppColors} from '../../constants/appColors';
import textSize from '../../constants/textSize';
import strings from '../../constants/localization';
import AppButton from '../../constants/AppButton';
import {useTheme} from '@react-navigation/native';

const InitiateDeposite = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [prevdeposite, setPrevDeposite] = useState('');
  const [mode, setMode] = useState('');

  const {colors} = useTheme();
  const theme = useTheme();

  const CreateAcc = () => {
    console.log('amount' + amount, ' name' + name);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/splashscreen_background.png')}
          resizeMode="cover"
          style={styles.bgImg}>
          <View style={styles(colors).toolbar}>
            <View>
              <Image
                source={require('../../assets/initdeposit_icon.png')}
                style={{margin: 10, top: 2}}
              />
              <View style={{top: -40, left: '35%'}}>
                <Text style={styles(colors).title}>
                  {strings.InitiateDeposit}
                </Text>
                <Text style={styles(colors).subTitle}> {strings.Deposite}</Text>
              </View>
            </View>
            <Image
              source={require('../../assets/menu_icon.png')}
              style={{margin: 10, top: 2}}
            />
          </View>

          <View style={styles(colors).body}>
            <Image
              source={require('../../assets/initdeposite_img.png')}
              style={{height: 200, width: 260, marginVertical: '8%'}}
            />

            <ScrollView style={styles(colors).innerView}>
              <Text style={styles(colors).label}>{strings.EnterAmt}</Text>
              <TextInput
                placeholder="Enter Amount"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                onChangeText={amount => setAmount(amount)}
                value={amount}
                keyboardType="numeric"
              />

              <Text style={styles(colors).label}>
                {' '}
                {strings.PreviewDeposite}
              </Text>
              <TextInput
                placeholder="$"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                keyboardType="numeric"
                onChangeText={prevdeposite => setPrevDeposite(prevdeposite)}
                value={prevdeposite}
              />

              <Text style={styles(colors).label}> {strings.SelectMode}</Text>
              <TextInput
                placeholder="Bitcoin (BTC) "
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                onChangeText={mode => setMode(mode)}
                value={mode}
              />
            </ScrollView>

            <AppButton
              style={{marginVertical: 20, width: '75%', bottom: '8%'}}
              onPress={() => {}}
              text={strings.InitiateDeposit}
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
    title: {
      fontSize: textSize.h1,
      color: props.heading,
    },
    subTitle: {
      fontSize: textSize.p,
      color: props.heading,
    },
    input: {
      backgroundColor: props.inputBackgroud,
      borderRadius: 30,
      paddingHorizontal: 20,
      height: 35,
      color: props.heading,
      bottom: 10,
    },
    label: {
      fontSize: textSize.h4,
      color: props.headerColor,
      fontWeight: '600',
      margin: 5,
      paddingVertical: 10,
    },
    toolbar: {
      backgroundColor: props.headerColor,
      height: '9%',
      flexDirection: 'row',
      paddingTop: 10,
      justifyContent: 'space-between',
    },
    innerView: {
      backgroundColor: props.heading,
      height: '37%',
      width: '100%',
      borderRadius: 15,
      padding: 15,
      marginBottom: 50,
    },
    heading: {
      fontSize: textSize.h2,
      color: props.inputBackgroud,
      fontWeight: '600',
      padding: 10,
    },
    body: {
      alignItems: 'center',
      margin: 20,
    },
  });
