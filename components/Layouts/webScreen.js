import React, { useEffect } from 'react';
import { FlexCol } from '@components';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Spinner from 'react-native-loading-spinner-overlay';
const WebScreen = (props) => {
	const baseurl = props.route.params.url;
	useEffect(() => {
		const timer = setTimeout(() => {
			props.navigation.goBack();
		}, 5000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<FlexCol customStyle={styles.container}>
			<View style={{ flex: 1 }}>
				<Text
					style={{
						color: '#000000',
						fontSize: 20,
						alignSelf: 'center'
					}}>
					Processing Payment ....
				</Text>
				<WebView
					source={{ uri: baseurl }}
					style={{ width: '100%', height: '100%' }}
				/>
			</View>
			<Spinner visible={true} />
		</FlexCol>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
});

export default WebScreen;
