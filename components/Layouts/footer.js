import React from 'react';
import { View, StyleSheet } from 'react-native';

function Footer() {
	return (
		<>
			<View style={{ ...styles.container }} />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		backgroundColor: '#071D22',
		paddingVertical: 30,
		position: 'relative'
	}
});
export default Footer;
