import React from 'react';
import { View, StyleSheet } from 'react-native';

function ContainerCol(props) {
	return (
		<View style={{ ...styles.container, ...props.customStyle }}>
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: 'column'
	}
});

export default ContainerCol;
