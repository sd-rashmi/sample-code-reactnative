import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Image, TextInput, Keyboard, Animated } from "react-native";
import {
  Button,
  HeaderRow,
  SmallText,
  ScrollView,
  FlexCol,
  FlexRow,
  Flex,
  BoldText,
} from "@components";
import { isTablet } from "react-native-device-info";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "@provider/configs/AWS";
import globalStyle from "@globalStyle";
import styles from "./styles";
import { verifyRequest, resendRequest } from "../actions";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { Internetcomponent } from "../../Utilities/helpers";
import { useToast } from "react-native-toast-notifications";
Amplify.configure(awsconfig.Auth);

function VerifyUserRegistration(props) {
  const toast = useToast();
  const _logoAnimate = useState(new Animated.ValueXY({ x: 100, y: 50 }))[0];
  const _contentAnimate = useState(new Animated.Value(0))[0];

  const [firstInput, onChangeFirst] = useState("");
  const [secondInput, onChangeSecond] = useState("");
  const [thirdInput, onChangeThird] = useState("");
  const [fourthInput, onChangeFourth] = useState("");
  const [fifthInput, onChangeFifth] = useState("");
  const [sixthInput, onChangeSixth] = useState("");
  const [errorMessage, onChangeErrorMsg] = useState("");

  const _firstInput = useRef(null);
  const _secondInput = useRef(null);
  const _thirdInput = useRef(null);
  const _fourthInput = useRef(null);
  const _fifthInput = useRef(null);
  const _sixthInput = useRef(null);

  const onClickConfirm = async () => {
    try {
      const id = props.route.params.id;
      Keyboard.dismiss();
      const code = `${firstInput}${secondInput}${thirdInput}${fourthInput}${fifthInput}${sixthInput}`;
      if (code.length !== 6) {
        toast.show("Invalid Code", {
          type: "with_close_button",
          placement: "top",
          duration: 4000,
          offset: 30,
          animationType: "slide-in",
        });
      } else {
        onChangeErrorMsg("");
        props.verifyRequest(id, code, toastMessage);
      }
    } catch (error) {
      toast.show(error.message, {
        type: "with_close_button",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });
    }
  };

  const onClickResendVerification = async () => {
    const id = props.route.params.id;
    try {
      Keyboard.dismiss();
      props.resendRequest(id, toastMessage);
      // await Auth.resendSignUp(this.props.navigation.getParam('user'));
    } catch (error) {
      onChangeErrorMsg((errorMessage = error.message));
    }
  };

  const toastMessage = (msg, type) => {
    toast.show(msg, {
      type: "with_close_button",
      placement: "top",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
    onChangeFirst("");
    onChangeSecond("");
    onChangeThird("");
    onChangeFourth("");
    onChangeFifth("");
    onChangeSixth("");
    if (type === "1") {
      setTimeout(() => {
        props.navigation.navigate("login");
      }, 2000);
    }
  };

  // mounted
  useEffect(() => {
    //animations
    setTimeout(async () => {
      Animated.timing(_logoAnimate, {
        toValue: { x: 0, y: 0 },
        duration: 250,
        useNativeDriver: false,
      }).start();
    }, 100);

    setTimeout(async () => {
      Animated.timing(_contentAnimate, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      _firstInput.current.focus();
    }, 150);
  }, []);

  return (
    <ScrollView backgroundColor={globalStyle.darkGreen} enableScroll={false}>
      {props.network === false ? <Internetcomponent /> : null}
      {/* header */}
      <HeaderRow customStyle={styles.header}>
        <Flex>
          <Animated.View style={_logoAnimate.getLayout()}>
            <Image
              source={require("@asset/LoginLogo.png")}
              style={
                isTablet() ? styles.headerLogoTablet : styles.headerLogoMobile
              }
              resizeMode="contain"
            />
          </Animated.View>
        </Flex>
        <Animated.View
          style={[styles.animateHeaderContainer, { opacity: _contentAnimate }]}
        >
          <FlexCol customStyle={styles.headerLblContainer}>
            <BoldText
              text="SIGN UP"
              customStyle={{
                ...styles.signUplbl,
                fontSize: isTablet()
                  ? globalStyle.tabletSubTitleTxt
                  : globalStyle.phoneTitleTxt,
              }}
            />
            <BoldText
              text="ONE LAST STEP"
              customStyle={{
                ...styles.welcomeLbl,
                fontSize: 18,
              }}
            />
          </FlexCol>
        </Animated.View>
      </HeaderRow>
      {/* Form Inputs */}
      <Animated.View
        style={[styles.animateContainer, { opacity: _contentAnimate }]}
      >
        <FlexRow customStyle={{ flex: 1, alignSelf: "center" }}>
          <TextInput
            ref={_firstInput}
            style={styles.textInput}
            value={firstInput}
            onChangeText={(value) => {
              onChangeFirst(value);
              if (value != "") _secondInput.current.focus();
            }}
            inputValue={firstInput}
            textAlign={"center"}
            keyboardType={"numeric"}
            maxLength={1}
          />
          <TextInput
            style={styles.textInput}
            value={secondInput}
            onChangeText={(value) => {
              onChangeSecond(value);
              if (value != "") _thirdInput.current.focus();
            }}
            inputValue={secondInput}
            textAlign={"center"}
            keyboardType={"numeric"}
            ref={_secondInput}
            maxLength={1}
          />
          <TextInput
            style={styles.textInput}
            value={thirdInput}
            onChangeText={(value) => {
              onChangeThird(value);
              if (value != "") _fourthInput.current.focus();
            }}
            inputValue={thirdInput}
            textAlign={"center"}
            keyboardType={"numeric"}
            ref={_thirdInput}
            maxLength={1}
          />
          <TextInput
            style={styles.textInput}
            value={fourthInput}
            onChangeText={(value) => {
              onChangeFourth(value);
              if (value != "") _fifthInput.current.focus();
            }}
            inputValue={fourthInput}
            textAlign={"center"}
            keyboardType={"numeric"}
            ref={_fourthInput}
            maxLength={1}
          />
          <TextInput
            style={styles.textInput}
            value={fifthInput}
            onChangeText={(value) => {
              onChangeFifth(value);
              if (value != "") _sixthInput.current.focus();
            }}
            inputValue={fifthInput}
            textAlign={"center"}
            keyboardType={"numeric"}
            ref={_fifthInput}
            maxLength={1}
          />
          <TextInput
            style={styles.textInput}
            value={sixthInput}
            onChangeText={(value) => {
              onChangeSixth(value);
              Keyboard.dismiss();
            }}
            nputValue={sixthInput}
            textAlign={"center"}
            keyboardType={"numeric"}
            ref={_sixthInput}
            maxLength={1}
          />
        </FlexRow>

        {/* error message */}
        {/* <SmallText
					text={errorMessage}
					customStyle={{
						...styles.errorMessageLbl,
						fontSize: isTablet()
							? globalStyle.tabletSmallTxt
							: globalStyle.phoneSmallTxt
					}}
				/> */}
      </Animated.View>
      {/* footer */}
      <Animated.View
        style={[styles.buttonAnimateContainer, { opacity: _contentAnimate }]}
      >
        <FlexCol customStyle={styles.buttonContainer}>
          <Button onClickEvent={onClickConfirm} customStyle={styles.btnConfirm}>
            <SmallText
              text="Confirm"
              customStyle={{
                ...styles.innerTextWhite,
                fontSize: isTablet()
                  ? globalStyle.tabletButtonTxt
                  : globalStyle.phoneButtonTxt,
              }}
            />
          </Button>
          <Button
            onClickEvent={onClickResendVerification}
            customStyle={styles.btnResend}
          >
            <SmallText
              text="Resend Code"
              customStyle={{
                ...styles.innerTextBlack,
                fontSize: isTablet()
                  ? globalStyle.tabletButtonTxt
                  : globalStyle.phoneButtonTxt,
              }}
            />
          </Button>
        </FlexCol>
      </Animated.View>
      <Spinner visible={props.loading} />
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.RegisterReducer.error,
    loading: state.RegisterReducer.loading,
    network: state.network.isConnected,
  };
};
const mapDispatchToProps = (dispatch) => ({
  verifyRequest: (userid, otp, alertsuccess) =>
    dispatch(verifyRequest(userid, otp, alertsuccess)),
  resendRequest: (userid, alertsuccess) =>
    dispatch(resendRequest(userid, alertsuccess)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyUserRegistration);
