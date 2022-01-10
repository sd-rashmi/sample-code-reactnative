import React from 'react';
import { View, StyleSheet } from 'react-native';

function ContainerRow(props) {
	return (
		<View style={{ ...styles.container, ...props.customStyle }}>
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: 'row'
	}
});

export default ContainerRow;
