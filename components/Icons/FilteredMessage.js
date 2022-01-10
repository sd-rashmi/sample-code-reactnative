import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
FilteredMessage.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function FilteredMessage(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 22.148 22.48">
			<Path
				id="Path_180"
				data-name="Path 180"
				d="M8.545,23.678a2.249,2.249,0,0,0,1.592-.723L14.053,19.6h5.439a4.885,4.885,0,0,0,5.146-5.146V6.344A4.885,4.885,0,0,0,19.492,1.2H7.637A4.885,4.885,0,0,0,2.49,6.344v8.105A4.953,4.953,0,0,0,7.256,19.6h.068v2.764A1.177,1.177,0,0,0,8.545,23.678Z"
				transform="translate(-2.49 -1.197)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default FilteredMessage;
