import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
SMSTopUp.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function SMSTopUp(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width} //"13.976"
			height={props.height} //"23.869"
			viewBox="0 0 13.976 23.869">
			<Path
				id="Path_186"
				data-name="Path 186"
				d="M8.368,5.092a5.609,5.609,0,0,0,5.6-5.607A5.528,5.528,0,0,0,12.01-4.737a.7.7,0,0,1-.279-.655l.011-9.646c0-2.245-1.364-3.738-3.373-3.738-2.03,0-3.405,1.493-3.405,3.738l.011,9.646a.7.7,0,0,1-.279.655A5.528,5.528,0,0,0,2.739-.516,5.616,5.616,0,0,0,8.368,5.092Zm0-1.558A4.062,4.062,0,0,1,4.308-.516,3.944,3.944,0,0,1,6.091-3.835a.893.893,0,0,0,.462-.87v-10.27c0-1.354.73-2.224,1.815-2.224,1.053,0,1.783.87,1.783,2.224v10.27a.893.893,0,0,0,.462.87A3.944,3.944,0,0,1,12.4-.516,4.055,4.055,0,0,1,8.368,3.534ZM13.75-14.835h2.331a.613.613,0,0,0,.634-.623.613.613,0,0,0-.634-.623H13.75a.619.619,0,0,0-.634.623A.619.619,0,0,0,13.75-14.835Zm0,3.019h2.331a.613.613,0,0,0,.634-.623.613.613,0,0,0-.634-.623H13.75a.619.619,0,0,0-.634.623A.619.619,0,0,0,13.75-11.816ZM8.357,2.084a2.6,2.6,0,0,0,2.589-2.61A2.579,2.579,0,0,0,9.561-2.814c-.354-.183-.473-.312-.473-.838v-5.7c0-.559-.322-.892-.73-.892s-.741.333-.741.892v5.7c0,.526-.118.655-.473.838A2.579,2.579,0,0,0,5.758-.526,2.6,2.6,0,0,0,8.357,2.084ZM13.75-8.8h2.331a.613.613,0,0,0,.634-.623.621.621,0,0,0-.634-.634H13.75a.628.628,0,0,0-.634.634A.619.619,0,0,0,13.75-8.8Zm0,3.019h2.331a.621.621,0,0,0,.634-.634.613.613,0,0,0-.634-.623H13.75a.619.619,0,0,0-.634.623A.628.628,0,0,0,13.75-5.779Z"
				transform="translate(-2.739 18.777)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default SMSTopUp;
