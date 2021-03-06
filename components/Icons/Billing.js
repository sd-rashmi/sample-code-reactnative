import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Billing.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Billing(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 21.914 21.914">
			<Path
				id="Path_185"
				data-name="Path 185"
				d="M12.88,3.2A11.038,11.038,0,0,0,23.837-7.756,11.04,11.04,0,0,0,12.869-18.713,11.029,11.029,0,0,0,1.923-7.756,11.045,11.045,0,0,0,12.88,3.2Zm0-1.826A9.087,9.087,0,0,1,3.76-7.756a9.078,9.078,0,0,1,9.109-9.131,9.112,9.112,0,0,1,9.142,9.131A9.089,9.089,0,0,1,12.88,1.375Zm-.011-2.986a.494.494,0,0,0,.5-.516v-.752c1.665-.161,2.965-1.128,2.965-2.75,0-1.461-.945-2.342-2.814-2.675l-.15-.032v-2.986A1.808,1.808,0,0,1,14.9-10a.665.665,0,0,0,.655.526.615.615,0,0,0,.634-.634,1.792,1.792,0,0,0-.054-.333,3,3,0,0,0-2.761-2.116V-13.3a.494.494,0,0,0-.5-.516.488.488,0,0,0-.5.516v.741A2.79,2.79,0,0,0,9.571-9.9c0,1.364.924,2.181,2.718,2.6l.075.021V-4.1a1.863,1.863,0,0,1-1.708-1.386.675.675,0,0,0-.666-.537.6.6,0,0,0-.623.634,1.2,1.2,0,0,0,.054.333,3.161,3.161,0,0,0,2.943,2.17v.763A.488.488,0,0,0,12.869-1.611Zm-.5-6.982-.075-.021c-.967-.29-1.4-.709-1.4-1.354s.559-1.2,1.472-1.354Zm1.01,1.579.236.054c1.042.29,1.4.73,1.4,1.407,0,.763-.537,1.332-1.633,1.45Z"
				transform="translate(-1.923 18.713)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Billing;
