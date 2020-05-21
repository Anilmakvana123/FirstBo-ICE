

import React from 'react';
import { TextInput, Text, Image, View, Button, TouchableOpacity, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RnHash, { CONSTANTS } from "react-native-hash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { imageSource } from '../config/image';
import { actuatedNormalize } from '../config/font';
import { TextButtonGroup, ButtonGroup } from '../components/parts';
import StatusBar from '../components/statusbar';

class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
		}
	}

	signin() {
		/*
		const name = this.state.username;
		const pass = this.state.password;
		const params = '{"passphrase":"' + pass + '","username":"' + name + '","frm_mode":"get_login","uuid":"mobile_token"}'
		RnHash.generateHmac(params,	"501ee1944b81bb7018c7d10316854971", CONSTANTS.HmacAlgorithms.HmacSHA256)
			.then((HMAC) => {
				console.log(HMAC)
				fetch('http://ice.undelivered.ml/ser_login_registration/get_login', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
						, "doicex-signature": HMAC
					},
					body: params
				}).then((response) => response.json())
					.then((json) => {
						if (json.status == 1) {
							let logged = true
							this.state.nav.navigate('Account', { logged })

						}
					})
					.catch((error) => console.error(error))

			})
			.catch(er => console.log(er + 'ni hua'));
			*/
	}

	render() {
		return (
			<KeyboardAwareScrollView
				style={{ backgroundColor: '#FFF', flex: 1 }}
				resetScrollToCoords={{ x: 0, y: 0 }}
				enableAutomaticScroll={true}
				extraHeight={100}
				enableOnAndroid={true}
			>
				<StatusBar bg={'#FFF'} bs={'dark-content'} />
				<View style={{ alignItems:'center', padding: 10 }}>
					<Image style={{ width: wp('30%'), height: hp('8%'), resizeMode:'contain'}} source={imageSource.headlogo} />
					<Image style={{ resizeMode: 'contain', width: wp('70%'), height: hp('25%')  }} source={imageSource.headlogo2} />
				</View>
				<View style={{flex:1, padding: 20}}>
					<TextButtonGroup style={{marginTop: 20}} label={'Email'} />
					<TextButtonGroup style={{ marginTop: 20}} label={'Password'} />
					<Text style={{ fontSize: actuatedNormalize(15), color: '#FB875F', alignSelf:'flex-end', padding:5 }}>Forgot Password</Text>
					<ButtonGroup />					
				</View>
				<View style={{ paddingVertical: 30, flexDirection:'row', justifyContent:'center'  }}>
					<Text style={{ fontSize: actuatedNormalize(16), marginRight: 10, color: '#545254' }}>Not a member?</Text>
					<TouchableOpacity onPress={() => this.state.nav.navigate('Registration')}>
						<Text style={{ fontSize: actuatedNormalize(16),	color: '#3385FF' }}> Register</Text>
					</TouchableOpacity>
				</View>	
			</KeyboardAwareScrollView>
		);
	}
};


export default Login;
