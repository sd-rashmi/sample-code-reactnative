import React from 'react';
import Svg, { Path } from 'react-native-svg';
import propTypes from 'prop-types';

// props validation
Edit.propTypes = {
	height: propTypes.string.isRequired,
	width: propTypes.string.isRequired,
	color: propTypes.string.isRequired
};

function Edit(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			viewBox="0 0 19.321 19.29">
			<Path
				id="Title"
				d="M21.865-15.059l.7-.723a.78.78,0,0,0,0-1.143l-.225-.234a.777.777,0,0,0-1.1.049l-.713.7ZM10.117-4.4l1.9-.83,9.121-9.111L19.8-15.664,10.693-6.553,9.814-4.717A.243.243,0,0,0,10.117-4.4ZM6.563,1.924H18.027C19.785,1.924,20.8.908,20.8-1.1V-11.543L19.229-9.971v8.789c0,1.016-.547,1.533-1.221,1.533H6.592A1.37,1.37,0,0,1,5.068-1.182V-12.266a1.377,1.377,0,0,1,1.523-1.543h8.9l1.572-1.572H6.563c-2.031,0-3.066,1.016-3.066,3.027V-1.1C3.5.918,4.531,1.924,6.563,1.924Z"
				transform="translate(-3.496 17.366)"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Edit;
