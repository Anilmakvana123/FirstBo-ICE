import React from 'react'
import {
   StyleSheet, Text, View, Image, TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import { imageSource } from '../config/image';
class Categories extends React.Component {
   render() {     
      return (
         <View style={styles.Add}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems:'center',padding: 15 }}>
               <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: hp('2%'), fontFamily: ' Avenir' }}>Product</Text>
                  <Text style={{ fontSize: hp('2%'), fontFamily: ' Avenir' }}>ICE 1.5 KG</Text>
               </View>
               <Image style={{ width: wp('13%'), height: wp('20%') }} source={imageSource.headlogo3}  />
            </View>
         </View>
      )      
   }   
}
const styles = StyleSheet.create({
   Add: {
      backgroundColor: 'white',
      borderRadius: 10,
      width: wp('45%'),
      marginVertical: 10,
      overflow: "hidden",
   },
   button: {

      backgroundColor: '#70AD47',
      width: 60,
      borderRadius: 10
   },

})

export default Categories
