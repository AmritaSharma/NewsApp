import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text, Modal, View } from "react-native";
import OTPTextView from "react-native-otp-textinput"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';

const EnterOtpPopView = ({ modalVisible, parentCallback }) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const [otpInput, setotpInput] = React.useState(false);
    
  return (
    <View style={styles(colors).centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          parentCallback(!modalVisible);
        }}
      >
        <>
          <View style={styles(colors).closeBtnView}>
            <TouchableOpacity onPress={() => parentCallback(!modalVisible)}>
              <Icon name='close' size={35} color={'#FFFFFF'} />
            </TouchableOpacity>
          </View>
          <View style={styles(colors).container}>
            <Text style={styles(colors).textlabel}>Enter OTP </Text>
            <OTPTextView
              handleTextChange={otpInput => setotpInput(otpInput)}
              textInputStyle={styles(colors).roundedTextInput}
              inputCount={6}
              inputCellLength={1}
            />

            {(otpInput) ?
              <TouchableOpacity style={[styles(colors).buttonContainer, styles(colors).submitButton]} onPress={() => verifyOtpFun()}>
                <Text style={styles.loginText}>SUBMIT</Text>
              </TouchableOpacity>
              :
              <View style={[styles(colors).buttonContainer, styles(colors).submitDisableButton]}>
                <Text style={styles(colors).loginText}>SUBMIT</Text>
              </View>
            }
          </View>
        </>
      </Modal>
    </View>
  );
};

const styles = (props) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
  },
  closeBtnView: {
    paddingTop: 10,
    paddingRight: 10,
    alignItems: 'flex-end',
    backgroundColor: '#262626',
  },
  textlabel: {
    color: '#FFFFFF',
    fontSize: 25,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
    backgroundColor: '#FFFFFF',
    color: '#474747',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: 350,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
  submitButton: {
    backgroundColor: props.buttonColor,
  },
  submitDisableButton: {
    backgroundColor: props.buttonColor,
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
  },
});

export default EnterOtpPopView;