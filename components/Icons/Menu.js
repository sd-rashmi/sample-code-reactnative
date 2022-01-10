import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Menu.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Menu(props) {
	return (
		<Svg
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={props.width}
			height={props.height}>
			<Path
				d="M4 6H20M4 12H20M4 18H11"
				stroke={props.color}
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</Svg>
	);
}

export default Menu;
