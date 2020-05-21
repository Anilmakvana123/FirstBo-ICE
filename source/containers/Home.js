import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import PopularAdd from './PopularAdd.js'
import Categories from './Categories.js'
import { imageSource } from '../config/image.js';
import { TextInput } from 'react-native-gesture-handler';
const SearchBox = () => {
	return(
		<View style={{borderRadius:10, borderWidth: 0.5, borderColor: '#EAEAEA', paddingHorizontal:10, backgroundColor:'#FFF', position: 'absolute', bottom: -20, left: 15, right: 15, flexDirection:'row', alignItems:'center' }}>
			<Image source={imageSource.icon_search} style={{width: 20, height: 20}}/>	
			<TextInput  />
		</View>
	)
}
	
class Home extends React.Component {
	constructor() {
		super()
		this.state = {
			enableScrollViewScroll: true,
			height:100,width:100
		};
	}
	componentDidMount(){
		/*
		this.setState({
			width :Dimensions.get('window').width,
			height: Dimensions.get('window').height}
		)
		*/	
	}
	onEnableScroll = (value) => {
		this.setState({
			enableScrollViewScroll: value,
		});
	};
	render() {
		return (
			<View style={{ flex: 1, backgroundColor:'#fbfbfb' }}>
				<ScrollView style={{height:'65%'}}	scrollEnabled={this.state.enableScrollViewScroll}>
					<View style={{ position: 'relative', marginBottom: 30}}>
						<Image style={{ width: wp('100%'), height: wp('60%'), resizeMode: 'contain' }} source={imageSource.headlogo3} />
						<SearchBox />
					</View>
					<View style={{  flexDirection: "row" ,justifyContent:"space-between", padding:15}}>
						<Text style={{ fontSize: hp('2.5%'), fontFamily: ' Avenir', fontWeight: "bold" }}>Most Popular</Text>
			 			<View style={{flexDirection:"row" }}>
					 		<Text style={{ fontSize:hp('2%'), fontFamily: 'Avenir' ,justifyContent:"center" }}>See all</Text>
							<Image style={{ marginLeft:5, resizeMode: 'contain', width: 15, height:15 }} source={imageSource.icon_right} />
						</View>
					</View>
					<ScrollView horizontal={true}>
						<PopularAdd />
						<PopularAdd />
						<PopularAdd />
					</ScrollView>
					<View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15 }}>
						<Text style={{ fontSize: hp('2.5%'), fontFamily: ' Avenir', fontWeight: "bold" }}>Categories</Text>
						<View style={{ flexDirection: "row" }}>
							<Text style={{ fontSize: hp('2%'), fontFamily: 'Avenir', justifyContent: "center" }}>See all</Text>
							<Image style={{ marginLeft: 5, resizeMode: 'contain', width: 15, height: 15 }} source={imageSource.icon_right} />
						</View>
					</View>
					<View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around',padding:10}}>
						<Categories/>
						<Categories/>
						<Categories/>
						<Categories/>
						<Categories/>
					</View>
					<View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15 }}>
						<Text style={{ fontSize: hp('2.5%'), fontFamily: ' Avenir', fontWeight: "bold" }}>All Products</Text>
					</View>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: 10 }}>
						<PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }} />
						<PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }}/>
						<PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }}/>
						<PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }}/>
						<PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }}/>
						<PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }}/>
					</View>					
				</ScrollView>
			</View>
		)	
	}	
}

const styles = StyleSheet.create({

});
export default Home
