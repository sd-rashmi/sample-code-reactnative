import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Skip.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Skip(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width} //"19.922"
			height={props.height} //"21.812"
			viewBox="0 0 19.922 21.812">
			<Path
				id="Path_181"
				data-name="Path 181"
				d="M16,21.91a10.028,10.028,0,0,0,9.961-9.961,10.009,10.009,0,0,0-4.17-8.057.8.8,0,0,0-1.211.176.865.865,0,0,0,.283,1.172,8.276,8.276,0,1,1-6.748-1.377V5.27c0,.693.479.879,1.016.5L18.246,3.58a.615.615,0,0,0,0-1.094L15.141.3c-.547-.391-1.025-.205-1.025.5V2.174a10.034,10.034,0,0,0-8.076,9.775A10.035,10.035,0,0,0,16,21.91Zm-3.711-9.15H15.18v2.91a.785.785,0,0,0,.811.83.8.8,0,0,0,.83-.83V12.76h2.91a.769.769,0,0,0,.82-.8.787.787,0,0,0-.82-.83H16.82v-2.9a.8.8,0,0,0-.83-.84.787.787,0,0,0-.811.84v2.9H12.289a.792.792,0,0,0-.84.83A.78.78,0,0,0,12.289,12.76Z"
				transform="translate(-6.039 -0.098)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Skip;
