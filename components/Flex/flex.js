import React from 'react';
import { View, StyleSheet } from 'react-native';

function Flex(props) {
	return (
		<View style={{ ...styles.container, ...props.customStyle }}>
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default Flex;
