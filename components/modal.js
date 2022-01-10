import React from 'react';
import { Modal } from 'react-native';

function CustomModal(props) {
	return (
		<Modal
			animationType={props.animation}
			transparent={true}
			visible={props.visible}>
			{props.children}
		</Modal>
	);
}

export default CustomModal;
