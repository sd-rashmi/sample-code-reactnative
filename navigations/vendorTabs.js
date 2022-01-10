import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import { SOCKET_URL } from '@env';
import VendorQueueScreen from '../screens/Vendor/Queue';
import VendorDrawerContent from './vendorDrawer';

// icons
import { Icon_GroupPeople, Icon_Settings } from '@components';
import { isTablet } from 'react-native-device-info';
import globalStyle from '@globalStyle';

const Tab = createBottomTabNavigator();

const VendorTabs = () => {
	const createUserChannel = async () => {
		try {
			await axios.post(`${SOCKET_URL}/channels`, {
				channel_name: 'test-vendor'
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		createUserChannel();
	}, []);

	return (
		<Tab.Navigator
			initialRouteName="Queue"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					let icon;
					switch (route.name) {
						case 'Vendor Console':
							icon = <Icon_Settings height="23" width="23" color={color} />;
							break;
						case 'Queue':
							icon = <Icon_GroupPeople height="40" width="30" color={color} />;
					}

					return <View>{icon}</View>;
				}
			})}
			tabBarOptions={{
				keyboardHidesTabBar: true,
				activeTintColor: globalStyle.green,
				inactiveTintColor: globalStyle.gray,
				labelStyle: {
					fontSize: isTablet() ? 18 : 15,
					alignSelf: 'center',
					fontFamily: 'SFUIText-Regular'
				},
				labelPosition: 'beside-icon'
			}}>
			<Tab.Screen name="Queue" component={VendorQueueScreen} />
			<Tab.Screen name="Vendor Console" component={VendorDrawerContent} />
		</Tab.Navigator>
	);
};

export default VendorTabs;
