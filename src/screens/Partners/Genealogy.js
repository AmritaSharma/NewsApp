import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {getDimen} from '../../dimensions/dimen';
import TreeView from '../../components/TreeView';
import {useTheme} from '@react-navigation/native';
import {InputTextArea} from '../../components/InputTextArea';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize';
import {GeneologyList} from '../../components/geneologyList';

const Genealogy = () => {
  const {colors} = useTheme();
  const [userID, setUserID] = useState('');
  const DATA = [
    {
      name: 'abc',
      amount: 10,
    },
    {
      name: 'abc',
      amount: 10,
    },
    {
      name: 'abc',
      amount: 10,
    },
    {
      name: 'abc',
      amount: 10,
    },
    {
      name: 'abc',
      amount: 10,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/panelBG.png')}
        style={styles(colors).imageBackgroundStyle}>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'white',
              height: '30%',
              width: '90%',
              marginTop: getDimen(0.02),
              borderRadius: getDimen(0.02),
              paddingHorizontal: 16,
              paddingVertical: '5%',
              marginHorizontal: '5%',
            }}>
            <InputTextArea
              placeholder={strings.userIDPlaceholder}
              setValue={text => setUserID(text)}
              value={userID}
              keyboardType={'email-address'}
              secureTextEntry={false}
              onSubmitEditing={text => console.log('text', text)}
              maxLength={100}
              IconName={'person'}
              IconSize={20}
            />
            <View
              style={{
                flexDirection: 'row',
                height: '20%',
                justifyContent: 'space-between',
                margin: getDimen(0.05),
                alignItems: 'center',
              }}>
              <Image
                style={styles(colors).iconImageStyle}
                source={require('../../assets/green.png')}
              />
              <Image
                style={styles(colors).iconImageStyle}
                source={require('../../assets/black.png')}
              />
              <Image
                style={styles(colors).iconImageStyle}
                source={require('../../assets/gray.png')}
              />
              <Image
                style={styles(colors).iconImageStyle}
                source={require('../../assets/red.png')}
              />
            </View>
            <TouchableOpacity style={styles(colors).loginButtonView}>
              <Text style={styles(colors).loginButtonText}>
                {strings.createStructure}
              </Text>
            </TouchableOpacity>
          </View>
          <TreeView />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'space-between',
            }}>
            <GeneologyList
              dataList={DATA}
              heading="Left Team"
              totalamount="Total 10"
            />
            <GeneologyList
              dataList={DATA}
              heading="Right Team"
              totalamount="Total 10"
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Genealogy;

const styles = props =>
  StyleSheet.create({
    imageBackgroundStyle: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    iconImageStyle: {
      height: 40,
      width: 45,
    },
    loginButtonView: {
      backgroundColor: props.buttonColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: '3%',
      borderRadius: 25,
    },
    loginButtonText: {
      fontSize: textSize.h3,
      color: props.headerColor,
      fontWeight: '600',
    },
  });
