import React, {useState, useCallback,useEffect} from 'react';
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
  FlatList,
  SafeAreaView ,
  LogBox 
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {InputTextArea} from '../../components/InputTextArea';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize';
import {useTheme} from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { getDimen } from '../../dimensions/dimen';
import Cards from '../../components/Cards';
import {useDispatch, useSelector} from 'react-redux';
import {NEWS_LIST} from '../../store/action';
import Icon from 'react-native-vector-icons/Ionicons';

const NewsList = ({navigation}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const newsTitle = useSelector(state => state.news.newsTitle);
 // console.log('newsTitle',newsTitle)
  useEffect(() => {
        dispatch({
          type: NEWS_LIST,
        });
  }, []);
  return (
   <SafeAreaView style={styles(colors).container}>
            <View style={styles(colors).header}>
                <View style={styles(colors).headerWidthText}>
                <Text
                    style={styles(colors).headerText}>
                    Top Headlines
                </Text>
                </View>
                <View style={styles(colors).headerWidthIcon}>
                <Icon name="search" size={24} color="white" style={styles(colors).iconBody}/>
                </View>
                <View style={styles(colors).headerWidthIconMenu}>
                <Icon name="md-menu" size={24} color="white" style={styles(colors).iconBody}/>
                </View>
            </View>
          <Cards data={newsTitle} />
   </SafeAreaView >
  );
};
const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.background,
      alignItems: 'center',
    },
    header:{
        flexDirection: 'row',
        width:'100%', 
        backgroundColor:'black',
        height: '8%'
    },
    headerText:{
        color: 'white',
        marginLeft: 8,
        fontSize: 18,
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center'
    },
    iconBody:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingRight:10
    },
    headerWidthText:{
            width:'80%',
            alignSelf:'center',
    },
    headerWidthIcon:{
        width:'10%',
        alignSelf:'center'
    },
    headerWidthIconMenu:{
        width:'10%',
        alignSelf:'center'
    }
});
export default NewsList;
