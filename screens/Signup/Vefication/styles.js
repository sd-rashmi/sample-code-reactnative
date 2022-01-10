import { StyleSheet } from 'react-native';
import globalStyle from '@globalStyle';
import { screenWidth } from '../../Utilities/helpers';
const styles = StyleSheet.create({
	header: {
		flex: 1,
		padding: 5,
		alignItems: 'flex-start'
	},
	emailLbl: {
		flex: 1,
		color: 'white',
		textAlign: 'center'
	},
	btnResend: {
		backgroundColor: 'white',
		maxHeight: 50,
		minHeight: 50,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		marginVertical: 10
	},
	btnConfirm: {
		backgroundColor: globalStyle.green,
		maxHeight: 50,
		minHeight: 50,
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
	errorMessageLbl: {
		color: 'orange',
		textAlign: 'center',
		marginLeft: 30,
		marginRight: 30
	},
	logo: {
		height: '80%',
		width: '80%'
	},
	textInput: {
		alignSelf: 'center',
		backgroundColor: 'transparent',
		fontSize: 20,
		color: 'white',
		fontFamily: 'SFUIText-Regular',
		margin: 5,
		height: 70,
		width: screenWidth / 8,
		borderBottomWidth: 1,
		borderBottomColor: '#009A74'
	},
	buttonContainer: {
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: 'center'
	},
	signUplbl: {
		color: globalStyle.green,
		letterSpacing: 2
	},
	welcomeLbl: {
		color: 'white',
		letterSpacing: 2
	},
	headerLblContainer: {
		flex: 0,
		justifyContent: 'flex-start',
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
	headerLogoMobile: {
		width: 100,
		height: 100
	},
	headerLogoTablet: {
		width: 150,
		height: 150
	}
});

export default styles;
