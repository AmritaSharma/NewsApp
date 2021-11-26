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

const InitiateDeposite = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [prevdeposite, setPrevDeposite] = useState('');
  const [mode, setMode] = useState('');

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
              style={{height: 200, width: 260, marginVertical: '25%'}}
            />

            <ScrollView style={styles(colors).innerView}>
              <Text style={styles(colors).label}>{strings.EnterAmt}</Text>
              <InputTextArea
                placeholder=" $ Enter Amount"
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
              <InputTextArea
                placeholder="$ 3314"
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                keyboardType="numeric"
                onChangeText={prevdeposite => setPrevDeposite(prevdeposite)}
                value={prevdeposite}
              />

              <Text style={styles(colors).label}> {strings.SelectMode}</Text>
              <InputTextArea
                placeholder="Bitcoin "
                placeholderTextColor={colors.heading}
                style={styles(colors).input}
                onChangeText={mode => setMode(mode)}
                value={mode}
                IconName={'caret-down-outline'}
                IconSize={20}
              />
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
    title: {
      fontSize: textSize.h1,
      color: props.heading,
    },
    subTitle: {
      fontSize: textSize.p,
      color: props.heading,
    },

    label: {
      fontSize: textSize.h4,
      color: props.headerColor,
      fontWeight: '600',
      margin: 5,
      paddingVertical: 2,
      fontWeight: 'bold',
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
      height: '45%',
      width: '100%',
      borderRadius: 15,
      padding: 15,
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
