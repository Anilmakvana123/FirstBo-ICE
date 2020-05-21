import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { ButtonGroup, RowGroup } from '../components/parts';
import { imageSource } from '../config/image.js';


export default class HelpCenter extends React.Component {
    render(){
        return(
            <View><Text>HelpCenter</Text></View>
        )
    }
}