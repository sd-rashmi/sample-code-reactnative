import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Queue.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Queue(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width} //"19.035"
			height={props.height} //"25.137"
			viewBox="0 0 19.035 25.137">
			<Path
				id="Path_190"
				data-name="Path 190"
				d="M6.929-18.971h10.42a1.374,1.374,0,0,0-1.568-1.386H8.5A1.374,1.374,0,0,0,6.929-18.971ZM5.017-16H19.164a1.547,1.547,0,0,0-1.7-1.515H6.725A1.55,1.55,0,0,0,5.017-16ZM6.112,4.78H18.724c1.923,0,3.051-1.117,3.051-3.33V-10.925c0-2.213-1.139-3.33-3.373-3.33H6.112q-3.368,0-3.373,3.33V1.45C2.739,3.663,3.867,4.78,6.112,4.78Zm.021-1.729a1.507,1.507,0,0,1-1.665-1.7V-10.839a1.5,1.5,0,0,1,1.665-1.687H18.369a1.511,1.511,0,0,1,1.676,1.687V1.354c0,1.117-.612,1.7-1.354,1.7Z"
				transform="translate(-2.739 20.356)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Queue;
