import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

function HeaderRow(props) {
	return (
		<SafeAreaView style={{ ...styles.container, ...props.customStyle }}>
			<View style={{ ...styles.container, ...props.customStyle }}>
				{props.children}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: 'row'
	}
});

export default HeaderRow;
