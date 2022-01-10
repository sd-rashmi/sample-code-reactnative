import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
ArrowUp.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function ArrowUp(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width} //"34.824"
			height={props.height} //"9.688"
			viewBox="0 0 34.824 9.688">
			<Path
				id="Path_183"
				data-name="Path 183"
				d="M-16.182-13.047a1.849,1.849,0,0,0-1.23,1.66,1.957,1.957,0,0,0,1.973,2.031,5.678,5.678,0,0,0,1.855-.527L.01-15.2,13.584-9.883a5.819,5.819,0,0,0,1.855.527,1.957,1.957,0,0,0,1.973-2.031,1.849,1.849,0,0,0-1.23-1.66L2.861-18.262A8.916,8.916,0,0,0,.01-19.043a8.782,8.782,0,0,0-2.852.781Z"
				transform="translate(17.412 19.043)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default ArrowUp;
