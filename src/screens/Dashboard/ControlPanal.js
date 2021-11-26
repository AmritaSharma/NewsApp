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
             <Card style={styles(colors).cardBody}>
             <View style={{flexDirection:'row'}}>
            <View >
              <Image
                source={require('../../assets/direct_partner.png')}
                resizeMode="contain"
                style={{
                  borderRadius: 15,
                  height: 70,
                  width: 70,
                }}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <View
                style={{
                  marginTop: 10,
                  borderWidth: 0,
                  width: '85%',
                  marginRight:5
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 14,
                  }}>
                  User ID
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}>
                CB23935130
              </Text>
            </View>
            </View>

          </Card>
            <FlatList
                    data={DataTable}
                    renderItem={({ item,index }) => (
                        <View style={styles(colors).tableBodyView}>
                            <Card style={styles(colors).flatCardBody}>
                               {/* <Text style={styles(colors).bodyTextStyle} > 
                                {index + 1}
                                </Text>*/}
                                <View style={{flexDirection:'row'}}>
                                <View>
                                  <Image
                                    source={require('../../assets/deposit_intatted.png')}
                                    resizeMode="contain"
                                    style={{
                                      borderRadius: 15,
                                      height: 70,
                                      width: 100,
                                      alignSelf:'center'
                                    }}
                                  />
                                  <Text
                                      style={{
                                        fontSize: 18,
                                        color: 'black',
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                        marginTop: 2,
                                        alignSelf:'center'
                                      }}>
                                      $0 
                                    </Text>
                                    <Text
                                      style={{
                                        fontSize: 16,
                                        color: 'black',
                                        marginTop: 2,
                                        alignSelf:'center'
                                      }}>
                                      Royal Title
                                    </Text>
                                    <Text
                                      style={{
                                        fontSize: 16,
                                        color: 'black',
                                        marginTop: 2,
                                        alignSelf:'center',
                                        paddingLeft:10
                                      }}>
                                      Achievers Revenue
                                    </Text>
                                </View>
                                </View>
                            </Card>
                            
                            <Card style={styles(colors).flatCardBody}>
                                <View style={{flexDirection:'row'}}>
                                <View>
                                  <Image
                                    source={require('../../assets/sent_balance.png')}
                                    resizeMode="contain"
                                    style={{
                                      borderRadius: 15,
                                      height: 70,
                                      width: 100,
                                      alignSelf:'center'
                                    }}
                                  />
                                  <Text
                                      style={{
                                        fontSize: 18,
                                        color: 'black',
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                        marginTop: 2,
                                        alignSelf:'center'
                                      }}>
                                      $0 
                                    </Text>
                                    <Text
                                      style={{
                                        fontSize: 16,
                                        color: 'black',
                                        marginTop: 2,
                                        alignSelf:'center'
                                      }}>
                                      Royal Title
                                    </Text>
                                    <Text
                                      style={{
                                        fontSize: 16,
                                        color: 'black',
                                        marginTop: 2,
                                        alignSelf:'center',
                                        paddingLeft:10
                                      }}>
                                      Achievers Revenue
                                    </Text>
                                </View>
                                </View>
                            </Card>
                            

                        </View>
                    )}
                />
            <Card style={styles(colors).cardBody}>
             <View style={{flexDirection:'row'}}>
            <View >
              <Image
                source={require('../../assets/receuved_balnce.png')}
                resizeMode="contain"
                style={{
                  borderRadius: 15,
                  height: 70,
                  width: 70,
                }}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                    marginTop: 20,
                  }}>
                  $0 Recieved Balance
                </Text>
            </View>
            </View>

          </Card>
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
    tableBodyView: {
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'transparent',
       // height: 50,
        padding: 7,
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
    bodyTextStyle: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
        fontSize: textSize.h4,
       // width: 120,
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
    flatCardBody: {
        //height: getDimen(0.300),
        width: getDimen(0.44),
        marginRight:10,
        paddingTop:10,
        paddingBottom:10,
        borderRadius: 12,
        backgroundColor: 'white',
        //alignItems: 'center',
        justifyContent: 'space-between',
       // margin:20
       paddingLeft:20,
       shadowColor: 'grey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 8,

     },
     inputViewWrapper: {
        padding: 25,
        flex: 1,
      },
    cardBody: {
        /*height: getDimen(0.150),
        width: getDimen(0.88),
        borderRadius: 12,
        backgroundColor: 'white',
        borderColor:'black',
        borderWidth: 1,
        borderStyle: 'solid',
        //alignItems: 'center',*/
       // justifyContent: 'space-between',
        flexDirection:'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius:12,
        padding:10,
        marginBottom:5,
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 8,
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
