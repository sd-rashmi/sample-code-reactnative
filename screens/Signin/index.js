import React, { useState, useEffect, useRef } from "react";
import {
  Keyboard,
  Image,
  StatusBar,
  Animated,
  TouchableOpacity,
  Platform,
  View,
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
import { loginRequest } from "./actions";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { Internetcomponent } from "../Utilities/helpers";
import { useToast } from "react-native-toast-notifications";
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";
function SignIn(props) {
  const toast = useToast();
  const _logoAnimate = useState(new Animated.ValueXY({ x: 100, y: 50 }))[0];
  const _contentAnimate = useState(new Animated.Value(0))[0];

  const onClickBack = () => {
    Keyboard.dismiss();
    props.navigation.navigate("login");
  };

  const loginValidationSchema = yup.object().shape({
    email: yup.string().required("Email Address or Mobile number is required"),
    password: yup.string().required("Password is required"),
  });
  const formikRef = useRef(null);
  const submitHandler = (values, { resetForm, setFieldError }) => {
    // resetForm();
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mob = /^\d{8,}$/;
    if (isNaN(values.email)) {
      if (reg.test(values.email.trim()) === false) {
        setFieldError("email", "Invalid email");
      } else {
        props.loginRequest(
          values.email,
          values.password,
          toastMessage,
          props.navigation
        );
      }
    } else if (mob.test(values.email.trim()) === false) {
      setFieldError("email", "Please enter valid mobile number");
    } else {
      props.loginRequest(
        values.email,
        values.password,
        toastMessage,
        props.navigation
      );
    }
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
      {Platform.OS === "ios" ? (
        <HeaderRow customStyle={styles.headerContainer}>
          <Flex customStyle={{ flex: 1 }}>
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
                  isTablet() ? styles.headerLogoTablet : styles.headerLogoMobile
                }
                resizeMode="contain"
              />
            </Animated.View>
          </Flex>
        </View>
      )}
      {/* form input */}
      <Formik
        ref={formikRef}
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={submitHandler}
      >
        {({ handleSubmit, values, isValid, setFieldError }) => (
          <>
            <Animated.View
              style={[styles.animateContainer, { opacity: _contentAnimate }]}
            >
              <Flex customStyle={styles.formContainer}>
                <Field
                  component={Input}
                  name="email"
                  placeholder="Email or Mobile Number"
                  keyboardType="email-address"
                  fontcolor="white"
                />
                <Field
                  component={Input}
                  name="password"
                  placeholder="Password"
                  secureTextEntry={true}
                  fontcolor="white"
                />
                <TouchableOpacity
                  style={styles.forCont}
                  onPress={() => props.navigation.navigate("ForgotPassword")}
                >
                  <SmallText
                    text="Forgot Password?"
                    customStyle={{
                      ...styles.forgot,
                    }}
                  />
                </TouchableOpacity>
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
                    text="Sign In"
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
    error: state.LoginReducer.error,
    loading: state.LoginReducer.loading,
    network: state.network.isConnected,
  };
};
const mapDispatchToProps = (dispatch) => ({
  loginRequest: (email, password, alertsuccess, navigator) =>
    dispatch(loginRequest(email, password, alertsuccess, navigator)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
