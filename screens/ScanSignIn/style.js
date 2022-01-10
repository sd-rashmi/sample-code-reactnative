import { StyleSheet } from 'react-native';
import globalStyle from '@globalStyle';

const styles = StyleSheet.create({
	innerTextBlack: {
		color: 'black',
		fontSize: 15,
		textAlign: 'center'
	},
	innerTextWhite: {
		color: 'white',
		fontSize: 15,
		textAlign: 'center'
	},
	headerParentContainer: {
		backgroundColor: globalStyle.darkGreen,
		flex: 5,
		justifyContent: 'space-between'
	},
	headerContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		maxHeight: '30%',
		justifyContent: 'center'
	},
	ticket: {
		flex: 1,
		width: '45%',
		alignSelf: 'center'
	},
	btnAccnt: {
		flex: 1,
		backgroundColor: 'white',
		height: 50,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		marginHorizontal: 5
	},
	btnRegister: {
		flex: 1,
		backgroundColor: globalStyle.green,
		height: 50,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		marginHorizontal: 5
	},
	btnApple: {
		flex: 1,
		backgroundColor: 'black',
		maxHeight: 50,
		minHeight: 50,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		marginVertical: 5
	},
	btnFacebook: {
		flex: 1,
		backgroundColor: globalStyle.blue,
		maxHeight: 50,
		minHeight: 50,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		marginVertical: 5
	},
	btnGoogle: {
		flex: 1,
		backgroundColor: globalStyle.orange,
		maxHeight: 50,
		minHeight: 50,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		marginVertical: 5
	},
	ticketCircle: {
		width: 40,
		minHeight: 40,
		top: -30,
		alignSelf: 'center',
		backgroundColor: globalStyle.darkGreen
	},
	circleFooter: {
		flex: 1,
		maxWidth: 65,
		minWidth: 65,
		minHeight: 65,
		maxHeight: 65,
		alignSelf: 'center',
		top: -35
	},
	numberLabel: {
		alignSelf: 'center',
		top: -20
	},
	ticketScanLblContainer: {
		flex: 1,
		top: -30,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	ticketScanLbl: {
		color: globalStyle.green,
		textAlign: 'center'
	},
	almostReadyLbl: {
		color: 'white',
		textAlign: 'center',
		paddingHorizontal: 50,
		letterSpacing: 2
	},
	trackLbl: {
		textAlign: 'center',
		color: globalStyle.gray,
		fontSize: 13
	},
	signInContainer: {
		flex: 1,
		paddingHorizontal: '9.5%'
	},
	buttonContainer: {
		flex: 3,
		justifyContent: 'center',
		top: -30
	},
	socialButtonContainer: {
		flex: 1,
		paddingHorizontal: '10%'
	},
	headerBackLbl: {
		textAlign: 'left',
		color: globalStyle.green,
		fontSize: 15
	},
	headerLogo: {
		flex: 0,
		width: '100%',
		height: '100%',
		alignSelf: 'center',
		zIndex: 1
	}
});

export default styles;
