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

const RefferLinkTableView = ({ data,header }) => {
  const {colors} = useTheme();
  
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
        <View>
             <FlatList
                    style={{ backgroundColor: '#252E3B',marginTop:15,}}
                    data={data}
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
        </View>
  );
};
const styles = props =>
  StyleSheet.create({
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
export default RefferLinkTableView;
