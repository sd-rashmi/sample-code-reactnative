import React from 'react';
import { View, StyleSheet } from 'react-native';

const BottomLine = () => {
	return (
		<View
			style={{
				width: 70,
				height: 2,
				backgroundColor: '#FFF',
				position: 'absolute',
				bottom: 8,
				alignSelf: 'center'
			}}></View>
	);
};

export default BottomLine;
