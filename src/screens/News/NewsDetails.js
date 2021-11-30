import React, {useState, useCallback,useEffect,useContext} from 'react';
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
  LogBox ,
  Switch
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {InputTextArea} from '../../components/InputTextArea';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize';
import {useTheme} from '@react-navigation/native';
import { getDimen } from '../../dimensions/dimen';
import Cards from '../../components/Cards';
import {useDispatch, useSelector} from 'react-redux';
import {NEWS_LIST} from '../../store/action';
import {AuthContext} from '../../components/context';
import Icon from 'react-native-vector-icons/Ionicons';

const NewsDetails = ({route, navigation }) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const { itemData } = route.params;
  const {toggleTheme} = useContext(AuthContext);
  const paperTheme = useTheme();
  return (
   <SafeAreaView style={styles(colors).container}>
            <View style={styles(colors).header}>  
                <View style={styles(colors).headerWidthIcon}>
                <TouchableOpacity  onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="white" style={styles(colors).iconBody}/>
                </TouchableOpacity>
                </View>
                <View style={styles(colors).headerWidthText}>
                <Text
                    style={styles(colors).headerText}>
                    News Details
                </Text>
                </View>
            </View>
                <ImageBackground
                    style={styles(colors).coverImage}
                    source={{uri: itemData && itemData.urlToImage}} >
                </ImageBackground>
                <Text style={styles(colors).titleMain}>{itemData && itemData.description}</Text>
                <Text style={styles(colors).titleSub}>Author : {itemData && itemData.author}</Text>
                <Text style={styles(colors).titlDescription}>{itemData && itemData.content}</Text>
                
            <View>
            <TouchableOpacity onPress={() => toggleTheme()}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles(colors).toogleText}> Go To Dark Theme</Text>
                <View pointerEvents="none" >
                    <Switch value={paperTheme.dark} style={styles(colors).toogleBarStyle} />
                </View>
                </View>
            </TouchableOpacity>
            </View>
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
        alignSelf:'center',
        paddingLeft:10
    },
    coverImage: {
        width: '100%',
        height: 200,
      },
    titleMain: {
        color: 'black',
        marginLeft: 8,
        fontSize: 20,
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center',
        paddingTop:10,
        fontWeight:'bold'
    },
    titleSub: {
        color: 'black',
        marginLeft: 8,
        fontSize: 18,
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center',
        paddingTop:10
    },
    titlDescription: {
        color: 'black',
        marginLeft: 8,
        fontSize: 16,
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center',
        paddingTop:10
    },
    toogleText: {
        color: 'black',
        fontSize: 22,
        paddingTop:10,
        fontWeight:'bold'
    },
    toogleBarStyle:{
        marginTop:10,
        marginLeft:5
    }
});
export default NewsDetails;
