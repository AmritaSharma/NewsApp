import React, { useState } from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        size={20}
        style={{marginRight: 10}}
        color="#787878"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: 16,
    color: '#000'   
  },
  inputWrapper: {
    flexDirection: 'row',
    width: '99%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 15
  }
});
