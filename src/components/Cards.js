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

const Cards = ({ data,header }) => {
  const {colors} = useTheme();
  const [userID, setUserID] = useState('');
 return (
   <View>
             <Card style={styles(colors).cardBody}>
             <View style={{flexDirection:'row'}}>
            <View >
              <Image
                source={require('../assets/direct_partner.png')}
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
                    data={data}
                    renderItem={({ item,index }) => (
                        <View style={styles(colors).tableBodyView}>
                            <Card style={styles(colors).flatCardBody}>
                                <View style={{flexDirection:'row'}}>
                                <View>
                                  <Image
                                    source={require('../assets/deposit_intatted.png')}
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
                                    source={require('../assets/sent_balance.png')}
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
                source={require('../assets/receuved_balnce.png')}
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
   </View>
  );
};
const styles = props =>
  StyleSheet.create({
    tableBodyView: {
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
       // justifyContent: 'center',
        //backgroundColor: 'transparent',
       // height: 50,
       justifyContent: 'space-between',
        //padding: 7,
        
    },
    flatCardBody: {
        //height: getDimen(0.300),
        width: getDimen(0.44),
        margin:5,
       // marginRight:10,
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
        marginTop:10
     },
});
export default Cards;
