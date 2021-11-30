import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {InputTextArea} from './components/InputTextArea';
import strings from '../constants/localization';
import textSize from '../constants/textSize';
import {useTheme} from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { getDimen } from '../dimensions/dimen';
import { useNavigation } from '@react-navigation/native';

const Cards = ({ data,header }) => {
  console.log('newsCard',data.articles)
  const navigation = useNavigation();
  const {colors} = useTheme();  
 return (
   <View>
      <View style={styles(colors).blankViewUp}></View>
      <FlatList
            data={data && data.articles}
            key={"2"}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity  
              onPress={() =>
                navigation.navigate('NewsDetails', {itemData: item})
              }>
              <ImageBackground
              source={{uri: item.urlToImage}} 
              style={styles(colors).tableBodyView}
            >
            <Text
              style={styles(colors).textCardBody}
            >
              {item.title}
            </Text>
          </ImageBackground> 
          </TouchableOpacity>
       )}
    />
    <View style={styles(colors).blankView}></View>
    </View>
  );
};
const styles = props =>
  StyleSheet.create({
    tableBodyView: {
      position: 'relative', // because it's parent
      top: 2,
      left: 2,
      width: 190,
      height: 200,
     // borderWidth: 2,
     // borderColor: "#c35547",
      resizeMode: "contain",
      margin: 6,
    },
    textCardBody: {
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      bottom: 0, // position where you want
      left: 0
     },
     blankView:{
       paddingBottom:'20%'
     },
     blankViewUp:{
      paddingTop:'5%'
    }
});
export default Cards;
