import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Statistics.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Statistics(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 21.914 21.914">
			<Path
				id="Path_188"
				data-name="Path 188"
				d="M12.88,3.2A11.038,11.038,0,0,0,23.837-7.756,11.04,11.04,0,0,0,12.869-18.713,11.029,11.029,0,0,0,1.923-7.756,11.045,11.045,0,0,0,12.88,3.2Zm0-1.826A9.087,9.087,0,0,1,3.76-7.756a9.076,9.076,0,0,1,8.519-9.109v9.26a.776.776,0,0,0,.258.623L18.831-.816A9.114,9.114,0,0,1,12.88,1.375ZM13.718-8.69v-8.164A9.119,9.119,0,0,1,20.6-12.644Zm.6,1.321,6.95-4a9.147,9.147,0,0,1,.741,3.609,9.066,9.066,0,0,1-2.127,5.887Z"
				transform="translate(-1.923 18.713)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Statistics;
