import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {TextInput, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppColors} from '../constants/appColors';

export const InputTextArea = ({
  placeholder,
  setValue,
  value,
  keyboardType,
  secureTextEntry,
  onSubmitEditing,
  maxLength,
  IconName,
  IconSize,
}) => {
  const {colors} = useTheme();
  return (
    <View style={styles(colors).inputWrapper}>
      <TextInput
        keyboardType={keyboardType}
        style={styles(colors).input}
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
        size={IconSize}
        style={{marginRight: 10}}
        color={colors.iconColor}
      />
    </View>
  );
};

const styles = props =>
  StyleSheet.create({
    input: {
      height: 45,
      width: '90%',
      paddingLeft: 16,
      color: props.headerColor,
    },
    inputWrapper: {
      flexDirection: 'row',
      width: '99%',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: props.borderColor,
      borderWidth: 1.5,
      borderRadius: 25,
    },
  });
