import React from 'react';
import { View, StyleSheet } from 'react-native';

function Circle({ customStyle }) {
	return <View style={{ ...styles.circle, ...customStyle }} />;
}

const styles = StyleSheet.create({
	circle: {
		borderRadius: 100 / 2
	}
});

export default Circle;
