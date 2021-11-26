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
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {List} from 'react-native-paper';
import textSize from '../../constants/textSize';

const DrawerMenu = () => {
  const navigation = useNavigation();
  const [accessToken, setAccessToken] = React.useState('');
  const [userImage, setUserImage] = React.useState('');
  const [isPro, setIsPro] = React.useState('');
  const [showLoader, setShowLoader] = useState('hide');

  // Images
  const controlPanelImg = require('../../assets/cryptobrite_wallet.png');
  const depositeImg = require('../../assets/cryptobrite_wallet.png');
  const AccountImg = require('../../assets/avatar.png');
  const PartnersImg = require('../../assets/direct_partners.png');
  const revenueImg = require('../../assets/deposit_intatted.png');
  const withdrawalImg = require('../../assets/total_withdrawl.png');
  const manageAllIdBalanceImg = require('../../assets/receuved_balnce.png');
  const plusImage = require('../../assets/add.png');

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
            height: getDimen(0.26),
            flexDirection: 'row',
            backgroundColor: 'black',
            paddingLeft: '12%',
            alignItems: 'center',
          }}>
          <Image
            // source={require('../../assets/imageedit_2_2851942888.png')}
            style={{
              height: getDimen(0.18),
              width: getDimen(0.18),
              backgroundColor: 'red',
              borderRadius: getDimen(0.9),
            }}
          />
          <View style={{flexDirection: 'column', paddingLeft: '5%'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              JOHN DOE
            </Text>
            <Text style={{color: 'white'}}>ASF56666</Text>
          </View>
        </View>
        <List.AccordionGroup>
          <List.Item
            title="Control Panel"
            titleStyle={styles.menuText}
            left={props => (
              <Image
                style={[styles.leftIcon, {marginTop: 7}]}
                color="#1b2a39"
                source={controlPanelImg}
              />
            )}
            onPress={() => navigation.navigate('DashboardScreen')}
          />

          <List.Accordion
            title="Deposit"
            left={props => (
              <Image
                style={styles.leftIcon}
                color={'white'}
                source={depositeImg}
              />
            )}
            right={props => (
              <Image style={styles.rightIcon} source={plusImage} />
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
              titleStyle={styles.itemText}
              onPress={() => navigation.navigate('InitiateDeposite')}
            />
            <List.Item
              title="Unsettled Fund Report"
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
              <Image
                style={styles.leftIcon}
                color={'white'}
                source={AccountImg}
              />
            )}
            right={props => (
              <Image style={styles.rightIcon} source={plusImage} />
            )}
            theme={{colors: {text: 'white'}}}
            style={styles.menuText}
            titleStyle={styles.menuText}>
            <List.Item
              title="User Account"
              titleStyle={styles.itemText}
              left={props => (
                <Image
                  style={styles.subMenuStyle}
                  color={'white'}
                  // source={arrowRightImage}
                />
              )}
              // onPress={() => navigation.navigate('AddFund')}
            />
            <List.Item
              title="Rearrange Account Details"
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
              <Image
                style={styles.leftIcon}
                color={'white'}
                source={PartnersImg}
              />
            )}
            right={props => (
              <Image source={plusImage} style={styles.rightIcon} />
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
              titleStyle={styles.itemText}
              // onPress={() => navigation.navigate('TeamView')}
            />
          </List.Accordion>

          <List.Accordion
            title="Revenue"
            id="6"
            left={props => (
              <Image
                style={styles.leftIcon}
                color={'white'}
                source={revenueImg}
              />
            )}
            right={props => (
              <Image style={styles.rightIcon} source={plusImage} />
            )}
            theme={{colors: {text: 'white'}}}
            style={styles.menuText}
            titleStyle={styles.menuText}></List.Accordion>

          <List.Accordion
            title="Withdrawal Wallet"
            id="7"
            left={props => (
              <Image
                style={styles.leftIcon}
                color={'white'}
                source={withdrawalImg}
              />
            )}
            right={props => (
              <Image style={styles.rightIcon} source={plusImage} />
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
              titleStyle={styles.itemText}
              // onPress={() => navigation.navigate('BinaryIncome')}
            />
          </List.Accordion>

          <List.Accordion
            title="Manage All Id Balance"
            id="8"
            left={props => (
              <Image
                style={styles.leftIcon}
                color={'white'}
                source={manageAllIdBalanceImg}
              />
            )}
            right={props => (
              <Image style={styles.rightIcon} source={plusImage} />
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
              titleStyle={styles.itemText}
              // onPress={() => navigation.navigate('BinaryIncome')}
            />
          </List.Accordion>

          <List.Item
            title="Logout"
            titleStyle={styles.menuText}
            left={props => (
              <Image
                style={[styles.leftIcon, {marginTop: 7}]}
                color={'white'}
                // source={logoutImage}
              />
            )}
            onPress={() => handleLogOut(navigation)}
          />
        </List.AccordionGroup>
      </ScrollView>
    </View>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  menuText: {
    backgroundColor: 'white',
    fontSize: getDimen(0.043),
    color: '#1b2a39',
    paddingLeft: '3%',
  },
  itemText: {
    fontSize: getDimen(0.025),
    color: '#1b2a39',
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
