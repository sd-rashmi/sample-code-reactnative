import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
ArrowLeft.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function ArrowLeft(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 11.965 20.789">
			<Path
				id="Chevron"
				d="M1.441-8.461a1.4,1.4,0,0,0,.48,1.066l9.117,8.93a1.335,1.335,0,0,0,.973.4A1.383,1.383,0,0,0,13.406.539a1.431,1.431,0,0,0-.422-1l-8.215-8,8.215-8a1.453,1.453,0,0,0,.422-1,1.383,1.383,0,0,0-1.395-1.395,1.335,1.335,0,0,0-.973.4L1.922-9.539A1.437,1.437,0,0,0,1.441-8.461Z"
				transform="translate(-1.441 18.855)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default ArrowLeft;
