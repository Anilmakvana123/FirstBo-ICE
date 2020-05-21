import React from 'react'
import {
    StyleSheet, Text, View, Image, TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import Normalize from './Normalize.js';


class Add extends React.Component {


    render() {
        return null;
        /*
        return (
            <View
                style={styles.Add}>
                <View style={{ flexDirection: "row", width: '100%', height: '65%', justifyContent: "center" }}>
                    <Image style={{ width: '50%', height: '80%', alignSelf: "flex-end" }}
                        source={require('../Images/bg_boice.png')}
                    />
                    <View style={{ height: '5%', width: '5%', flexDirection: "column", justifyContent: "flex-start" }}>
                        <TouchableOpacity style={{}} activeOpacity={0.5}>

                            <Image
                                source={require('../Images/icon2.png')}
                                style={{ resizeMode: "contain", alignSelf: "flex-start", marginLeft: Dimensions.get('window').width * 0.02 }}
                            />

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "column", alignItems: "flex-start", width: '100%', height: '35%' }}>
                    <Text style={{ fontSize: Dimensions.get('window').height * 0.017, fontFamily: ' Avenir', fontWeight: "bold", marginLeft: Dimensions.get('window').width * 0.01 }}>
                        Product</Text>

                    <Text style={{ fontSize: Dimensions.get('window').height * 0.017, fontFamily: ' Avenir', fontWeight: '500', marginLeft: Dimensions.get('window').width * 0.01 }}>
                        Size</Text>

                    <Text style={{
                        fontSize: Dimensions.get('window').height * 0.017, fontFamily: ' Avenir', color: 'orange', fontWeight: "bold",
                        marginLeft: Dimensions.get('window').width * 0.01,
                        marginBottom: Dimensions.get('window').height * 0.01
                    }}>
                        Price LAK</Text>
                </View>
            </View>
        )
        */
    }



}
const styles = StyleSheet.create({
    Add: {
        elevation: 2,

        marginVertical: 5,
        flexDirection: "column",
        height: Dimensions.get('window').height * 0.30,
        backgroundColor: 'white',
        alignItems: "flex-end",
        borderRadius: 10,

        width: Dimensions.get('window').width * 0.45,



    },

})

export default Add
