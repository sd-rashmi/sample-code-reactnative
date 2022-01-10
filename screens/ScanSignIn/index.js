import React, { useState, useContext } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import {
	SmallText,
	BoldText,
	FlexCol,
	FlexRow,
	Flex,
	Button,
	ScrollView,
	HeaderCol,
	Icon_ArrowLeft,
	Icon_CircleCheck,
	BigTicket,
	Modal,
	Icon_Apple
} from '@components';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '@provider/configs/AWS';
import { urlOpener } from '@provider/utility';
import { AppContext } from '@root/App';
import { isTablet } from 'react-native-device-info';
import ConfirmDiscard from './component/ConfirmDiscard';
//styles
import styles from './style';
import globalStyle from '@globalStyle';

//**
// Configure AWS amplify
// */
Amplify.configure({
	...awsconfig.ids,
	oauth: {
		...awsconfig.oauth,
		urlOpener
	}
});

function ScanSignInScreen({ navigation, route }) {
	const ticketContext = useContext(AppContext);
	const [confirmDiscard, setConfirmDiscard] = useState(false);
	const ticket = route.params?.ticket;

	const onClickSignIn = () => {
		navigation.navigate('signin');
	};

	const onClickRegistration = () => {
		navigation.navigate('signup');
	};

	const onClickBack = () => {
		setConfirmDiscard(true);
	};

	const closeModal = () => {
		setConfirmDiscard(false);
	};

	const onCancelOrder = () => {
		//empty state unregistered ticket
		ticketContext.appDispatch({
			type: 'remove-unregistered'
		});
		// close modal
		setConfirmDiscard(false);
		navigation.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [
					{
						name: 'scan-signin',
						params: { ticket }
					},
					{ name: 'scancode', params: { auth: false } }
				]
			})
		);
	};

	return (
		<ScrollView backgroundColor="#243336">
			<HeaderCol customStyle={styles.headerParentContainer}>
				{/* Header */}
				<Flex customStyle={styles.headerContainer}>
					<TouchableOpacity
						style={{
							flex: 1,
							flexDirection: 'row',
							alignItems: 'center',
							left: 5
						}}
						onPress={onClickBack}>
						<Icon_ArrowLeft width="13" height="13" color={globalStyle.green} />
						<SmallText
							text="Back"
							customStyle={{
								...styles.headerBackLbl,
								fontSize: isTablet()
									? globalStyle.tabletDescTxt
									: globalStyle.phoneDescTxt
							}}
						/>
					</TouchableOpacity>
					<Flex>
						<Image
							source={require('@asset/HeaderLogo.png')}
							style={styles.headerLogo}
							resizeMode="contain"
						/>
					</Flex>
					<Flex />
				</Flex>
				{/* Ticket */}
				<BigTicket
					ticketStyle={{
						ticket: styles.ticket,
						circle: styles.ticketCircle
					}}
					isReady={false}>
					<FlexCol customStyle={{ flex: 1, justifyContent: 'flex-start' }}>
						<BoldText
							text={ticket.ticket_name}
							customStyle={{
								...styles.numberLabel,
								fontSize: isTablet()
									? globalStyle.tabletTitleTxt
									: globalStyle.phoneTitleTxt
							}}
						/>
					</FlexCol>
					<FlexCol
						customStyle={{ flex: 1, backgroundColor: globalStyle.darkGreen }}>
						<Image
							source={require('@asset/zeke_hut.png')}
							style={styles.circleFooter}
							resizeMode="contain"
						/>
					</FlexCol>
				</BigTicket>
			</HeaderCol>
			<FlexRow
				customStyle={{
					alignSelf: 'center',
					top: isTablet() ? -35 : -25
				}}>
				<Icon_CircleCheck
					width={isTablet() ? '74' : '53'}
					height={isTablet() ? '74' : '53'}
					color={globalStyle.green}
				/>
			</FlexRow>
			{/* Content Label */}
			<FlexCol customStyle={styles.ticketScanLblContainer}>
				<BoldText
					text="TICKET SCANNED"
					customStyle={{
						...styles.ticketScanLbl,
						fontSize: isTablet()
							? globalStyle.tabletSubTitleTxt
							: globalStyle.phoneSubTitleTxt
					}}
				/>
				<BoldText
					text="YOU'RE ALMOST READY TO JOIN THE QUEUE"
					customStyle={{
						...styles.almostReadyLbl,
						fontSize: isTablet()
							? globalStyle.tabletButtonTxt
							: globalStyle.phoneButtonTxt
					}}
				/>
				<SmallText
					text="SIGN IN TO TRACK YOUR ORDER"
					customStyle={{
						...styles.trackLbl,
						fontSize: isTablet()
							? globalStyle.tabletSmallTxt
							: globalStyle.phoneSmallTxt
					}}
				/>
			</FlexCol>
			{/* Content Button */}
			<FlexCol customStyle={styles.buttonContainer}>
				<FlexRow customStyle={styles.signInContainer}>
					<Button onClickEvent={onClickSignIn} customStyle={styles.btnAccnt}>
						<SmallText
							text="Sign In"
							customStyle={{
								...styles.innerTextBlack,
								fontSize: isTablet()
									? globalStyle.tabletButtonTxt
									: globalStyle.phoneButtonTxt
							}}
						/>
					</Button>
					<Button
						onClickEvent={onClickRegistration}
						customStyle={styles.btnRegister}>
						<SmallText
							text="Register"
							customStyle={{
								...styles.innerTextWhite,
								fontSize: isTablet()
									? globalStyle.tabletButtonTxt
									: globalStyle.phoneButtonTxt
							}}
						/>
					</Button>
				</FlexRow>
				<FlexCol customStyle={styles.socialButtonContainer}>
					<Button
						onClickEvent={() =>
							Auth.federatedSignIn({ provider: 'SignInWithApple' })
						}
						customStyle={styles.btnApple}>
						<FlexRow customStyle={{ justifyContent: 'center' }}>
							<Flex customStyle={{ flex: 0, alignSelf: 'center' }}>
								<Icon_Apple height="20" width="20" color="white" />
							</Flex>
							<SmallText
								text="Sign in with Apple"
								customStyle={{
									...styles.innerTextWhite,
									fontSize: isTablet()
										? globalStyle.tabletButtonTxt
										: globalStyle.phoneButtonTxt
								}}
							/>
						</FlexRow>
					</Button>
					<Button
						onClickEvent={() => Auth.federatedSignIn({ provider: 'Facebook' })}
						customStyle={styles.btnFacebook}>
						<SmallText
							text="Sign in with Facebook"
							customStyle={{
								...styles.innerTextWhite,
								fontSize: isTablet()
									? globalStyle.tabletButtonTxt
									: globalStyle.phoneButtonTxt
							}}
						/>
					</Button>
					<Button
						onClickEvent={() => Auth.federatedSignIn({ provider: 'Google' })}
						customStyle={styles.btnGoogle}>
						<SmallText
							text="Sign in with Google"
							customStyle={{
								...styles.innerTextWhite,
								fontSize: isTablet()
									? globalStyle.tabletButtonTxt
									: globalStyle.phoneButtonTxt
							}}
						/>
					</Button>
				</FlexCol>
			</FlexCol>
			{/* Modal for discard */}
			<Modal animation="slide" visible={confirmDiscard}>
				<ConfirmDiscard closeModal={closeModal} cancelOrder={onCancelOrder} />
			</Modal>
		</ScrollView>
	);
}

export default ScanSignInScreen;
