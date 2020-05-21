import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { actuatedNormalize } from '../config/font';
import { imageSource } from '../config/image';

export const TextButtonGroup = (props) => {
    return (
        <View style={props.style}>
            <Text style={{ fontSize: actuatedNormalize(15), paddingBottom: 5, color:'#4f4f4f' }}>{ props.label }</Text>
            <TextInput style={{ borderRadius: 5, borderColor: '#EAEAEA', borderWidth: 1 }} onChangeText={text => {  }} value={props.value} />
        </View>
    )
}

export const ButtonGroup = (props) => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={[{ width: '100%', backgroundColor:'#007ee9', padding: 15, marginVertical: 20, borderRadius: 5 }, props.style]}>
                <Text style={[{ textAlign: 'center', color: '#FFF', fontSize: actuatedNormalize(16) }, props.textStyle]}>{props.buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const RowGroup = (props) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, alignItems:'center' }}>
            <Image style={{ resizeMode: 'contain', width: 35, height: 35 }} source={props.icon} />
            <Text style={{ fontSize: actuatedNormalize(16), fontFamily: 'Avenir', flex:1, marginLeft: 10 }}>{props.title}</Text>
            <Image style={{ resizeMode: 'contain', width: 15, height: 15 }} source={imageSource.icon_right} />
        </TouchableOpacity>
    )
}
