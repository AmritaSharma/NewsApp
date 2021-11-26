import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, Text, View, StyleSheet, Dimensions,
    TouchableHighlight,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
}
    from 'react-native';
import { getDimen } from '../../dimensions/dimen';
import TreeView from '../../components/TreeView'
import { useTheme } from '@react-navigation/native';
import { InputTextArea } from '../../components/InputTextArea';
import strings from '../../constants/localization';
import textSize from '../../constants/textSize';



const Genealogy = () => {
    const { colors } = useTheme();
    const [userID, setUserID] = useState('');

    return (
        <View style={{ flex: 1, }}>
            <ImageBackground
                source={require('../../assets/splashscreen_background.png')}
                style={styles(colors).imageBackgroundStyle}>
                {/* <ScrollView> */}
                <View style={{ backgroundColor: 'white', height: '35%', width: '95%', marginTop: getDimen(0.02), borderRadius: getDimen(0.02), padding: 10}}>
                    <InputTextArea
                        placeholder={strings.userIDPlaceholder}
                        setValue={text => setUserID(text)}
                        value={userID}
                        keyboardType={'email-address'}
                        secureTextEntry={false}
                        onSubmitEditing={text => console.log('text', text)}
                        maxLength={100}
                        IconName={'user'}
                        IconSize={20}
                    />
                    <View style={{ flexDirection: 'row', height: '30%', justifyContent: 'space-between', marginTop: getDimen(0.05), marginLeft: getDimen(0.03), marginRight: getDimen(0.03), alignItems: 'center'}}>
                        <Image
                            style={styles(colors).iconImageStyle}
                            source={require('../../assets/green.png')}
                        />
                        <Image
                            style={styles(colors).iconImageStyle}
                            source={require('../../assets/black.png')}
                        />
                        <Image
                            style={styles(colors).iconImageStyle}
                            source={require('../../assets/gray.png')}
                        />
                        <Image
                            style={styles(colors).iconImageStyle}
                            source={require('../../assets/red.png')}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles(colors).loginButtonView}>
                        <Text style={styles(colors).loginButtonText}>
                            {strings.createStructure}
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                <TreeView />
                            {/* </ScrollView> */}
            </ImageBackground>
        </View>
    );
};

export default Genealogy;

const styles = props => StyleSheet.create({
    imageBackgroundStyle: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    iconImageStyle: {
        height: 50,
        width: 55,
    },
    loginButtonView: {
        backgroundColor: props.buttonColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '3%',
        borderRadius: 25,
        marginTop: getDimen(0.05)
    },
    loginButtonText: {
        fontSize: textSize.h2,
        color: props.headerColor,
        fontWeight: 'bold',
    },
})

