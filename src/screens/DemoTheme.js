import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useTheme, Switch, TouchableRipple} from 'react-native-paper';
import {AuthContext} from '../components/context';
const DemoTheme = ({navigation}) => {
  const paperTheme = useTheme();
  const {toggleTheme} = useContext(AuthContext);
  const goToLogin = () => {
    navigation.navigate('UserAccount');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => goToLogin()}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableRipple onPress={() => toggleTheme()}>
        <View>
          <Text>Dark Theme</Text>
          <View pointerEvents="none">
            <Switch value={paperTheme.dark} />
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  loginText: {
    color: 'white',
    fontSize: 18,
  },
});

export default DemoTheme;
