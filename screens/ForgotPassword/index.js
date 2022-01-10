import React, { useState, useEffect } from "react";
import {
  Keyboard,
  Image,
  StatusBar,
  Animated,
  Platform,
  View,
  TouchableOpacity,
} from "react-native";
import {
  SmallText,
  BoldText,
  FlexCol,
  Button,
  Input,
  ScrollView,
  HeaderRow,
  Flex,
  BottomLine,
} from "@components";
import { isTablet } from "react-native-device-info";
import styles from "./style";
import globalStyle from "@globalStyle";
import { forgotpasswordRequest } from "./actions";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { Internetcomponent } from "../Utilities/helpers";
import { useToast } from "react-native-toast-notifications";
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";
function ForgotPassword(props) {
  const toast = useToast();
  const _logoAnimate = useState(new Animated.ValueXY({ x: 100, y: 50 }))[0];
  const _contentAnimate = useState(new Animated.Value(0))[0];
  const [emailValue, setEmail] = useState("");
  const [signInError, onChangeErrorMessage] = useState("");

  const onClickSignIn = async () => {
    try {
      Keyboard.dismiss();
      if ([...emailValue.trim()].length === 0)
        throw new Error("Email Required.");
      else {
        clearFields();
        props.forgotpasswordRequest(emailValue.trim(), toastMessage);
      }
    } catch (error) {
      onChangeErrorMessage(error.message);
    }
  };

  const clearFields = () => {
    setEmail("");
    onChangeErrorMessage("");
  };

  const onClickBack = () => {
    Keyboard.dismiss();
    props.navigation.goBack();
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is required"),
  });

  const submitHandler = (values, { resetForm }) => {
    props.forgotpasswordRequest(values.email, toastMessage);
    resetForm();
  };

  useEffect(() => {
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
    }, 150);
  }, []);

  const toastMessage = (msg) => {
    toast.show(msg, {
      type: "with_close_button",
      placement: "top",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
  };
  return (
    <ScrollView backgroundColor="#071D22" enableScroll={false}>
      {props.network === false ? <Internetcomponent /> : null}
      <StatusBar backgroundColor={globalStyle.darkGreen} />
      {/* header */}
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "" }}
        onSubmit={submitHandler}
      >
        {({ handleSubmit, values, isValid }) => (
          <>
            {Platform.OS === "ios" ? (
              <HeaderRow customStyle={styles.headerContainer}>
                <Flex customStyle={{ flex: 1 }}>
                  <Animated.View style={_logoAnimate.getLayout()}>
                    <Image
                      source={require("@asset/LoginLogo.png")}
                      style={
                        isTablet()
                          ? styles.headerLogoTablet
                          : styles.headerLogoMobile
                      }
                      resizeMode="contain"
                    />
                  </Animated.View>
                </Flex>
                <Animated.View
                  style={[
                    styles.animateHeaderContainer,
                    { opacity: _contentAnimate },
                  ]}
                >
                  <FlexCol customStyle={styles.headerLblContainer}>
                    <BoldText
                      text="FORGOT"
                      customStyle={{
                        ...styles.signUplbl,
                        fontSize: isTablet()
                          ? globalStyle.tabletSubTitleTxt
                          : globalStyle.phoneTitleTxt,
                      }}
                    />
                    <BoldText
                      text="PASSWORD"
                      customStyle={{
                        ...styles.welcomeLbl,
                        fontSize: isTablet()
                          ? globalStyle.tabletSubTitleTxt
                          : globalStyle.phoneSubTitleTxt,
                      }}
                    />
                  </FlexCol>
                </Animated.View>
              </HeaderRow>
            ) : (
              <View
                style={{
                  paddingHorizontal: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <VectorIcon
                      name="keyboard-backspace"
                      color={"#FFF"}
                      solid
                      size={30}
                    />
                  </TouchableOpacity>
                  <Animated.View
                    style={[
                      styles.animateHeaderContainer,
                      { opacity: _contentAnimate },
                    ]}
                  >
                    <FlexCol customStyle={styles.headerLblContainer}>
                      <BoldText
                        text="SIGN IN"
                        customStyle={{
                          ...styles.signUplbl,
                          fontSize: isTablet()
                            ? globalStyle.tabletSubTitleTxt
                            : globalStyle.phoneTitleTxt,
                        }}
                      />
                      <BoldText
                        text="WELCOME BACK"
                        customStyle={{
                          ...styles.welcomeLbl,
                          fontSize: 18,
                        }}
                      />
                    </FlexCol>
                  </Animated.View>
                </View>
                <Flex customStyle={{ flex: 1, marginTop: 40 }}>
                  <Animated.View style={_logoAnimate.getLayout()}>
                    <Image
                      source={require("@asset/LoginLogo.png")}
                      style={
                        isTablet()
                          ? styles.headerLogoTablet
                          : styles.headerLogoMobile
                      }
                      resizeMode="contain"
                    />
                  </Animated.View>
                </Flex>
              </View>
            )}
            {/* form input */}
            <Animated.View
              style={[styles.animateContainer, { opacity: _contentAnimate }]}
            >
              <Flex customStyle={styles.formContainer}>
                <Field
                  component={Input}
                  name="email"
                  placeholder="Email address"
                  keyboardType="email-address"
                  fontcolor="white"
                />
              </Flex>
            </Animated.View>
            {/* buttons */}
            <Animated.View
              style={[
                styles.buttonAnimateContainer,
                { opacity: _contentAnimate },
              ]}
            >
              <Flex customStyle={styles.buttonContainer}>
                <Button
                  onClickEvent={
                    isValid
                      ? handleSubmit
                      : () => {
                          console.log(values);
                        }
                  }
                  customStyle={styles.btnSignIn}
                >
                  <SmallText
                    text="Submit"
                    customStyle={{
                      ...styles.innerTextWhite,
                      fontSize: isTablet()
                        ? globalStyle.tabletButtonTxt
                        : globalStyle.phoneButtonTxt,
                    }}
                  />
                </Button>
                {Platform.OS === "ios" ? (
                  <Button
                    onClickEvent={onClickBack}
                    customStyle={styles.btnBack}
                  >
                    <SmallText
                      text="Back"
                      customStyle={{
                        ...styles.innerTextBlack,
                        fontSize: isTablet()
                          ? globalStyle.tabletButtonTxt
                          : globalStyle.phoneButtonTxt,
                      }}
                    />
                  </Button>
                ) : null}
              </Flex>
            </Animated.View>
          </>
        )}
      </Formik>
      <BottomLine />
      <Spinner visible={props.loading} />
    </ScrollView>
  );
}
const mapStateToProps = (state) => {
  return {
    error: state.ForgotPasswordReducer.error,
    loading: state.ForgotPasswordReducer.loading,
    network: state.network.isConnected,
  };
};
const mapDispatchToProps = (dispatch) => ({
  forgotpasswordRequest: (email, alertsuccess) =>
    dispatch(forgotpasswordRequest(email, alertsuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
