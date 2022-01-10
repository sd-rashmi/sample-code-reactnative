import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

function HeaderCol(props) {
	return (
		<SafeAreaView style={{ ...styles.container, ...props.customStyle }}>
			{props.children}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: 'column'
	}
});

export default HeaderCol;
