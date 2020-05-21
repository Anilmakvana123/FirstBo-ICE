 

import React from 'react';
import {Dimensions} from 'react-native';
import {TextInput,Text,
 Image,View,StyleSheet, Button

} from 'react-native';


import RnHash,{ CONSTANTS } from "react-native-hash";
 
 class Login extends React.Component{
   
   constructor(){
     super()
this.state={
username:'',
password:'',
email:'',
PhoneNo:''
,
              
     width :Dimensions.get('window').width,
       height: Dimensions.get('window').height
    

}

   }
   
  signin(){
                      const name=this.state.username;
                   const email=this.state.email
                   const phone=this.state.PhoneNo
                      const pass=this.state.password

                      const params='{"frm_mode":"get_register","email":"'+email+'","passphrase":"'+pass+'","first_name":"'+name+'","middle_name":"S","last_name":"Patil","business_type":"Enterprise","city_id":"1","zone_id":"1","postcode":"422009","mobile":"'+phone+'","gender":"Male"}'
                        RnHash.generateHmac(params, 
                      "501ee1944b81bb7018c7d10316854971", CONSTANTS.HmacAlgorithms.HmacSHA256)
                      .then((HMAC) =>{ 
                        fetch('http://ice.undelivered.ml/ser_login_registration/get_register', {
                          method: 'POST',
                          headers:{
                            Accept: 'application/json',
                        'Content-Type': 'application/json'
                      ,"doicex-signature" : HMAC
                      
                    },
                        
                          body: params
                        }).then((response) => response.json())
                        .then((json) => console.log(json))
                        .catch((error) => console.error(error))
                      
                      })
                      .catch(er => console.log(er));
                     
  }
  
  render(){
   
  return ( 
    <View style={{flex:1 ,alignItems:"center"}}>
     <Image  style={{ marginTop:this.state.height*0.05 ,width: this.state.width*0.30, height: this.state.height*0.10 ,resizeMode:"contain"}}
  source={require("../Images/Header.png")} />
  <Image  style={{ resizeMode:'contain'  ,width: this.state.width*0.5, height:this.state.height*0.3 }}
  source={require("../Images/Icon.png")}/>

<Text style={{fontSize:this.state.height*0.017  ,marginRight:this.state.width*0.82,marginVertical:this.state.height*0.01} }>Name</Text>
<TextInput
      style={{ borderRadius:10 ,width:this.state.width*0.9 , height:this.state.height*0.05, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => {
        
        this.setState({
username:text

        })
      
      }}
      value={this.state.username}
     
    />
    <Text style={{fontSize:this.state.height*0.017  ,marginRight:this.state.width*0.82,marginVertical:this.state.height*0.01} }>Email</Text>
<TextInput
      style={{ borderRadius:10 ,width:this.state.width*0.9 , height:this.state.height*0.05, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => {
        
        this.setState({
email:text

        })
      
      }}
      value={this.state.email}
     
    />

    <Text style={{fontSize:this.state.height*0.017 ,marginRight:this.state.width*0.78,marginVertical:this.state.height*0.01} }>Password</Text>
    <TextInput
      style={{ borderRadius:10 ,width:this.state.width*0.9 , height:this.state.height*0.05, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => {
        
           
        this.setState({
          password:text
          
                  })}}
                value={this.state.password}
             
     
    />
    <Text style={{fontSize:this.state.height*0.017  ,marginRight:this.state.width*0.82,marginVertical:this.state.height*0.01} }>Phone No</Text>
<TextInput
      style={{ borderRadius:10 ,width:this.state.width*0.9 , height:this.state.height*0.05, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => {
        
        this.setState({
phone:text

        })
      
      }}
      value={this.state.phone}
     
    />

    <Text style={{ fontSize:this.state.height*0.017 ,marginLeft:this.state.width*0.67 ,marginVertical:this.state.height*0.01,color:'#FB875F'} }>Forgot Password</Text>
   <Button

onPress={this.signin.bind(this)}
             titleStyle={{fontSize:this.state.height*0.017 }}
             buttonStyle={{
             backgroundColor: '#3385FF',
             width:this.state.width*0.9,
             height:this.state.height*0.06,
             borderRadius: 10
             }}
          
             title="SignIn"
/>
            <Text   style={{
              fontSize:this.state.height*0.017,
              alignSelf:"center",marginTop:this.state.height*0.1,color:'#ACABAB'} }>Not a member?<Text  style={{
                color:'#3385FF'} }> Register</Text></Text>
             
    
    </View>
  );}
};

 
export default Login;
