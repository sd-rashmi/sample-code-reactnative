import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screen
import DashboardScreen from '../screens/Customer/Dashboard';
import TicketScreen from '../screens/Customer/Ticket';
import ProfileScreen from '../screens/Customer/Profile';

const Stack = createStackNavigator();

const screenOptionStyle = {
	headerShown: false
};

const customerStack = () => {
	return (
		<Stack.Navigator
			screenOptions={screenOptionStyle}
			initialRouteName="dashboard"
			headerMode="none">
			<Stack.Screen name="dashboard" component={DashboardScreen} />
			<Stack.Screen name="ticket" component={TicketScreen} />
			<Stack.Screen name="profile" component={ProfileScreen} />
		</Stack.Navigator>
	);
};

export default customerStack;
