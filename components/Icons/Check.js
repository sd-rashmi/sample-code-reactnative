import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Check.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Check(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.height}
			height={props.width}
			viewBox="0 0 15.423 14.833">
			<Path
				id="Symbol"
				d="M-1.685,1.552A1.537,1.537,0,0,0-.332.863L7.4-10.916a1.737,1.737,0,0,0,.315-.963,1.386,1.386,0,0,0-1.444-1.4A1.365,1.365,0,0,0,5-12.534L-1.718-1.942l-3.4-4.175a1.37,1.37,0,0,0-1.146-.548A1.383,1.383,0,0,0-7.711-5.254a1.466,1.466,0,0,0,.423,1.038L-3,.93A1.616,1.616,0,0,0-1.685,1.552Z"
				transform="translate(7.711 13.281)"
				fill="#009a74"
			/>
		</Svg>
	);
}

export default Check;
