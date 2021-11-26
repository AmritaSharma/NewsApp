import React from 'react';
import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import {getDimen} from '../../dimensions/dimen';
import {GeneologyList} from '../../components/geneologyList';

const ControlPanal = ({navigation}) => {
  const DATA = [
    {
      name: 'abc',
      amount: 10,
    },
    {
      name: 'abc',
      amount: 10,
    },
    {
      name: 'abc',
      amount: 10,
    },
    {
      name: 'abc',
      amount: 10,
    },
    {
      name: 'abc',
      amount: 10,
    },
  ];

  return (
    <View>
      <Text>ControlPanal!!</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'space-between',
        }}>
        <GeneologyList
          dataList={DATA}
          heading="Left Team"
          totalamount="Total 10"
        />
        <GeneologyList
          dataList={DATA}
          heading="Right Team"
          totalamount="Total 10"
        />
      </View>
    </View>
  );
};

export default ControlPanal;
