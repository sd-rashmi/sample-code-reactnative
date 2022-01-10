import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
CircleCheck.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function CircleCheck(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 57.844 57.844">
			<G transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_192)">
				<Path
					id="Path_192-2"
					data-name="Path 192"
					d="M26.5,43.82A20.07,20.07,0,0,0,46.422,23.9,20.074,20.074,0,0,0,26.48,3.977,20.053,20.053,0,0,0,6.578,23.9,20.082,20.082,0,0,0,26.5,43.82ZM24.293,33.449a2.033,2.033,0,0,1-1.719-.957l-4.9-6.016a2.123,2.123,0,0,1-.469-1.27,1.576,1.576,0,0,1,1.563-1.6,1.69,1.69,0,0,1,1.484.82l3.965,5.117,8.34-13.4a1.7,1.7,0,0,1,1.387-.9,1.566,1.566,0,0,1,1.66,1.5,2.84,2.84,0,0,1-.488,1.289l-9.18,14.453A1.882,1.882,0,0,1,24.293,33.449Z"
					transform="translate(2.42 2.02)"
					fill={props.color}
				/>
			</G>
		</Svg>
	);
}

export default CircleCheck;
