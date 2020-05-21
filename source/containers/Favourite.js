import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import PopularAdd from './PopularAdd.js'
import { ScrollView } from 'react-native-gesture-handler';

const Header = (props) => {
    return (
        <View style={{justifyContent:'center',alignItems:'center',paddingVertical: 10, marginTop: 10}}>
            <Text style={{ fontSize: wp('6%'), fontWeight:'bold' }}>{props.title}</Text>
        </View>
    )
}


const Favourite = () => {
    return (
        <View style={{flex:1, backgroundColor:'#FBFBFB'}}>
            <Header title={'Favorite'}/>
            <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: 10 }}>
                <PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }} />
                <PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }} />
                <PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }} />
                <PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }} />
                <PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }} />
                <PopularAdd style={{ width: (Dimensions.get('window').width - 40) / 2 }} />
            </ScrollView>	
        </View>
    )
}

export default Favourite
