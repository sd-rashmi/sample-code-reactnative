import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';

function LoadingIndicator(props) {
	return (
		<ActivityIndicator
			size={Platform.OS === 'android' ? 'large' : 'small'}
			color={props.color}
			hidesWhenStopped={true}
		/>
	);
}

export default LoadingIndicator;
