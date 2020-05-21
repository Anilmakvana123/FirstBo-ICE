import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { imageSource } from '../config/image.js';

class PopularAdd extends React.Component {
   render() {

		return (
			<View style={[styles.Add, this.props.style]}>
				<View style={{ position:'absolute', right: 8, top: 8 }}>
					<TouchableOpacity style={{}}>
						<Image source={imageSource.icon_fav_mark} style={{ resizeMode: "contain", width: wp('7%'), height: wp('7%') }} />
					</TouchableOpacity>
				</View>			
				<View style={{ marginTop: hp('3.5%') }}>
					<Image style={{ width: wp('25%'), height: wp('30%'), alignSelf: "center" }} source={imageSource.headlogo3} />					
				</View>
				<View style={{ paddingVertical: 10 }}>
					<Text style={{ fontSize: hp('2.5%'), fontFamily: 'Avenir', fontWeight: "bold", padding:3 }}>Plastic Cooler</Text>
					<Text style={{ fontSize: hp('2%'), fontFamily: 'Avenir', fontWeight: '500', padding: 3  }}>80 L</Text>
					<Text style={{ fontSize: hp('2.5%'), fontFamily: 'Avenir', color: 'orange', fontWeight: "bold", padding: 3 }}>12,000 LAK</Text>
				</View>
			</View>
		)      
   }



}
const styles = StyleSheet.create({
   Add: {
		elevation: 2,
		backgroundColor: '#FFF',
		borderRadius: 10,
		width: Dimensions.get('window').width/2.4,
		margin: 5,
		padding:10
   },
})

export default PopularAdd
