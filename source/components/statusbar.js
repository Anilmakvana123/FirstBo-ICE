import React from 'react';
import { StatusBar } from 'react-native';

const Bar = (props) => {
    return (
        <StatusBar backgroundColor={props.bg} barStyle={props.bs} />
    )
}

export default Bar;