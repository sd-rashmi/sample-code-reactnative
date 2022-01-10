import React from 'react';
import { View, StyleSheet } from 'react-native';

function Horizontal({ color, customStyles }) {
	return (
		<View
			style={{ ...styles.divider, borderBottomColor: color, ...customStyles }}
		/>
	);
}

const styles = StyleSheet.create({
	divider: {
		borderBottomWidth: 0.7
	}
});

export default Horizontal;
