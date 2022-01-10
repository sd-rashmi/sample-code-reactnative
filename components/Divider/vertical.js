import React from 'react';
import { View, StyleSheet } from 'react-native';

function Vertical({ color, customStyle }) {
	return (
		<View
			style={{ ...styles.divider, borderRightColor: color, ...customStyle }}
		/>
	);
}

const styles = StyleSheet.create({
	divider: {
		borderRightWidth: 1
	}
});

export default Vertical;
