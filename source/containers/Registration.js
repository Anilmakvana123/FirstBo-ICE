

import React from 'react';
import { TextInput, Text, Image, View, StyleSheet, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RnHash, { CONSTANTS } from "react-native-hash";


import { imageSource } from '../config/image';
import { actuatedNormalize } from '../config/font';
import { TextButtonGroup, ButtonGroup } from '../components/parts';
import StatusBar from '../components/statusbar';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Registration extends React.Component {

	constructor({navigation}) {
		super({navigation})
		this.state = {
			username: '',
			password: '',
			email: '',
			PhoneNo: ''
		}

	}

	Register() {
		/*
		const name = this.state.username;
		const email = this.state.email
		const phone = this.state.PhoneNo
		const pass = this.state.password

		const params = '{"frm_mode":"get_register","email":"' + email + '","passphrase":"' + pass + '","first_name":"' + name + '","middle_name":"S","last_name":"Patil","business_type":"Enterprise","city_id":"1","zone_id":"1","postcode":"422009","mobile":"' + phone + '","gender":"Male"}'
		RnHash.generateHmac(params,
			"501ee1944b81bb7018c7d10316854971", CONSTANTS.HmacAlgorithms.HmacSHA256)
			.then((HMAC) => {
				fetch('http://ice.undelivered.ml/ser_login_registration/get_register', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
						, "doicex-signature": HMAC

					},

					body: params
				}).then((response) => response.json())
					.then((json) => {
						if(json.status==1)
						this.state.nav.navigate('Login')})
					.catch((error) => console.error(error))

			})
			.catch(er => console.log(er));
		*/	
	}

	render() {
		return (
			<KeyboardAwareScrollView
				style={{ backgroundColor: '#FFF', flex: 1 }}
				resetScrollToCoords={{ x: 0, y: 0 }}
				enableAutomaticScroll={true}
				extraHeight={200}
				enableOnAndroid={true}
			>
				<StatusBar bg={'#FFF'} bs={'dark-content'} />
				<Image style={{width: wp('100%'), height: wp('60%'), resizeMode:'contain'}} source={imageSource.headlogo3} />
				<View style={{justifyContent:'center', alignItems:'center', paddingTop:10}}>
					<Text style={{ fontSize: wp('8%'), fontWeight:'600', padding:3 }}>Register</Text>
					<Text style={{ fontSize: wp('4%'), fontWeight: '600', padding:3 }}>Select type of customer</Text>
				</View>
				<View style={{flexDirection:'row', padding: 20, width: '100%', justifyContent:'center', alignItems:'center'}}>
					<TouchableOpacity>
						<View style={{ width: wp('25%'), height: wp('25%'), backgroundColor:'#007ee9', borderRadius: wp('25%'),justifyContent:'center', alignItems: 'center', marginRight: 20}}>
							<Image style={{ width: 60, height: 60}} source={imageSource.active_general_customer} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={{ width: wp('25%'), height: wp('25%'), backgroundColor: '#f2f2f2', borderRadius: wp('25%'), justifyContent: 'center', alignItems: 'center'}}>
							<Image style={{ width: 60, height: 60 }} source={imageSource.enterprise_customer} />
						</View>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1, paddingHorizontal: 20 }}>
					<TextButtonGroup style={{ marginTop: 10 }} label={'Name'} />
					<TextButtonGroup style={{ marginTop: 10 }} label={'Email'} />
					<TextButtonGroup style={{ marginTop: 10 }} label={'Password'} />
					<TextButtonGroup style={{ marginTop: 10 }} label={'Phone Number'} />
					<ButtonGroup />
				</View>
			</KeyboardAwareScrollView>
		);
		
	}
};


export default Registration;
