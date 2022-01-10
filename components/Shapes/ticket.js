import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	ImageBackground,
	Dimensions
} from 'react-native';
import { Flex, Circle } from '@components';
import globalStyle from '@globalStyle';
import propTypes from 'prop-types';
const WIDTH = Dimensions.get('window').width;
// props validation
Ticket.propTypes = {
	onPressEvent: propTypes.func,
	ticketStyle: propTypes.object.isRequired,
	isReady: propTypes.bool
};

function Ticket({ ticketStyle, isReady, children }) {
	return (
		// <ImageBackground
		// 	source={require('../../assets/gue.png')}
		// 	// source={{
		// 	// 	uri:
		// 	// 		'https://i.pinimg.com/originals/a7/d0/6a/a7d06a70b717fe94b14bf639ae20e8f7.jpg'
		// 	// }}
		// 	style={{ flex: 1 }}
		// 	imageStyle={{ width: WIDTH / 2, height: 'auto' }}
		// 	resizeMode="cover">
		<View
			style={{
				...styles.container,
				...ticketStyle.ticket,
				backgroundColor: isReady === null ? globalStyle.transparent : 'white'
			}}>
			<Flex
				customStyle={{
					...styles.childContainer,
					backgroundColor: isReady === null ? globalStyle.transparent : 'white',
					borderColor:
						isReady === null
							? globalStyle.transparent
							: isReady
							? globalStyle.green
							: globalStyle.darkGreen
				}}>
				<Circle
					customStyle={{
						...ticketStyle.circle,
						position: 'absolute'
					}}
				/>

				{children}
			</Flex>
		</View>
		// </ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		flex: 1
	},
	childContainer: {
		alignSelf: 'center',
		margin: 10,
		borderWidth: 1,
		width: '90%',
		height: '90%',
		overflow: 'visible'
	}
});

export default Ticket;
