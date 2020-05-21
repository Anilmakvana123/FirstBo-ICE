/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { imageSource } from '../config/image';
import { actuatedNormalize } from '../config/font';
import { TextButtonGroup, ButtonGroup } from '../components/parts';
import StatusBar from '../components/statusbar';

import Home from './Home.js';
import Login from './Login.js';
import Account from './Account.js';
import Order from './Order.js';
import Cart from './Cart.js';
import Favourite from './Favourite.js';


const Tab = createBottomTabNavigator();
function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            tabBarOptions={{
                showIcon: true
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        if (focused) {
                            return (
                                <Image style={styles.icon} source={imageSource.ico_home_active} />
                            );
                        }
                        if (!focused) {
                            return (
                                <Image style={styles.icon} source={imageSource.ico_home_disabled} />
                            );
                        }
                    }
                    if (route.name === 'Account') {
                        if (focused) {
                            return (
                                <Image style={styles.icon} source={imageSource.ico_account_active} />
                            );
                        }
                        if (!focused) {
                            return (
                                <Image style={styles.icon} source={imageSource.ico_account_disabled} />
                            );
                        }

                    }
                    if (route.name === 'Favourite') {
                        if (focused) {
                            return (
                                <Image style={styles.icon} source={imageSource.ico_fav_active} />
                            );
                        }
                        if (!focused) {
                            return (
                                <Image style={styles.icon} source={imageSource.ico_fav_disabled} />
                            );
                        }
                    }
                    if (route.name === 'Cart') {
                        if (focused) {
                            return (
                                <Image style={styles.icon} source={imageSource.ico_cart_active} />
                            );
                        }
                        if (!focused) {
                            return (
                                <Image style={styles.icon} source={imageSource.ico_cart_disabled} />
                            );
                        }
                    }
                    if (route.name === 'Order') {
                        if (focused) {
                            return (
                                <Image style={styles.icon} source={imageSource.ico_order_active} />
                            );
                        }
                        if (!focused) {
                            return (
                                <Image style={styles.icon} source={imageSource.ico_order_disabled} />
                            );
                        }
                    }
                }
            })
            }

        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favourite" component={Favourite} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="Account" component={Account} initialParams={{ logged: false }} />

        </Tab.Navigator>



    );
};

const styles = StyleSheet.create({
    icon:{
        width: 20, height: 20, resizeMode: "contain"
    }
});

export default TabNavigation;
