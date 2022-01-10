import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
GroupPeople.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function GroupPeople(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width} //"40.498"
			height={props.height} //"19.314"
			viewBox="0 0 40.498 19.314">
			<Path
				id="Symbol"
				d="M.011-7.863a4.541,4.541,0,0,0,4.3-4.748,4.45,4.45,0,0,0-4.3-4.619A4.475,4.475,0,0,0-4.275-12.59,4.533,4.533,0,0,0,.011-7.863Zm-12.386.247a3.959,3.959,0,0,0,3.738-4.136,3.871,3.871,0,0,0-3.738-4.018,3.9,3.9,0,0,0-3.738,4.039A3.96,3.96,0,0,0-12.375-7.616Zm24.739,0a3.961,3.961,0,0,0,3.749-4.114,3.913,3.913,0,0,0-3.749-4.039,3.878,3.878,0,0,0-3.738,4.018A3.966,3.966,0,0,0,12.364-7.616Zm-30.723,9.7h8.153C-11.322.462-9.958-2.8-7.638-4.587a8.367,8.367,0,0,0-4.737-1.386c-4.845,0-7.874,3.577-7.874,6.553C-20.249,1.547-19.723,2.084-18.358,2.084Zm36.717,0c1.364,0,1.891-.537,1.891-1.5,0-2.976-3.029-6.553-7.874-6.553A8.314,8.314,0,0,0,7.638-4.587C9.947-2.8,11.312.462,10.194,2.084Zm-25.094,0H6.757c1.687,0,2.288-.483,2.288-1.429,0-2.771-3.47-6.6-9.034-6.6S-9.034-2.116-9.034.655C-9.034,1.6-8.433,2.084-6.735,2.084Z"
				transform="translate(20.249 17.23)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default GroupPeople;
