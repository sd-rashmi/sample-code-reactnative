import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
CircleArrowDown.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function CircleArrowDown(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width={props.width}
			height={props.height}>
			<Path
				d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M370.208,316.875
			L263.542,423.542c-4.167,4.167-10.917,4.167-15.083,0L141.792,316.875c-3.042-3.052-3.958-7.635-2.313-11.625
			c1.646-3.99,5.542-6.583,9.854-6.583h32c2.833,0,5.542,1.125,7.542,3.125l45.792,45.792V96c0-5.896,4.771-10.667,10.667-10.667
			h21.333c5.896,0,10.667,4.771,10.667,10.667v251.583l45.792-45.792c2-2,4.708-3.125,7.542-3.125h32
			c4.313,0,8.208,2.594,9.854,6.583C374.167,309.24,373.25,313.823,370.208,316.875z"
				fill={props.color}
			/>
		</Svg>
	);
}

export default CircleArrowDown;
