import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Notification.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Notification(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.width}
			viewBox="0 0 21.785 21.699">
			<Path
				id="Path_189"
				data-name="Path 189"
				d="M20.808-12.128a3.748,3.748,0,0,0,3.717-3.728,3.748,3.748,0,0,0-3.717-3.728,3.743,3.743,0,0,0-3.728,3.728A3.743,3.743,0,0,0,20.808-12.128ZM2.739-3.609C2.739-1.772,2.9-.247,4,.849S6.639,2.116,8.465,2.116h8.347c1.837,0,3.384-.172,4.479-1.268s1.257-2.621,1.257-4.458v-7.315a4.2,4.2,0,0,1-1.525.226,1.343,1.343,0,0,1-.2.032v7.348a4.151,4.151,0,0,1-.795,2.911,4.2,4.2,0,0,1-2.911.795H8.175A4.25,4.25,0,0,1,5.253-.408a4.2,4.2,0,0,1-.784-2.911v-8.819a4.228,4.228,0,0,1,.784-2.933,4.251,4.251,0,0,1,2.954-.795h7.412a1.19,1.19,0,0,1,.021-.2,4.2,4.2,0,0,1,.226-1.525H8.443c-1.8,0-3.352.172-4.447,1.268S2.739-13.7,2.739-11.9Z"
				transform="translate(-2.739 19.583)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Notification;
