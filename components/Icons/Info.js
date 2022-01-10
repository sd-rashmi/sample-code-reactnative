import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Info.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Info(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 19.922 19.922">
			<Path
				id="Title"
				d="M11.709,2.91A10.035,10.035,0,0,0,21.67-7.051,10.037,10.037,0,0,0,11.7-17.012,10.026,10.026,0,0,0,1.748-7.051,10.041,10.041,0,0,0,11.709,2.91Zm0-1.66a8.261,8.261,0,0,1-8.291-8.3,8.252,8.252,0,0,1,8.281-8.3,8.283,8.283,0,0,1,8.311,8.3A8.263,8.263,0,0,1,11.709,1.25Zm-.088-11.777a1.261,1.261,0,0,0,1.27-1.27,1.263,1.263,0,0,0-1.27-1.279,1.269,1.269,0,0,0-1.27,1.279A1.267,1.267,0,0,0,11.621-10.527ZM10-1.68h3.975a.681.681,0,0,0,.713-.684.692.692,0,0,0-.713-.684H12.764V-8.018c0-.527-.264-.879-.762-.879H10.166a.692.692,0,0,0-.713.684.681.681,0,0,0,.713.684h1.045v4.482H10a.692.692,0,0,0-.713.684A.681.681,0,0,0,10-1.68Z"
				transform="translate(-1.748 17.012)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Info;
