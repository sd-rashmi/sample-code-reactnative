import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
ArrowDown.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function ArrowDown(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 34.824 9.688">
			<Path
				id="Path_184"
				data-name="Path 184"
				d="M-16.182-15.742l13.34,5.215A8.782,8.782,0,0,0,.01-9.746a8.916,8.916,0,0,0,2.852-.781l13.32-5.215a1.853,1.853,0,0,0,1.23-1.68,1.941,1.941,0,0,0-1.973-2.012,6.35,6.35,0,0,0-1.855.508L.01-13.594l-13.594-5.332a6.186,6.186,0,0,0-1.855-.508,1.941,1.941,0,0,0-1.973,2.012A1.853,1.853,0,0,0-16.182-15.742Z"
				transform="translate(17.412 19.434)"
				fill={props.color}
				opacity="0.746"
			/>
		</Svg>
	);
}

export default ArrowDown;
