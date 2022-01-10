import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
FilteredNotification.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function FilteredNotification(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 20.234 20.234">
			<Path
				id="Path_181"
				data-name="Path 181"
				d="M19.443,7.926a3.314,3.314,0,0,0,3.281-3.281,3.286,3.286,0,1,0-6.572,0A3.316,3.316,0,0,0,19.443,7.926ZM8.613,21.588h7c2.344,0,3.682-.391,4.707-1.426s1.416-2.324,1.416-4.707v-6.2a5.081,5.081,0,0,1-2.3.557,5.193,5.193,0,0,1-5.166-5.166,5.081,5.081,0,0,1,.557-2.3H8.613c-2.344,0-3.672.391-4.707,1.426S2.49,6.09,2.49,8.463v6.992c0,2.383.381,3.682,1.416,4.707S6.27,21.588,8.613,21.588Z"
				transform="translate(-2.49 -1.354)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default FilteredNotification;
