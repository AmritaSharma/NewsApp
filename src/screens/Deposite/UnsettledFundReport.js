import React, { useEffect, useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDimen } from '../../dimensions/dimen';
import TableView from '../../components/TableView';
import {useTheme} from '@react-navigation/native';

const UnsettledFundReport = ({ navigation }) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const callback = useCallback((entries) => {
    setLengthValue(parseInt(entries))
  }, []);

    const DataTable = [
        {
            "id": 175,
            "user_id": "16626122",
            "mobile": "8460977658",
            "email": "sharmaamrita712@gmail.com",
            "position": "Left",
            "topup_amount": "0.00",
            "entry_time": "2021-10-13 13:22:39",
            "status": "Active",
            "selftopup": 31.67
        },
        {
            "id": 174,
            "user_id": "60717968",
            "mobile": "8460977532",
            "email": "sharmaamrita712@gmail.com",
            "position": "Right",
            "topup_amount": "0.00",
            "entry_time": "2021-10-04 15:38:29",
            "status": "Active",
            "selftopup": 31.67
        },
        {
            "id": 173,
            "user_id": "28311485",
            "mobile": "1234567890",
            "email": "josephdmello890@gmail.com",
            "position": "Left",
            "topup_amount": "0.00",
            "entry_time": "2021-10-01 23:52:20",
            "status": "Active",
            "selftopup": 31.67
        },
        {
            "id": 167,
            "user_id": "49046998",
            "mobile": "8460977532",
            "email": "sharmaamrita712@gmail.com",
            "position": "Left",
            "topup_amount": "0.00",
            "entry_time": "2021-09-24 21:03:45",
            "status": "Active",
            "selftopup": 31.67
        },
        {
            "id": 114,
            "user_id": "51343008",
            "mobile": "+91 84840 58691",
            "email": "liriw19020@shensufu.com",
            "position": "Right",
            "topup_amount": "184.56",
            "entry_time": "2021-09-07 16:18:47",
            "status": "Active",
            "selftopup": 31.67
        }
    ]
  return (
    <View style={styles(colors).container}>
          <ImageBackground
            source={require('../../assets/panelBG.png')}
            style={styles(colors).imageBackgroundStyle}>
      <TableView
        data={DataTable}
        parentCallback={callback}
      />
      </ImageBackground>
    </View>
  );

}
const styles = props =>
StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
export default UnsettledFundReport;




