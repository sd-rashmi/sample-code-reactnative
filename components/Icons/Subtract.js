import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Subtract.propTypes = {
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Subtract(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height="1.893"
			viewBox="0 0 13.896 1.893">
			<Path
				id="_-"
				data-name="-"
				d="M-6.01-5.039H6.01a.95.95,0,0,0,.938-.946.955.955,0,0,0-.938-.946H-6.01a.966.966,0,0,0-.938.946A.961.961,0,0,0-6.01-5.039Z"
				transform="translate(6.948 6.931)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Subtract;
