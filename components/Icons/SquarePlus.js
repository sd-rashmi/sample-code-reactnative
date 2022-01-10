import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
SquarePlus.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function SquarePlus(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 52.383 52.354">
			<Path
				id="Path_191"
				data-name="Path 191"
				d="M22.91-44.033c-2.725-2.7-6.475-3.281-11.807-3.281H-11.309c-5.1,0-8.877.586-11.6,3.311-2.7,2.7-3.281,6.445-3.281,11.572V-10.02c0,5.332.557,9.082,3.252,11.777,2.754,2.7,6.5,3.281,11.807,3.281H11.1c5.332,0,9.111-.586,11.807-3.281,2.725-2.725,3.281-6.445,3.281-11.777V-32.256C26.191-37.588,25.635-41.338,22.91-44.033Zm-36.68,22.91a1.907,1.907,0,0,1,1.992-1.992h9.844v-9.844a1.87,1.87,0,0,1,1.9-1.992,1.907,1.907,0,0,1,1.992,1.992v9.844h9.873A1.9,1.9,0,0,1,13.8-21.123a1.9,1.9,0,0,1-1.963,1.9H1.963v9.873A1.9,1.9,0,0,1-.029-7.383a1.879,1.879,0,0,1-1.9-1.963v-9.873h-9.844A1.9,1.9,0,0,1-13.77-21.123Z"
				transform="translate(26.191 47.314)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default SquarePlus;
