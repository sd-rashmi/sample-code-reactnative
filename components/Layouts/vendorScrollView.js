import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';

function TabContainer(props) {
	let [orientation, setOrientation] = useState('portrait');
	const _scrollView = useRef(null);

	useEffect(() => {
		//get changed orientation
		Dimensions.addEventListener('change', changeOrientation);
		function changeOrientation() {
			const dim = Dimensions.get('window');
			let res = dim.height >= dim.width;
			// scroll to top when mobile portrait
			if (res && !props.isTablet) {
				_scrollView.current.scrollTo({ x: 0, y: 0, animated: true });
			}
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
			ref={_scrollView}
			contentContainerStyle={{
				...styles.container,
				backgroundColor: props.backgroundColor,
				minHeight:
					orientation === 'landscape' && !props.isTablet ? '90%' : '100%'
			}}
			scrollEnabled={
				props.scrollEnabled || (orientation === 'landscape' && !props.isTablet)
			}>
			{props.children}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexDirection: 'column'
	}
});

export default TabContainer;
