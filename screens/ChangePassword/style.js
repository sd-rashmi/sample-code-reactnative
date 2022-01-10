import { StyleSheet } from 'react-native';
import globalStyle from '@globalStyle';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: globalStyle.darkGreen
	},
	formContainer: {
		flex: 0,
		paddingHorizontal: Platform.OS === 'android' ? 15 : 30,
		justifyContent: 'center'
	},
	btnAccnt: {
		backgroundColor: 'white',
		maxHeight: 50,
		minHeight: 50,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		marginVertical: 10
	},
	btnRegister: {
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
		textAlign: 'center'
	},
	innerTextWhite: {
		color: 'white',
		textAlign: 'center'
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'flex-start',
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
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	animateContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	animateHeaderContainer: {
		flex: 0,
		alignSelf: 'flex-end'
	},
	buttonAnimateContainer: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	errorMssg: {
		textAlign: 'center',
		fontSize: 16,
		color: globalStyle.orange,
		paddingVertical: 10
	}
});

export default styles;
