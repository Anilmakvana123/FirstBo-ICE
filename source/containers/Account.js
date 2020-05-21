import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { ButtonGroup, RowGroup } from '../components/parts';
import { imageSource } from '../config/image.js';


export default class Account extends React.Component {
	moveToLogin = () => {
		this.props.navigation.navigate('Login');
	}
	moveToRegister = () => {
		this.props.navigation.navigate('Registration');
	}
	render() {	
		return (
			<View style={{ flex:1 , backgroundColor:'#FFF'}}>
				<Image style={{ width: wp('100%'), height: wp('60%'), resizeMode: 'contain' }} source={imageSource.headlogo3} />
				<View style={{ position: 'absolute', top: wp('50%'), backgroundColor: '#FFF', left: 3, right: 3, borderTopLeftRadius :20, borderTopRightRadius:20, overflow:'hidden',padding:10}}>					
					<View style={{ flexDirection: "row", alignItems:'center', justifyContent:'flex-end' }}>
						<ButtonGroup style={{ width: 100, marginHorizontal: 10 }} onClick={this.moveToLogin.bind(this)} buttonTitle={'Login'}/>
						<ButtonGroup style={{ width: 100, backgroundColor: '#FFF', borderColor: '#007ee9', borderWidth: 1 }} textStyle={{ color: '#007ee9' }} onClick={this.moveToRegister.bind(this)} buttonTitle={'Signup'}/>
					</View>
					<View>
						<RowGroup title={'Settings'} icon={imageSource.icon_setting}/>
						<RowGroup title={'Help Center'} icon={imageSource.icon_helpcenter}/>
						<RowGroup title={'About us'} icon={imageSource.icon_aboutus}/>
					</View>
				</View>
			</View>
		)
	}	
}
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
	LoginButton: {
		backgroundColor: '#0076F7',
		width: width * 0.5,
		height: height * 0.05,
		borderRadius: 10
	}, SignUpButton: {

		backgroundColor: 'white',
		width: width * 0.5,
		height: height * 0.05,
		borderWidth: 1,
		borderColor: '#0076F7',
		borderRadius: 10
	},

})

