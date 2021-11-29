import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {getDimen} from '../../dimensions/dimen';
import {useNavigation} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {List} from 'react-native-paper';
import textSize from '../../constants/textSize';
import {useTheme} from '@react-navigation/native';
import {RevenueImg} from '../../assets/revenueImg';
import {WithdrowWalletImg} from '../../assets/withdrowWalletImg';

const DrawerMenu = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  const handleLogOut = () => {
    Alert.alert(
      'Alert!',
      'Are you sure want to logout',
      [
        {text: 'Yes', onPress: () => {}},
        {
          text: 'No',
          onPress: () => console.log('No button clicked'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View
          style={{
            height: getDimen(0.4),
            flexDirection: 'row',
            backgroundColor: colors.headerColor,
            paddingLeft: '12%',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
            }}
            style={{
              height: 70,
              width: 70,
              backgroundColor: 'red',
              borderRadius: getDimen(0.9),
              borderWidth: 1,
              borderColor: colors.heading,
              marginRight: 8,
            }}
          />
          <View style={{flexDirection: 'column', paddingLeft: '5%'}}>
            <Text
              numberOfLines={1}
              style={{
                color: colors.buttonColor,
                fontWeight: '800',
                fontSize: 18,
              }}>
              JOHN DOE
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="ios-person" size={14} color={colors.heading} />
              <Text
                numberOfLines={1}
                style={{
                  color: colors.heading,
                  fontSize: 14,
                  fontWeight: '600',
                  marginStart: 4,
                }}>
                ASF56666
              </Text>
            </View>
          </View>
        </View>
        <View style={{paddingLeft: 16, paddingVertical: 16}}>
          <List.AccordionGroup>
            <List.Item
              title="Control Panel"
              titleStyle={styles.menuText}
              left={props => (
                <Icon name="desktop-outline" size={24} color={colors.title} />
              )}
              onPress={() => navigation.navigate('DashboardScreen')}
            />

            <List.Accordion
              title="Deposit"
              left={props => (
                <Icon name="md-wallet" size={24} color={colors.title} />
              )}
              right={props => (
                <View>
                  {props.isExpanded ? (
                    <Icon
                      name="remove-outline"
                      size={24}
                      color={colors.title}
                    />
                  ) : (
                    <Icon name="md-add" size={24} color={colors.title} />
                  )}
                </View>
              )}
              id="3"
              theme={{colors: {text: 'white'}}}
              style={styles.menuText}
              titleStyle={styles.menuText}>
              <List.Item
                title="Initial Deposite"
                left={props => (
                  <Image
                    {...props}
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                onPress={() => navigation.navigate('InitiateDeposite')}
              />
              <List.Item
                title="Unsettled Fund Report"
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                onPress={() => navigation.navigate('UnsettledFundReport')}
              />
              <List.Item
                title="Settled Fund Report"
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                onPress={() => navigation.navigate('SettledFundReport')}
              />
              <List.Item
                title="Perfect Money Fund Report"
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                // onPress={() => navigation.navigate('Security')}
              />
              <List.Item
                title="Deposit From Purchase Wallet"
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                // onPress={() => navigation.navigate('Security')}
              />
              <List.Item
                title="Purchase Wallet Report"
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                // onPress={() => navigation.navigate('Security')}
              />
            </List.Accordion>
            <List.Accordion
              title="Account"
              id="4"
              left={props => (
                <Icon name="ios-person" size={24} color={colors.title} />
              )}
              right={props => (
                <View>
                  {props.isExpanded ? (
                    <Icon
                      name="remove-outline"
                      size={24}
                      color={colors.title}
                    />
                  ) : (
                    <Icon name="md-add" size={24} color={colors.title} />
                  )}
                </View>
              )}
              theme={{colors: {text: 'white'}}}
              style={styles.menuText}
              titleStyle={styles.menuText}>
              <List.Item
                title="User Account"
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                onPress={() => navigation.navigate('UserAccount')}
              />
              <List.Item
                title="Rearrange Account Details"
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                // onPress={() =>
                //     navigation.navigate('FundReports', { routeName: 'FundReport' })
                // }
              />
              <List.Item
                title="Reset Password"
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                // onPress={() =>
                //     navigation.navigate('FundReports', { routeName: 'PerfectMoney' })
                // }
              />
            </List.Accordion>

            <List.Accordion
              title="Partners"
              id="5"
              left={props => (
                <Icon name="ios-people-sharp" size={24} color={colors.title} />
              )}
              right={props => (
                <View>
                  {props.isExpanded ? (
                    <Icon
                      name="remove-outline"
                      size={24}
                      color={colors.title}
                    />
                  ) : (
                    <Icon name="md-add" size={24} color={colors.title} />
                  )}
                </View>
              )}
              theme={{colors: {text: 'white'}}}
              style={styles.menuText}
              titleStyle={styles.menuText}>
              <List.Item
                title="Genealogy"
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                onPress={() => navigation.navigate('Genealogy')}
              />
              <List.Item
                title="Team View"
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                // onPress={() => navigation.navigate('DirectUserList')}
              />
              <List.Item
                title="Direct Partner List"
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                // onPress={() => navigation.navigate('TeamView')}
              />
            </List.Accordion>

            <List.Accordion
              title="Revenue"
              id="6"
              left={props => (
                <RevenueImg height={20} width={20} color="black" />
              )}
              right={props => (
                <View>
                  {props.isExpanded ? (
                    <Icon
                      name="remove-outline"
                      size={24}
                      color={colors.title}
                    />
                  ) : (
                    <Icon name="md-add" size={24} color={colors.title} />
                  )}
                </View>
              )}
              theme={{colors: {text: 'white'}}}
              style={styles.menuText}
              titleStyle={styles.menuText}></List.Accordion>

            <List.Accordion
              title="Withdrawal Wallet"
              id="7"
              left={props => (
                <WithdrowWalletImg height={20} width={20} color="black" />
              )}
              right={props => (
                <View>
                  {props.isExpanded ? (
                    <Icon
                      name="remove-outline"
                      size={24}
                      color={colors.title}
                    />
                  ) : (
                    <Icon name="md-add" size={24} color={colors.title} />
                  )}
                </View>
              )}
              theme={{colors: {text: 'white'}}}
              style={styles.menuText}
              titleStyle={styles.menuText}>
              <List.Item
                title="Cryptobrite Wallet"
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                // onPress={() => navigation.navigate('DirectIncome')}
              />
              <List.Item
                title="Withdrawal Wallet Report"
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                // onPress={() => navigation.navigate('ROIBonusIncome')}
              />
              <List.Item
                title="Cryptobrite Wallet To Purchase Wallet Trans"
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                // onPress={() => navigation.navigate('BinaryIncome')}
              />
            </List.Accordion>

            <List.Accordion
              title="Manage All Id Balance"
              id="8"
              left={props => (
                <Icon name="ios-document-text" size={24} color={colors.title} />
              )}
              right={props => (
                <View>
                  {props.isExpanded ? (
                    <Icon
                      name="remove-outline"
                      size={24}
                      color={colors.title}
                    />
                  ) : (
                    <Icon name="md-add" size={24} color={colors.title} />
                  )}
                </View>
              )}
              theme={{colors: {text: 'white'}}}
              style={styles.menuText}
              titleStyle={styles.menuText}>
              <List.Item
                title="All Id Balance Receive"
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                // onPress={() => navigation.navigate('DirectIncome')}
              />
              <List.Item
                title="Unsetteled Balance Receive Request"
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                // onPress={() => navigation.navigate('ROIBonusIncome')}
              />
              <List.Item
                title="Confirmed Balance Report"
                left={props => (
                  <Image
                    style={styles.subMenuStyle}
                    color={'white'}
                    // source={arrowRightImage}
                  />
                )}
                style={[styles.menuText, {backgroundColor: colors.headerColor}]}
                titleStyle={styles.itemText}
                // onPress={() => navigation.navigate('BinaryIncome')}
              />
            </List.Accordion>

            <List.Item
              title="Exit"
              titleStyle={styles.menuText}
              left={props => (
                <Icon
                  name="exit"
                  style={{marginTop: 6}}
                  size={24}
                  color={colors.title}
                />
              )}
              onPress={() => handleLogOut(navigation)}
            />
          </List.AccordionGroup>
        </View>
      </ScrollView>
    </View>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  menuText: {
    backgroundColor: 'white',
    fontSize: 14,
    color: '#1b2a39',
    paddingLeft: '3%',
  },
  itemText: {
    fontSize: 12,
    color: 'white',
  },
  rightIcon: {
    height: getDimen(0.036),
    width: getDimen(0.036),
    marginLeft: 0,
  },
  leftIcon: {
    height: 20,
    width: 20,
    marginLeft: 0,
  },
  subMenuStyle: {
    marginLeft: '10%',
    width: 20,
    height: 16,
    marginTop: '4%',
  },
});
