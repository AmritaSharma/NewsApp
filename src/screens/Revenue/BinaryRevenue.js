import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDimen} from '../../dimensions/dimen';
import TableViewROIRevenue from '../../components/TableViewROIRevenue';
import {useTheme} from '@react-navigation/native';
import {BINARY_REVENUE, ROI_REVENUE} from '../../store/action';
import TableViewBinaryRevenue from '../../components/TableViewBinaryRevenue';

const BinaryRevenue = ({navigation}) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const callback = useCallback(entries => {
    setLengthValue(parseInt(entries));
  }, []);

  const [fromData, setFromDate] = useState('');
  const [toData, setToDate] = useState('');
  const [depositId, setDepositId] = useState('');
  const [showItem, setShowItem] = useState(0);
  const [searchButton, setSearchButton] = useState(false);
  const [resetButton, setResetButton] = useState(false);

  const binaryData = useSelector(state => state.revenue.binaryRevenueData);
  const loginToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE2MDFhNzAwMzRkMzFhZDY2MDNjZjk1NWNhMTU0Y2FjYThiNzJlYzU4MTU3YzZlMDM3YjUwMTgzMDY3ODBiN2MxMGY0MjI0Njk2ZWEzYTA2In0.eyJhdWQiOiI2IiwianRpIjoiMTYwMWE3MDAzNGQzMWFkNjYwM2NmOTU1Y2ExNTRjYWNhOGI3MmVjNTgxNTdjNmUwMzdiNTAxODMwNjc4MGI3YzEwZjQyMjQ2OTZlYTNhMDYiLCJpYXQiOjE2MzgxNzIyOTIsIm5iZiI6MTYzODE3MjI5MiwiZXhwIjoxNjY5NzA4MjkyLCJzdWIiOiIyIiwic2NvcGVzIjpbIioiXX0.bexVE2VOy4AOrYdVJKOreVq_i7b0pJ97h3I-YHfJN7WqBeRuls-sQTsCEDL4WUwdGzWgzHttkPpVOUcG_Z9341yOF3C29hsntp-I3VCZe0mpthnfgXlByijZpOQb_mvzzgIWbJadZ6ba7kzWY1XUwFYKT5tMykZc7lo0zogUloeefaD_kz_3yV_ahw_dhUGaXmqFEBB_SdzxkZmdYPWsm0MAYmTqy9fCpV1qWUKd1xBHhojdqEmv382e6qjAhoPX8GNwsvE36GxJ4nnMaWEgJoaTvwB9SU7-Qe4rvAyeyAjZi8FMrnwiIlslZHkhUUfKWfpnoUO8IVSnPB9OFMAMaBMuVpIhiySOf_haw9r8cM8s7s-a9W5wOFwc4FqZ3YtXvV_qgnZ8E1W5MYQadzOse2b6iArbcQVJdpz406XT2XKzFGvokLzLLWh4rn9_jlpfQ-v3WBH5EG-MKZFyVSCAXxLT1cAnIf6IiNc7aK4Ot5yNciP6_zLacmNbSdmYoT_qgCAGqCKYBO_43uR0RFGUzgViOlgQO7Cl2FddduT-1Ru3nQi3TQ7kUJ-pyX2KgEgsf6NdtRMflZAVMVtjtdNDvZUdfaw2uRzDAiEYCTdn0Fu0PrcZYgKUBahK4_YxqxLWXoK5OpUJeO-xWgZR-pBOU27VVnIA2TL6O5J1n1YCQrk';

  useEffect(() => {
    dispatch({
      type: BINARY_REVENUE,
      payload: {
        data: {
          start: 0,
          length: 10,
          frm_date: fromData,
          to_date: toData,
        },
        token: loginToken,
      },
    });
  }, []);

  useEffect(() => {
    console.log('binaryData========', binaryData);
  }, [binaryData]);

  //console.log('searchButton', searchButton);
  // console.log('showItem', showItem);

  const getSearch = () => {
    console.log('fromdate', fromData);
    console.log('toData', toData);
    console.log('depositId', depositId);
  };

  const getReset = () => {
    setFromDate('');
    setToDate('');
    setDepositId('');
  };

  const DataTable = [
    {
      id: 175,
      amount: 121,
      left_business: '16626122',
      right_business: '0.00',
      laps_amount: '2021-10-13 13:22:39',
      title: 31.67,
      income: 31.67,
    },
    {
      id: 176,
      amount: 121,
      left_business: '16626122',
      right_business: '0.00',
      laps_amount: '2021-10-13 13:22:39',
      title: 31.67,
      income: 31.67,
    },
    {
      id: 177,
      amount: 121,
      left_business: '16626122',
      right_business: '0.00',
      laps_amount: '2021-10-13 13:22:39',
      title: 31.67,
      income: 31.67,
    },
    {
      id: 178,
      amount: 121,
      left_business: '16626122',
      right_business: '0.00',
      laps_amount: '2021-10-13 13:22:39',
      title: 31.67,
      income: 31.67,
    },
  ];
  return (
    <View style={styles(colors).container}>
      <ImageBackground
        source={require('../../assets/panelBG.png')}
        style={styles(colors).imageBackgroundStyle}>
        <TableViewBinaryRevenue
          data={DataTable}
          parentCallback={callback}
          setFromDate={text => setFromDate(text)}
          setToDate={text => setToDate(text)}
          setDepositId={id => setDepositId(id)}
          depositId={depositId}
          setSendButton={text => {
            setSearchButton(text);
            getSearch();
          }}
          setResetButton={text => {
            setResetButton(text);
            getReset();
          }}
          setShowItem={text => {
            setShowItem(text);
          }}
        />
      </ImageBackground>
    </View>
  );
};
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
export default BinaryRevenue;
