import React, { useState } from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppColors } from '../constants/appColors';
// placeholder, icon, setValue,value
export const InputTextArea = ({ placeholder, setValue, value, keyboardType, secureTextEntry, onSubmitEditing, maxLength, IconName }) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        keyboardType={keyboardType}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#8A8A8A"
        onChangeText={text => setValue(text)}
        value={value}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="transparent"
        onSubmitEditing={onSubmitEditing}
        maxLength={maxLength}
      />
      <Icon
        name={IconName}
        size={25}
        style={{marginRight: 10}}
        color={AppColors().iconColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    paddingLeft: 16,
    color: AppColors().headerColor  
  },
  inputWrapper: {
    flexDirection: 'row',
    width: '99%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: AppColors().borderColor,
    borderWidth: 0.5,
    borderRadius: 15
  }
});
