import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
ArrowRight.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function ArrowRight(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.width}
			viewBox="0 0 7.506 12.578">
			<Path
				id="Symbol"
				d="M10.213-4.936a1.257,1.257,0,0,0-.424-.937L4.642-10.9a1.078,1.078,0,0,0-.786-.321A1.148,1.148,0,0,0,2.707-10.09a1.174,1.174,0,0,0,.369.841L7.533-4.942,3.076-.622a1.151,1.151,0,0,0-.369.841A1.148,1.148,0,0,0,3.855,1.354a1.062,1.062,0,0,0,.786-.321L9.789-4A1.244,1.244,0,0,0,10.213-4.936Z"
				transform="translate(-2.707 11.225)"
				fill="rgba(60,60,67,0.3)"
			/>
		</Svg>
	);
}

export default ArrowRight;
