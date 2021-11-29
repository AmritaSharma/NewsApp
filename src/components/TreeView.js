import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, Text, View, StyleSheet, Dimensions,
    TouchableHighlight,
    Image,
    ScrollView,
}
    from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { GENEOLOGY, GENEOLOGY_SEARCH } from '../../store/action';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { getDimen } from '../dimensions/dimen';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';



const TreeView = () => { 
    return (
        <View style={{ flex: 1, }}>
            <ScrollView>

                <ScrollView
                    horizontal={true}
                    vertical={true}
                >

                    {/* First Root */}

                    {/* <ReactNativeZoomableView
                        maxZoom={1.5}
                        minZoom={0.5}
                        zoomStep={0.5}
                        initialZoom={1}
                        bindToBorders={true}
                        onZoomAfter={logOutZoomState()}
                        style={{
                            padding: 10,
                        }}
                    > */}



                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity
                                onLongPress={() => { console.log('Long preee') }}
                                // onPress={() => {
                                //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.user)
                                // }}
                            >
                                <Image
                                    style={styles.largeImageStyle}
                                    source={require('../assets/Root.png')}
                                    // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.user && genealogyDetails.data.user.app_image}` }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            {/* <Text style={{ marginTop: -30, fontSize: 10 }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.user && genealogyDetails.data.user.user_id}</Text> */}
                            <Text style={{ marginTop: -30, fontSize: 10 }}>CBNC1212</Text>

                            <Image
                                style={
                                    [styles.smallImageStyle, { marginTop: 7 }]
                                }
                                source={require('../assets/line.png')}
                                resizeMode="contain"
                            />
                            <Text style={styles.underLineStyle}>_________________________________</Text>

                        </View>
                        {/* Second Root Start */}
                        <View style={styles.RootViewStyle}>
                            <View style={{ alignItems: 'flex-start', width: getDimen(0.38), }}>
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[0].level[0])
                                    // }}
                                >
                                    <Image
                                        style={styles.largeImageStyle}
                                        source={require('../assets/whiteRoot.png')}
                                        // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[0].level[0].app_image}` }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                {/* <Text style={styles.userIdTextStyle}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[0].level[0].user_id}</Text> */}
                                <Text style={styles.userIdTextStyle}>Roote</Text>
                                <Image
                                    style={[styles.smallImageStyle,
                                    {
                                        marginTop: getDimen(0.042),
                                        marginLeft: getDimen(0.03)
                                    }]
                                    }
                                    source={require('../assets/line.png')}
                                    resizeMode="contain"
                                />
                                <Text style={styles.underLineStyle}>_____________</Text>

                            </View>
                            <View style={{ alignItems: 'flex-end', width: getDimen(0.38), }}>
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[0].level[1])
                                    // }}
                                >
                                    <Image
                                        style={styles.largeImageStyle}
                                        source={require('../assets/whiteRoot.png')}
                                        // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[0].level[1].app_image}` }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                {/* <Text style={{ marginTop: getDimen(-0.08), marginLeft: 0, fontSize: 10, marginRight: getDimen(0.017) }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[0].level[1].user_id}</Text> */}
                                <Text style={{ marginTop: getDimen(-0.08), marginLeft: 0, fontSize: 10, marginRight: getDimen(0.06) }}>roote</Text>
                                <Image
                                    style={[styles.smallImageStyle,
                                    {
                                        marginRight: getDimen(0.028),
                                        marginTop: getDimen(0.042),
                                    }]
                                    }
                                    source={require('../assets/line.png')}
                                    resizeMode="contain"
                                />
                                <Text style={styles.underLineStyle}>_____________</Text>
                            </View>
                        </View>

                        {/* Third Root Start */}
                        <View style={styles.RootViewStyle}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: getDimen(0.45), }}>
                                <View>
                                    <TouchableOpacity
                                        // onPress={() => {
                                        //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[0])
                                        // }}
                                    >
                                        <Image
                                            style={styles.largeImageStyle}
                                            source={require('../assets/whiteRoot.png')}
                                            // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[0].app_image}` }}
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                                    {/* <Text style={styles.userIdTextStyle}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[0].user_id}</Text> */}
                                    <Text style={styles.userIdTextStyle}>Root</Text>
                                    <Image
                                        style={[styles.smallImageStyle,
                                        {
                                            marginTop: getDimen(0.042),
                                            marginLeft: getDimen(0.02)
                                        }]
                                        }
                                        source={require('../assets/line.png')}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.underLineStyle}>________</Text>
                                </View>

                                <View style={{}}>
                                    <TouchableOpacity
                                        // onPress={() => {
                                        //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[1])
                                        // }}
                                    >
                                        <Image
                                            style={styles.largeImageStyle}
                                            source={require('../assets/whiteRoot.png')}
                                            // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[1].app_image}` }}
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                                    {/* <Text style={styles.userIdTextStyle}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[1].user_id}</Text> */}
                                    <Text style={styles.userIdTextStyle}>Root</Text>
                                    <Image
                                        style={[styles.smallImageStyle,
                                        {
                                            marginTop: getDimen(0.042),
                                            marginLeft: getDimen(0.037)
                                        }]
                                        }
                                        source={require('../assets/line.png')}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.underLineStyle}>________</Text>
                                </View>
                            </View>

                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: getDimen(0.45), marginLeft: getDimen(0.1) }}>
                                <View>
                                    <TouchableOpacity
                                        // onPress={() => {
                                        //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[2])
                                        // }}
                                    >
                                        <Image
                                            style={styles.largeImageStyle}
                                            source={require('../assets/whiteRoot.png')}
                                            // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[2].app_image}` }}
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                                    {/* <Text style={styles.userIdTextStyle}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[2].user_id}</Text> */}
                                    <Text style={styles.userIdTextStyle}>Root</Text>
                                    <Image
                                        style={[styles.smallImageStyle,
                                        {
                                            marginTop: getDimen(0.042),
                                            marginLeft: getDimen(0.022)
                                        }]
                                        }
                                        source={require('../assets/line.png')}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.underLineStyle}>________</Text>

                                </View>

                                <View style={{ justifyContent: 'center', alignItems: 'center', height: 50 }}>
                                    <TouchableOpacity
                                        // onPress={() => {
                                        //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[3])
                                        // }}
                                    >
                                        <Image
                                            style={styles.largeImageStyle}
                                            source={require('../assets/whiteRoot.png')}
                                            // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[3].app_image}` }}
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                                    {/* <Text style={{ marginTop: getDimen(-0.08), fontSize: 10, marginRight: getDimen(0.0) }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[1].level[3].user_id}</Text> */}
                                    <Text style={{ marginTop: getDimen(-0.08), fontSize: 10, marginRight: getDimen(0.0) }}>Root</Text>
                                    <Image
                                        style={[styles.smallImageStyle,
                                        {
                                            marginTop: getDimen(0.042),
                                            marginLeft: getDimen(0.023)
                                        }]
                                        }
                                        source={require('../assets/line.png')}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.underLineStyle}>________</Text>

                                </View>
                            </View>
                        </View>

                        {/* Fourth Root */}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: getDimen(-0.05) }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[0])
                                    // }}
                                >
                                    <Image
                                        style={styles.smallImageStyle}
                                        source={require('../assets/whiteRoot.png')}
                                        // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[0].app_image}` }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                {/* <Text style={{ marginTop: -20, fontSize: 7, }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[0].user_id}</Text> */}
                                <Text style={{ marginTop: -20, fontSize: 7, }}>Root</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[1])
                                    // }}
                                >
                                    <Image
                                        style={styles.smallImageStyle}
                                        source={require('../assets/whiteRoot.png')}
                                        // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[1].app_image}` }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                {/* <Text style={{ marginTop: -20, fontSize: 7, }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[1].user_id}</Text> */}
                                <Text style={{ marginTop: -20, fontSize: 7, }}>Root</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[2])
                                    // }}
                                >
                                    <Image
                                        style={styles.smallImageStyle}
                                        source={require('../assets/whiteRoot.png')}
                                        // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[2].app_image}` }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                {/* <Text style={{ marginTop: -20, fontSize: 7, }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[2].user_id}</Text> */}
                                <Text style={{ marginTop: -20, fontSize: 7, }}>Root</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[3])
                                    // }}
                                >
                                    <Image
                                        style={styles.smallImageStyle}
                                        source={require('../assets/whiteRoot.png')}
                                        // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[3].app_image}` }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                {/* <Text style={{ marginTop: -20, fontSize: 7, }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[3].user_id}</Text> */}
                                <Text style={{ marginTop: -20, fontSize: 7, }}>Root</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[4])
                                    // }}
                                >
                                    <Image
                                        style={styles.smallImageStyle}
                                        source={require('../assets/whiteRoot.png')}
                                        // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[4].app_image}` }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                {/* <Text style={{ marginTop: -20, fontSize: 7, }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[4].user_id}</Text> */}
                                <Text style={{ marginTop: -20, fontSize: 7, }}>Root</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[5])
                                    // }}
                                >
                                    <Image
                                        style={styles.smallImageStyle}
                                        source={require('../assets/whiteRoot.png')}
                                        // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[5].app_image}` }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                {/* <Text style={{ marginTop: -20, fontSize: 7, }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[5].user_id}</Text> */}
                                <Text style={{ marginTop: -20, fontSize: 7, }}>Root</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[6])
                                    // }}
                                >
                                    <Image
                                        style={styles.smallImageStyle}
                                        source={require('../assets/whiteRoot.png')}
                                        // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[6].app_image}` }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                {/* <Text style={{ marginTop: -20, fontSize: 7, }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[6].user_id}</Text> */}
                                <Text style={{ marginTop: -20, fontSize: 7, }}>root</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     setFooterData(genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[7])
                                    // }}
                                >
                                    <Image
                                        style={styles.smallImageStyle}
                                        source={require('../assets/whiteRoot.png')}
                                        // source={{ uri: `${genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[7].app_image}` }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                {/* <Text style={{ marginTop: -20, fontSize: 7, }}>{genealogyDetails && genealogyDetails.data && genealogyDetails.data.tree_data && genealogyDetails.data.tree_data[2].level[7].user_id}</Text> */}
                                <Text style={{ marginTop: -20, fontSize: 7, }}>Root</Text>
                            </View>
                        </View>
                    </View>


                    {/* </ReactNativeZoomableView> */}
                </ScrollView>
                {/* Footer View  */}
                {/* <View style={styles.FooterViewStyle}>
                    <FlatList
                        horizontal
                        data={DATA}
                        renderItem={({ item, index }) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: getDimen(0.04) }}>
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        marginLeft: getDimen(0.025)
                                    }}
                                    source={item.image}
                                    resizeMode="contain"
                                />
                                <Text style={styles.FooterFlatListTextStyle}>{item.title}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />

                    <View style={{ marginTop: getDimen(0.04), backgroundColor: '#fff', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                        <View style={{ height: 45, flexDirection: 'row', paddingTop: getDimen(0.07), paddingLeft: getDimen(0.07), alignItems: 'center' }}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                source={require('../../assets/user.png')}
                                resizeMode="contain"
                            />
                            <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{userName}</Text>
                                <Text style={{ fontSize: 13 }}>{userID}</Text>

                            </View>

                        </View>

                        <View style={{ padding: 10, marginTop: getDimen(0.04) }}>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                <View
                                    style={styles.blackFooterView}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.19) }]}> Sponsor ID </Text>
                                        <Text style={styles.footerTextStyle}> : </Text>
                                        <Text style={styles.footerTextStyle}>   {sponsorID} </Text>
                                    </View>
                                    <View style={styles.blackViewText}>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.19) }]}> Placement ID </Text>
                                        <Text style={styles.footerTextStyle}> : </Text>
                                        <Text style={styles.footerTextStyle}>  </Text>
                                    </View>
                                    <View style={styles.blackViewText}>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.19) }]}>Package</Text>
                                        <Text style={styles.footerTextStyle}> : </Text>
                                        <Text style={styles.footerTextStyle}>   {packagee} </Text>
                                    </View>
                                    <View style={styles.blackViewText}>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.19), marginLeft: -2 }]}> Date Of Joining </Text>
                                        <Text style={styles.footerTextStyle}> : </Text>
                                        <Text style={styles.footerTextStyle}>   {DOJ} </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        backgroundColor: '#F17E2B',
                                        height: getDimen(0.3),
                                        width: getDimen(0.45),
                                        justifyContent: 'center',
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        borderRadius: 5,
                                        flexDirection: 'column',
                                        marginLeft: getDimen(0.03)

                                    }}>


                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.15) }]}>  </Text>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.125), textAlign: 'center' }]}> Left </Text>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.125), textAlign: 'center' }]}> Right </Text>
                                    </View>
                                    <View style={styles.blackViewText}>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.15) }]}> Affiliates </Text>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.125), textAlign: 'center' }]}> {affiliatesLeft} </Text>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.125), textAlign: 'center' }]}> {affiliatesRight} </Text>
                                    </View>
                                    <View style={styles.blackViewText}>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.15), paddingLeft: 3 }]}>Sales</Text>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.125), textAlign: 'center' }]}> {salesLeft} </Text>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.125), textAlign: 'center' }]}> {salesRight} </Text>
                                    </View>
                                    <View style={styles.blackViewText}>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.15) }]}> Balance </Text>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.125), textAlign: 'center' }]}> {balanceLeft} </Text>
                                        <Text style={[styles.footerTextStyle, { width: getDimen(0.125), textAlign: 'center' }]}> {balanceRight} </Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                </View> */}

            </ScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    datePickersWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    datePickerView: {
        width: '49%',
        backgroundColor: '#fff',
        borderRadius: 5
    },
    footerTextStyle: {
        fontSize: 9,
        color: '#fff',
        fontWeight: 'bold',
    },
    searchInputBox: {
        fontSize: getDimen(0.031),
        color: '#FFAC66',
        fontWeight: 'bold',
        width: getDimen(0.3)
    },
    searchIconWrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    leftRightArrow: {
        backgroundColor: '#fff',
        height: getDimen(0.1),
        width: getDimen(0.16),
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 10,
        marginTop: getDimen(0.01)
    },
    userIDView: {
        backgroundColor: '#fff',
        height: getDimen(0.1),
        width: getDimen(0.5),
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: getDimen(0.01)

    },
    largeImageStyle: {
        width: 70,
        height: 70,
    },
    smallImageStyle: {
        width: 50,
        height: 50,
    },
    presentAbsentTextStyle:
    {
        marginLeft: 25, fontSize: 9, justifyContent: 'center', marginBottom: -9
    },
    underLineStyle:
    {
        textAlign: 'center', fontWeight: 'bold', marginTop: -15
    },
    RootViewStyle:
    {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: getDimen(-0.06)
    },
    userIdTextStyle: {
        marginTop: getDimen(-0.07), fontSize: 10, marginLeft: getDimen(0.05)
    },
    FooterViewStyle:
    {
        backgroundColor: '#000', marginTop: getDimen(0.04), borderTopLeftRadius: 10, borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center'
    },
    FooterFlatListTextStyle:
    {
        marginLeft: 2, color: '#fff', fontSize: getDimen(0.035)
    },
    blackFooterView:
    {
        backgroundColor: 'black',
        height: getDimen(0.3),
        width: getDimen(0.45),
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        flexDirection: 'column'

    },
    blackViewText:
    {
        flexDirection: 'row', marginTop: 5
    }
})


export default TreeView;


