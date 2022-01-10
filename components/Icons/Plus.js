import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Plus.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Plus(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 13.912 13.912">
			<Path
				id="_"
				data-name="+"
				d="M-6.01-5.047H-.946V.017A.951.951,0,0,0,0,.963.951.951,0,0,0,.946.017V-5.047H6.01a.951.951,0,0,0,.946-.946.951.951,0,0,0-.946-.946H.946V-12A.951.951,0,0,0,0-12.949.951.951,0,0,0-.946-12v5.063H-6.01a.951.951,0,0,0-.946.946A.951.951,0,0,0-6.01-5.047Z"
				transform="translate(6.956 12.949)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Plus;
