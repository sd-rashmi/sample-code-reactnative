import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
CloseMenu.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function CloseMenu(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width} //"25.33"
			height={props.height} //"19.776"
			viewBox="0 0 25.33 19.776">
			<Path
				id="Path_182"
				data-name="Path 182"
				d="M6.112,2.148H24.7c2.256,0,3.373-1.117,3.373-3.33V-14.3c0-2.213-1.117-3.33-3.373-3.33H6.112q-3.368,0-3.373,3.33V-1.182Q2.739,2.154,6.112,2.148ZM6.134.419A1.5,1.5,0,0,1,4.469-1.268V-14.212A1.5,1.5,0,0,1,6.134-15.9h4.791V.419ZM24.675-15.9a1.5,1.5,0,0,1,1.665,1.687V-1.268A1.5,1.5,0,0,1,24.675.419H12.611V-15.9ZM8.852-11.913a.624.624,0,0,0,.612-.6.617.617,0,0,0-.612-.6h-2.3a.624.624,0,0,0-.612.6.632.632,0,0,0,.612.6Zm0,2.782a.626.626,0,0,0,.612-.612.608.608,0,0,0-.612-.591h-2.3a.615.615,0,0,0-.612.591.634.634,0,0,0,.612.612Zm0,2.771a.608.608,0,0,0,.612-.591.617.617,0,0,0-.612-.6h-2.3a.624.624,0,0,0-.612.6.615.615,0,0,0,.612.591Z"
				transform="translate(-2.739 17.628)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default CloseMenu;
