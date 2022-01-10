import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView } from 'react-native';

function ScrollViewComponent(props) {
	let [orientation, setOrientation] = useState('portrait');

	useEffect(() => {
		//get changed orientation
		Dimensions.addEventListener('change', changeOrientation);
		function changeOrientation() {
			const dim = Dimensions.get('window');
			let res = dim.height >= dim.width;
			setOrientation((orientation = res ? 'portrait' : 'landscape'));
		}
		//get default orietation
		function setDefaultOrietation() {
			const dim = Dimensions.get('window');
			let res = dim.height >= dim.width;
			setOrientation((orientation = res ? 'portrait' : 'landscape'));
		}

		setDefaultOrietation();
		return () => {
			//remove listener
			Dimensions.removeEventListener('change', changeOrientation);
		};
	}, [orientation]);

	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 0,
				//check orientation to set height
				//if landscape check enable scroll props if true set window width else set window height
				minHeight:
					orientation === 'portrait'
						? Dimensions.get('window').height
						: Dimensions.get('window').width,
				backgroundColor: props.backgroundColor
			}}
			scrollEnabled={orientation === 'landscape' || props.enableScroll}>
			{props.children}
		</ScrollView>
	);
}

export default ScrollViewComponent;
