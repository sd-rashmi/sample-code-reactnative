import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
User.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function User(props) {
	return (
		<Svg
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={props.width}
			height={props.height}
			stroke={props.color}>
			<Path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
			/>
		</Svg>
	);
}

export default User;
