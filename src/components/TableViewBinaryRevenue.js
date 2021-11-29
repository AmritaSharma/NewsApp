import React, {useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getDimen} from '../dimensions/dimen';
import {List} from 'react-native-paper';
import strings from '../constants/localization';
import textSize from '../constants/textSize';
import {useTheme} from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import {InputTextArea} from './InputTextArea';

const TableViewBinaryRevenue = ({
  data,
  parentCallback,
  setFromDate,
  setToDate,
  setDepositId,
  depositId,
  setSendButton,
  setResetButton,
  setShowItem,
}) => {
  const [expanded, setExpanded] = useState(false);
  const {colors} = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const numOfEntries = ['10', '50', '100'];
  const totalPageCount = ['1', '2'];
  const [fromDatevalue, setFromDateValue] = useState('');
  const [toDateValue, setToDateValue] = useState('');
  const [depositID, setDepositID] = useState('');
  const [dropValue, setdropValue] = useState(10);
  const [send, setSent] = useState(false);
  const [reset, setReset] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  const getReset = () => {
    setFromDateValue('');
    setToDateValue('');
    setResetButton(true);
  };

  const getSend = () => {
    setSendButton(true);
  };

  const HeaderData = [
    {
      id: '1',
      title: 'Sr No.',
    },
    {
      id: '2',
      title: 'Amount',
    },
    {
      id: '3',
      title: 'Left Business',
    },
    {
      id: '4',
      title: 'Right Business',
    },
    {
      id: '5',
      title: 'Laps Amount',
    },
    {
      id: '6',
      title: 'Title',
    },
    {
      id: '7',
      title: 'Income Percentage',
    },
  ];
  const ListHeader = () => {
    //View to set in Header
    return (
      <FlatList
        numColumns={HeaderData.length}
        data={HeaderData}
        renderItem={({item, index}) => (
          <View style={styles(colors).tableHeaderView}>
            <Text style={styles(colors).tableHaderTextstyle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    );
  };
  return (
    <View style={styles(colors).container}>
      <View style={styles(colors).tableSearchViewWrapper}>
        <List.Accordion
          title={strings.Search}
          right={props => (
            <Icon name={expanded ? 'minus' : 'plus'} size={20} color="#FFF" />
          )}
          expanded={expanded}
          onPress={handlePress}
          titleStyle={styles(colors).menuText}
          style={styles(colors).menuText}>
          <>
            <View style={styles(colors).searchBtnInputWrapper}>
              <DatePicker
                style={styles(colors).datePickerView}
                date={fromDatevalue}
                mode="date"
                placeholder={strings.FromDate}
                format="YYYY-MM-DD"
                minDate="1919-05-01"
                maxDate="2099-06-01"
                confirmBtnText={strings.Confirm}
                cancelBtnText={strings.Cancel}
                customStyles={{
                  dateIcon: styles(colors).dateIconStyle,
                  dateInput: styles(colors).dateInputStyle,
                }}
                onDateChange={date => {
                  setFromDateValue(date);
                  setFromDate(date);
                }}
              />
              <DatePicker
                style={styles(colors).datePickerView}
                date={toDateValue}
                mode="date"
                placeholder={strings.ToDate}
                format="YYYY-MM-DD"
                minDate="1919-05-01"
                maxDate="2099-06-01"
                confirmBtnText={strings.Confirm}
                cancelBtnText={strings.Cancel}
                customStyles={{
                  dateIcon: styles(colors).dateIconStyle,
                  dateInput: styles(colors).dateInputStyle,
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  setToDateValue(date);
                  setToDate(date);
                }}
              />
            </View>

            <View style={styles(colors).searchBtnInputWrapper}>
              <View style={styles(colors).buttonWrapper}>
                <TouchableOpacity
                  style={styles(colors).searchBtnView}
                  onPress={() => getSend()}>
                  <Text style={styles(colors).searchBtnText}>
                    {strings.Search}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles(colors).searchBtnView}
                  onPress={() => getReset()}>
                  <Text style={styles(colors).searchBtnText}>
                    {strings.Reset}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        </List.Accordion>
      </View>

      <View style={styles(colors).showEntriesView}>
        <Text style={styles(colors).showEntryText}>{strings.Show}</Text>
        <View style={styles(colors).showEntryDropWrapper}>
          <SelectDropdown
            data={numOfEntries}
            defaultButtonText="10"
            buttonTextStyle={{color: 'white'}}
            buttonStyle={styles(colors).showEntryDropView}
            onSelect={(selectedItem, index) => {
              //parentCallback(selectedItem);
              setShowItem(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              //setStartValue(selectedItem)
              // setdropValue(selectedItem)
              setShowItem(selectedItem);
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <View style={styles(colors).showEntrySortDownIconView}>
            <Icon name="sort-down" size={23} color="white" />
          </View>
        </View>
        <Text style={styles(colors).showEntryText}>{strings.Entries}</Text>
      </View>

      <ScrollView horizontal>
        <FlatList
          style={{backgroundColor: '#E6E4E4'}}
          data={data}
          renderItem={({item, index}) => (
            <View
              style={[
                styles(colors).tableBodyView,
                {backgroundColor: index % 2 == 0 ? '#f2f2f2' : '#FFFFFF'},
              ]}>
              <Text style={styles(colors).bodyTextStyle}>{index + 1}</Text>
              <Text style={styles(colors).bodyTextStyle}>{item.amount}</Text>
              <Text style={styles(colors).bodyTextStyle}>
                {item.left_business}
              </Text>
              <Text style={styles(colors).bodyTextStyle}>
                {item.right_business}
              </Text>
              <Text style={styles(colors).bodyTextStyle}>
                {item.laps_amount}
              </Text>
              <Text style={styles(colors).bodyTextStyle}>{item.title}</Text>
              <Text style={styles(colors).bodyTextStyle}>{item.income}</Text>
            </View>
          )}
          ListHeaderComponent={ListHeader}
        />
      </ScrollView>
      <View style={{flex: 1}} />
    </View>
  );
};

export default TableViewBinaryRevenue;
const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 15,
    },
    // header(search) view
    tableSearchViewWrapper: {
      backgroundColor: '#404040',
      padding: 10,
    },
    buttonWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputWrapper: {
      //width: getDimen(0.95),
      width: '100%',
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 25,
      marginTop: 15,
      paddingLeft: 15,
    },
    searchBtnView: {
      height: 45,
      width: getDimen(0.42),
      backgroundColor: '#FFCC00',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      marginTop: 10,
      marginLeft: 3,
    },
    searchBtnText: {
      color: 'black',
      fontSize: textSize.h4,
    },
    // Table style
    tableHeaderView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#404040',
      height: 50,
      width: 120,
    },
    tableHaderTextstyle: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: textSize.h4,
    },
    tableBodyView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#404040',
      height: 50,
      padding: 15,
    },
    bodyTextStyle: {
      textAlign: 'center',
      color: 'black',
      fontWeight: '500',
      fontSize: textSize.h4,
      width: 120,
    },
    showEntriesView: {
      flexDirection: 'row',
      backgroundColor: '#404040',
      padding: 10,
      alignItems: 'center',
      marginTop: 10,
    },
    showEntryText: {
      color: 'white',
      fontSize: textSize.h4,
      marginHorizontal: 12,
    },
    showEntryDropWrapper: {
      width: '40%',
      backgroundColor: 'black',
      flexDirection: 'row',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    showEntryDropView: {
      backgroundColor: 'black',
      width: '70%',
      height: 30,
      borderRadius: 5,
      color: 'black',
    },
    showEntrySortDownIconView: {
      height: 35,
      width: '30%',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    buttonView: {
      backgroundColor: 'orange',
      height: getDimen(0.105),
      width: getDimen(0.15),
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 5,
      marginRight: '2%',
    },
    previewView: {
      backgroundColor: 'orange',
      height: getDimen(0.105),
      width: getDimen(0.15),
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 2,
      margin: '2%',
    },
    textStyle: {
      textAlign: 'center',
      color: 'black',
      fontWeight: '500',
      fontSize: textSize.h5,
      width: 120,
    },
    buttonStyle: {
      fontSize: textSize.h5,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    indexView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F4F5F8',
      height: 50,
      padding: 5,
      width: getDimen(0.12),
      borderWidth: 5,
    },
    showText: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
    },
    paginationTextStyle: {
      textAlign: 'center',
      fontWeight: '400',
      color: 'grey',
      fontSize: textSize.h3,
      marginTop: 10,
    },
    menuText: {
      backgroundColor: '#404040',
      fontSize: textSize.h4,
      color: 'white',
      fontWeight: 'bold',
    },
    datePickerView: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 25,
      marginTop: 15,
    },
    dateIconStyle: {
      position: 'absolute',
      right: 0,
      top: 4,
      marginRight: 5,
    },
    dateInputStyle: {
      height: 45,
      backgroundColor: '#fff',
      borderRadius: 25,
      alignItems: 'flex-start',
      paddingLeft: 15,
    },
  });
