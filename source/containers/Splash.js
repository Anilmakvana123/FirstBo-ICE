import React from 'react'
import { View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import StatusBar from '../components/statusbar';
import { imageSource } from '../config/image';


export default class Splash extends React.Component {
	componentDidMount(){
		setTimeout (() => {
			this.props.navigation.navigate('Tabs');
		}, 2000);		
	}
	render(){
		return (
			<View style={{  flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF'}} >
				<StatusBar bg={'#FFF'} bs={'dark-content'} />
				<Image style={{ width: wp('70%'), height: hp('70%'), resizeMode:'contain'  }} source={imageSource.logo} />
			</View>
		)
	}
}

