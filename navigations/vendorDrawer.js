import React, { useContext } from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppContext } from '@root/App';
import { isTablet } from 'react-native-device-info';
import globalStyle from '@globalStyle';
//Screens
import CustomDrawer from '../screens/Vendor/Drawer';
import QueueTab from '../screens/Vendor/ConsoleTabs/Queue';
import NotificationTab from '../screens/Vendor/ConsoleTabs/Notification';
import ProfileTab from '../screens/Vendor/ConsoleTabs/Profile';
import MarketingTab from '../screens/Vendor/ConsoleTabs/Marketing';
import SmsTab from '../screens/Vendor/ConsoleTabs/SMS';
import BillingTab from '../screens/Vendor/ConsoleTabs/Billing';
import UsageStatisticsTab from '../screens/Vendor/ConsoleTabs/UsageStatistics';
import ChangePassword from '../screens/ChangePassword';
import { connect } from 'react-redux';
// icons
import {
	Icon_Queue,
	Icon_Nofitication,
	Icon_Statistics,
	Icon_Marketing,
	Icon_SMSTopUp,
	Icon_Billing
} from '@components';

const Drawer = createDrawerNavigator();

const vendorDrawer = (props) => {
	const appContext = useContext(AppContext);
	console.log(props.profilepic);
	const ProfileIcon = () => {
		if (props.profilepic === null || props.profilepic === '') {
			return (
				<Image
					source={{
						uri:
							'https://second-chance-kredit.s3.us-east-2.amazonaws.com/NOIMAGEFOUND.png'
					}}
					style={{ width: 45, height: 45 }}
					resizeMode="contain"
				/>
			);
		} else {
			return (
				<Image
					source={{
						uri: props.profilepic
					}}
					style={{
						width: 45,
						height: 45,
						borderRadius: 100 / 2,
						borderWidth: 2,
						borderColor: globalStyle.green
					}}
					resizeMode="cover"
				/>
			);
		}
	};

	return (
		<Drawer.Navigator
			initialRouteName="profile-tab"
			drawerContent={(props) => <CustomDrawer {...props} />}
			drawerContentOptions={{
				activeTintColor: 'white',
				inactiveTintColor: 'black',
				activeBackgroundColor: '#009A74',
				labelStyle: {
					fontSize: isTablet() ? 18 : 15,
					fontFamily: 'SFUIText-Regular',
					fontWeight: 'normal'
				},
				itemStyle: {
					borderRadius: 10
				},
				itemsContainerStyle: {
					marginVertical: 0,
					marginHorizontal: 10
				}
			}}>
			<Drawer.Screen
				name="profile-tab"
				component={ProfileTab}
				options={{
					drawerIcon: () => <ProfileIcon />,
					drawerLabel: 'Profile'
				}}
			/>
			<Drawer.Screen
				name="queue-tab"
				component={QueueTab}
				options={{
					drawerIcon: ({ color }) => (
						<Icon_Queue
							color={color === 'black' ? globalStyle.green : color}
							height="40"
							width="40"
						/>
					),
					drawerLabel: 'Queue'
				}}
			/>
			<Drawer.Screen
				name="notification-tab"
				component={NotificationTab}
				options={{
					drawerIcon: ({ color }) => (
						<Icon_Nofitication
							color={color === 'black' ? globalStyle.green : color}
							height="40"
							width="40"
						/>
					),
					drawerLabel: 'Notification'
				}}
			/>
			<Drawer.Screen
				name="statistics-tab"
				component={UsageStatisticsTab}
				options={{
					drawerIcon: ({ color }) => (
						<Icon_Statistics
							color={color === 'black' ? globalStyle.green : color}
							height="40"
							width="40"
						/>
					),
					drawerLabel: 'Usage Statistics'
				}}
			/>
			<Drawer.Screen
				name="marketing-tab"
				component={MarketingTab}
				options={{
					drawerIcon: ({ color }) => (
						<Icon_Marketing
							color={color === 'black' ? globalStyle.green : color}
							height="40"
							width="40"
						/>
					),
					drawerLabel: 'Marketing'
				}}
			/>
			<Drawer.Screen
				name="sms-tab"
				component={SmsTab}
				options={{
					drawerIcon: ({ color }) => (
						<Icon_SMSTopUp
							color={color === 'black' ? globalStyle.green : color}
							height="40"
							width="40"
						/>
					),
					drawerLabel: 'SMS Top Up'
				}}
			/>
			<Drawer.Screen
				name="billing-tab"
				component={BillingTab}
				options={{
					drawerIcon: ({ color }) => (
						<Icon_Billing
							color={color === 'black' ? globalStyle.green : color}
							height="40"
							width="40"
						/>
					),
					drawerLabel: 'Billing'
				}}
			/>
			<Drawer.Screen
				name="Change Password"
				component={ChangePassword}
				options={{
					drawerIcon: ({ color }) => (
						<Image
							source={require('@asset/password.png')}
							style={{
								width: 45,
								height: 45,
								resizeMode: 'contain',
								tintColor: color === 'black' ? globalStyle.green : color
							}}
							resizeMode="contain"
						/>
					),
					drawerLabel: 'Change Password'
				}}
			/>
		</Drawer.Navigator>
	);
};

const mapStateToProps = (state) => {
	return {
		profilepic: state.VendorProfileReducer.profilepic
	};
};

export default connect(mapStateToProps)(vendorDrawer);
