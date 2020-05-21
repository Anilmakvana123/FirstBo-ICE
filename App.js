 

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './source/containers/Splash';
import Login from './source/containers/Login';
import Registration from './source/containers/Registration';
import Tabs from './source/containers/TabNavigation';
import Settings from './source/containers/Settings';
import Aboutus from './source/containers/Aboutus';
import HelpCenter from './source/containers/HelpCenter';


const Stack = createStackNavigator();
const StackNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Splash" component={Splash} />
				<Stack.Screen name="Login" component={Login} />								
				<Stack.Screen name="Registration" component={Registration} />
				<Stack.Screen name="Tabs" component={Tabs} />								
				<Stack.Screen name="Settings" component={Settings} />								
				<Stack.Screen name="Aboutus" component={Aboutus} />								
				<Stack.Screen name="HelpCenter" component={HelpCenter} />								
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default StackNavigation;
