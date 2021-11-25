import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppColors} from '../constants/appColors';

const Toolbar = ({navigation, title, isBack}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.HeaderView}>
      {isBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      ) : null}
      <View style={{width: '76%', flexDirection: 'row'}}>
        <Text
          style={{
            color: 'white',
            marginLeft: 8,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderView: {
    backgroundColor: AppColors().background,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '8.6%',
    padding: 16,
    flexDirection: 'row',
  },
});

export default Toolbar;
