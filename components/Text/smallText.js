import React from 'react';
import { Text, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

// props validation
SmallText.propTypes = {
	text: propTypes.string,
	customStyle: propTypes.object
};

function SmallText({ customStyle, text, numberOfLines }) {
	return (
		<Text
			style={{ ...styles.text, ...customStyle }}
			numberOfLines={numberOfLines}>
			{' '}
			{text}{' '}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: { fontFamily: 'SFUIText-Regular' }
});

export default SmallText;
