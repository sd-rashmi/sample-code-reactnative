import { StyleSheet, Dimensions, Platform } from 'react-native';
import globalStyle from '@globalStyle';

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#243336',
		minHeight: Dimensions.get('window').height
	},
	headerContainer: {
		flex: 0,
		paddingVertical: 10,
		backgroundColor: globalStyle.darkGreen,
		alignItems: 'center'
	},
	headerBackContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		left: 5
	},
	content: {
		flex: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 230,
		height: 125,
		alignSelf: 'center'
	},
	yourNumberLabel: {
		textAlign: 'center',
		color: globalStyle.darkGray,
		fontWeight: 'normal'
	},
	numberLabel: {
		textAlign: 'center'
	},
	statusLabel: {
		flex: 1,
		color: 'white',
		bottom: 20,
		alignSelf: 'center'
	},
	contentText: {
		color: 'white',
		textTransform: 'uppercase',
		textAlign: 'center',
		letterSpacing: 1,
		top: -15
	},
	footer: {
		flex: 1,
		minWidth: '80%'
	},
	footerContent: {
		flex: 1,
		minHeight: '20%',
		maxWidth: '94%',
		left: 11,
		flexDirection: 'column',
		top: -30
	},
	footerBorder: {
		backgroundColor: 'white',
		flex: 1,
		top: 15,
		left: 15,
		marginRight: 30,
		borderWidth: 1
	},
	ticketCircle: {
		width: 55,
		minHeight: 55,
		top: -40,
		alignSelf: 'center',
		backgroundColor:
			Platform.OS === 'android' ? globalStyle.darkGreen : globalStyle.darkGray
	},
	ticketSecondContainer: {
		flex: 1
	},
	circleFooter: {
		maxWidth: 100,
		minWidth: 100,
		minHeight: 100,
		maxHeight: 100,
		top: -50,
		alignSelf: 'center',
		borderRadius: 100
	},
	allTicketLbl: {
		color: globalStyle.green
	},
	myTicketLbl: {
		color: 'white'
	}
});

export default styles;
