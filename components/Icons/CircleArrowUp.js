import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
CircleArrowUp.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function CircleArrowUp(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width={props.width}
			height={props.height}>
			<Path
				d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M372.521,206.75
        c-1.646,3.99-5.542,6.583-9.854,6.583h-32c-2.833,0-5.542-1.125-7.542-3.125l-45.792-45.792V416
        c0,5.896-4.771,10.667-10.667,10.667h-21.333c-5.896,0-10.667-4.771-10.667-10.667V164.417l-45.792,45.792
        c-2,2-4.708,3.125-7.542,3.125h-32c-4.313,0-8.208-2.594-9.854-6.583c-1.646-3.99-0.729-8.573,2.313-11.625L248.458,88.458
        c4.167-4.167,10.917-4.167,15.083,0l106.667,106.667C373.25,198.177,374.167,202.76,372.521,206.75z"
				fill={props.color}
			/>
		</Svg>
	);
}

export default CircleArrowUp;
