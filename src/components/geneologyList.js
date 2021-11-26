import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const GeneologyList = ({dataList, heading, totalamount}) => {
  const {colors} = useTheme();

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
      }}>
      <Text style={styles(colors).rowText}>{item.name}</Text>
      <Text style={styles(colors).rowText}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={{flex: 1, margin: 4}}>
      <Text
        style={[
          styles(colors).titleText,
          {backgroundColor: colors.headerColor, color: colors.heading},
        ]}>
        {heading}
      </Text>
      <Text
        style={[
          styles(colors).titleText,
          {backgroundColor: colors.heading, color: colors.headerColor},
        ]}>
        {totalamount}
      </Text>

      <FlatList
        style={{backgroundColor: colors.heading}}
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = props =>
  StyleSheet.create({
    titleText: {
      textAlign: 'center',
      padding: 4,
      fontSize: 12,
    },
    rowText: {
      width: '50%',
      backgroundColor: props.headerColor,
      color: props.heading,
      textAlign: 'center',
      padding: 4,
      fontSize: 12,
    },
  });
