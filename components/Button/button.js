import React from 'react';
import { TouchableOpacity } from 'react-native';

const CustomButton = (props) => (
	<TouchableOpacity
		style={{ borderRadius: 5, ...props.customStyle }}
		onPress={props.onClickEvent}>
		{props.children}
	</TouchableOpacity>
);

export default CustomButton;
