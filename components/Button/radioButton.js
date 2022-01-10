import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import globalStyle from '@globalStyle';

function RadioButton(props) {
	return (
		<View style={styles.radioButtonContainer}>
			<TouchableOpacity onPress={props.event} style={styles.radioButton}>
				{props.selected ? <View style={styles.radioButtonIcon} /> : null}
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	radioButtonContainer: {
		flexDirection: 'row'
	},
	radioButton: {
		height: 30,
		width: 30,
		backgroundColor: '#F8F8F8',
		borderRadius: 100 / 2,
		borderWidth: 1,
		borderColor: '#E6E6E6',
		alignItems: 'center',
		justifyContent: 'center'
	},
	radioButtonIcon: {
		height: 20,
		width: 20,
		borderRadius: 100 / 2,
		backgroundColor: globalStyle.green
	},
	radioButtonText: {
		fontSize: 16,
		marginLeft: 16
	}
});

export default RadioButton;
