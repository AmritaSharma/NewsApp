import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {AppColors} from '../../constants/appColors';
import textSize from '../../constants/textSize';
import strings from '../../constants/localization';
import AppButton from '../../constants/AppButton';

const InitiateDeposite = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [prevdeposite, setPrevDeposite] = useState('');
  const [mode, setMode] = useState('');

  const CreateAcc = () => {
    console.log('amount' + amount, ' name' + name);
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/splashscreen_background.png')}
        resizeMode="cover"
        style={styles.bgImg}>
        <View style={styles.toolbar}>
          <View>
            <Image
              source={require('../../assets/initdeposit_icon.png')}
              style={{margin: 10, top: 2}}
            />
            <View style={{top: -40, left: '35%'}}>
              <Text style={styles.title}>{strings.InitiateDeposit}</Text>
              <Text style={styles.subTitle}> {strings.Deposite}</Text>
            </View>
          </View>
          <Image
            source={require('../../assets/menu_icon.png')}
            style={{margin: 10, top: 2}}
          />
        </View>

        <ScrollView>
          <View style={styles.body}>
            <Image
              source={require('../../assets/initdeposite_img.png')}
              style={{height: 200, width: 260, marginVertical: '10%'}}
            />

            <View style={styles.innerView}>
              <Text style={styles.label}>{strings.EnterAmt}</Text>
              <TextInput
                placeholder="Enter Amount"
                placeholderTextColor={AppColors().heading}
                style={styles.input}
                onChangeText={amount => setAmount(amount)}
                value={amount}
                keyboardType="numeric"
              />

              <Text style={styles.label}> {strings.PreviewDeposite}</Text>
              <TextInput
                placeholder="$"
                placeholderTextColor={AppColors().heading}
                style={styles.input}
                keyboardType="numeric"
                onChangeText={prevdeposite => setPrevDeposite(prevdeposite)}
                value={prevdeposite}
              />

              <Text style={styles.label}> {strings.SelectMode}</Text>
              <TextInput
                placeholder="Bitcoin (BTC) "
                placeholderTextColor={AppColors().heading}
                style={styles.input}
                onChangeText={mode => setMode(mode)}
                value={mode}
              />

              <AppButton
                style={{marginVertical: 20}}
                onPress={() => {}}
                text={strings.InitiateDeposit}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default InitiateDeposite;

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
  },
  title: {
    fontSize: textSize.h1,
    color: AppColors().heading,
  },
  subTitle: {
    fontSize: textSize.p,
    color: AppColors().heading,
  },
  input: {
    backgroundColor: AppColors().inputBackgroud,
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 35,
    color: AppColors().heading,
  },
  label: {
    fontSize: textSize.h4,
    color: AppColors().background,
    fontWeight: '600',
    margin: 5,
    top: 10,
    paddingVertical: 6,
  },
  toolbar: {
    backgroundColor: AppColors().background,
    height: '9%',
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  innerView: {
    backgroundColor: AppColors().heading,
    height: '55%',
    width: '100%',
    borderRadius: 15,
    padding: 15,
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
