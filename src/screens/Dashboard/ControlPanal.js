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
import RefferLinkTableView from '../../components/RefferLinkTableView';

const ControlPanal = ({navigation}) => {
  const {colors} = useTheme();
  const [userID, setUserID] = useState('');
  const DataTable = [
    {
        "id": 175,
        "user_id": "16626122",
        "mobile": "8460977658",
        "email": "Komal",
        "position": "Left",
        "topup_amount": "0",
        "entry_time": "2021-10-13 13:22:39",
        "status": "Active",
        "selftopup": 31.67
    },
    {
        "id": 174,
        "user_id": "60717968",
        "mobile": "8460977532",
        "email": "Subhohi",
        "position": "Right",
        "topup_amount": "0",
        "entry_time": "2021-10-04 15:38:29",
        "status": "Active",
        "selftopup": 31.67
    },
    {
        "id": 173,
        "user_id": "28311485",
        "mobile": "1234567890",
        "email": "Joshep",
        "position": "Left",
        "topup_amount": "0",
        "entry_time": "2021-10-01 23:52:20",
        "status": "Active",
        "selftopup": 31.67
    },
    {
        "id": 167,
        "user_id": "49046998",
        "mobile": "8460977532",
        "email": "Kunal",
        "position": "Left",
        "topup_amount": "0",
        "entry_time": "2021-09-24 21:03:45",
        "status": "Active",
        "selftopup": 31.67
    },
    {
        "id": 114,
        "user_id": "51343008",
        "mobile": "+91 84840 58691",
        "email": "Jinal",
        "position": "Right",
        "topup_amount": "0",
        "entry_time": "2021-09-07 16:18:47",
        "status": "Active",
        "selftopup": 31.67
    },
    {
        "id": 167,
        "user_id": "49046998",
        "mobile": "8460977532",
        "email": "Shakira",
        "position": "Left",
        "topup_amount": "0",
        "entry_time": "2021-09-24 21:03:45",
        "status": "Active",
        "selftopup": 31.67
    },
]
   useEffect(() => {
     LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
  return (
   <SafeAreaView style={styles(colors).container}>
        <ImageBackground
            source={require('../../assets/panelBG.png')}
            style={styles(colors).imageBackgroundStyle}>
          <ScrollView style={styles(colors).inputViewWrapper}>
          <Cards data={ DataTable} />
          <RefferLinkTableView data={DataTable} />
            <View style={{marginBottom:40}}>
            </View>
        </ScrollView>
        </ImageBackground>
   </SafeAreaView >
  );
};
const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.background,
    },
     inputViewWrapper: {
       // padding: 25,
       // flex: 1,
      // paddingTop:10
      },
    imageBackgroundStyle: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
});
export default ControlPanal;
