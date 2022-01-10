import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Marketing.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Marketing(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width} //"24.363"
			height={props.height} //"22.505"
			viewBox="0 0 24.363 22.505">
			<Path
				id="Path_187"
				data-name="Path 187"
				d="M6.585,3.6c1.45,0,4.415-1.461,6.6-3.008,7.487.2,13.105-4.1,13.105-9.732,0-5.4-5.414-9.765-12.182-9.765S1.923-14.545,1.923-9.142A9.218,9.218,0,0,0,7.573-.924,22.567,22.567,0,0,1,5.7,1.923,1,1,0,0,0,6.585,3.6ZM7.713,1.815c-.086.032-.118-.032-.064-.1A19.662,19.662,0,0,0,9.475-.838.874.874,0,0,0,9.013-2.2C5.64-3.771,3.706-6.273,3.706-9.142c0-4.394,4.608-7.981,10.4-7.981s10.409,3.588,10.409,7.981S19.905-1.149,14.1-1.149c-.215,0-.548-.011-.978-.021a1.755,1.755,0,0,0-1.2.462A26.422,26.422,0,0,1,7.713,1.815Z"
				transform="translate(-1.923 18.906)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Marketing;
