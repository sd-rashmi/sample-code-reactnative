import { Platform, StyleSheet } from 'react-native';
import globalStyle from '@globalStyle';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: globalStyle.darkGreen
	},
	headerContainer: {
		flex: 1,
		alignItems: 'flex-start',
		padding: 5
	},
	formContainer: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: Platform.OS === 'android' ? 15 : 30
	},
	btnBack: {
		backgroundColor: 'white',
		maxHeight: 50,
		minHeight: 50,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		marginVertical: 10
	},
	btnSignIn: {
		backgroundColor: globalStyle.green,
		maxHeight: Platform.OS === 'android' ? 45 : 50,
		minHeight: Platform.OS === 'android' ? 45 : 50,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		marginVertical: 10
	},
	innerTextBlack: {
		color: 'black',
		fontSize: 17,
		textAlign: 'center'
	},
	innerTextWhite: {
		color: 'white',
		fontSize: 17,
		textAlign: 'center'
	},
	errorLbl: {
		paddingVertical: 10,
		textAlign: 'center',
		fontSize: 16,
		color: globalStyle.orange
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: Platform.OS === 'android' ? 15 : 30
	},
	signUplbl: {
		color: globalStyle.green,
		letterSpacing: Platform.OS === 'android' ? 0 : 2
	},
	welcomeLbl: {
		color: 'white',
		letterSpacing: Platform.OS === 'android' ? 0 : 2
	},
	headerLogoMobile: {
		width: 100,
		height: 100
	},
	headerLogoTablet: {
		width: 150,
		height: 150
	},
	headerLblContainer: {
		flex: 0,
		alignItems: 'flex-end'
	},
	animateHeaderContainer: {
		flex: 0,
		alignSelf: 'flex-end'
	},
	animateContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	buttonAnimateContainer: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	forgot: {
		color: 'white',
		fontSize: 15
	},
	forCont: {
		// position: 'absolute',
		// bottom: 10,
		// right: 30
		// right: Platform.OS === 'android' ? 15 : 30,
		// bottom: Platform.OS === 'android' ? 50 : 10
		alignSelf: 'flex-end',
		marginTop: 15
	}
});

export default styles;
