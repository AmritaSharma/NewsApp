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
import {InputTextArea} from '../../components/InputTextArea';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize';
import {useTheme} from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { getDimen } from '../../dimensions/dimen';
import Cards from '../../components/Cards';

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
const HeaderData = [
    {
        id: '1',
        title: 'TITLE',
    },
    {
        id: '2',
        title: 'LEFT',
    },
    {
        id: '3',
        title: 'RIGHT',
    }
]
    const ListHeader = () => {
        //View to set in Header
        return (
            <FlatList
                numColumns={HeaderData.length}
                data={HeaderData}
                renderItem={({ item, index }) => (
                    <View style={styles(colors).tableHeaderView}>
                        <Text style={styles(colors).tableHaderTextstyle}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        );
    };
  return (
   <View style={styles(colors).container}>
        <ImageBackground
            source={require('../../assets/panelBG.png')}
            style={styles(colors).imageBackgroundStyle}>
          <ScrollView style={styles(colors).inputViewWrapper}>
          <Cards
                data={ DataTable}
                header={HeaderData}
          />
                <FlatList
                    style={{ backgroundColor: '#252E3B',marginTop:15,}}
                    data={DataTable}
                    renderItem={({ item,index }) => (
                        <View style={styles(colors).secondTableBodyView}>
                                <Text style={styles(colors).secondBodyTextStyle} > 
                                {item.email}
                                </Text>
                                <Text style={styles(colors).secondBodyTextStyle} > 
                                {item.topup_amount}
                                </Text>
                                <Text style={styles(colors).secondBodyTextStyle} > 
                                {item.topup_amount}
                                </Text>
                        </View>
                    )}
                    ListHeaderComponent={ListHeader}
                    />

            <Card style={styles(colors).refferCardBody}>
             <View style={{flexDirection:'row'}}>
            <View Style={{background:'#FFFFFF'}}>
                <TouchableOpacity>
                <Text style={{ 
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                    paddingTop:5
                  }}>
                      https://www.hawkchain.com/..
                </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft: 10,backgroundColor:'#ECB931',borderLeftColor:'black',borderLeftWidth:1}}>
              <View
                style={{
                  marginTop: 5,
                  //width: '85%',
                  backgroundColor:'#ECB931'
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  LEFT REFFERAL LINK
                </Text>
              </View>
            </View>
            </View>
          </Card>


          <Card style={styles(colors).refferCardBody}>
             <View style={{flexDirection:'row'}}>
            <View Style={{background:'#FFFFFF'}}>
                <TouchableOpacity>
                <Text style={{ 
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                    paddingTop:5
                  }}>
                      https://www.hawkchain.com/..
                </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft: 10,backgroundColor:'#ECB931',borderLeftColor:'black',borderLeftWidth:1}}>
              <View
                style={{
                  marginTop: 5,
                  //width: '85%',
                  backgroundColor:'#ECB931'
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  RIGHT REFFERAL LINK
                </Text>
              </View>
            </View>
            </View>
          </Card>
            <View style={{marginBottom:40}}>
            </View>
        </ScrollView>
        </ImageBackground>
   </View>
  );
};
const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.background,
    },
    secondTableBodyView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#404040',
        height: 50,
        padding: 10,
    },
    secondBodyTextStyle: {
        textAlign: 'center',
        color: '#ECB931',
        fontWeight: 'bold',
        fontSize: textSize.h4,
        width: 120,
       // borderRightWidth:5,
        //borderRightColor:'yellow'
    },
     inputViewWrapper: {
        padding: 25,
        flex: 1,
      },
     refferCardBody: {
        flexDirection:'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius:35,
        padding:10,
        marginTop:10,
        marginBottom:5,
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 8,
     },
    imageBackgroundStyle: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    tableHeaderView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFB50D',
        height: 50,
        width: 120,
    },
    tableHaderTextstyle: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: textSize.h4,
    },
   
});
export default ControlPanal;
