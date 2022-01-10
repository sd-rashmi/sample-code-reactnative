import React, { useState, useEffect } from "react";
import {
  Keyboard,
  Image,
  Animated,
  Platform,
  View,
  TouchableOpacity,
} from "react-native";
import {
  FlexCol,
  Flex,
  Button,
  SmallText,
  BoldText,
  Input,
  ScrollView,
  HeaderRow,
  BottomLine,
} from "@components";
import { isTablet } from "react-native-device-info";
import globalStyle from "@globalStyle";
import styles from "./style";
import { changepasswordRequest } from "./actions";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { Internetcomponent } from "../Utilities/helpers";
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";
function ChangePassword(props) {
  const toast = useToast();
  const _logoAnimate = useState(new Animated.ValueXY({ x: 100, y: 50 }))[0];
  const _contentAnimate = useState(new Animated.Value(0))[0];
  const [token, settoken] = useState(null);
  const [role, setrole] = useState(null);
  useEffect(() => {
    readData();
    return () => {};
  }, []);

  const readData = async () => {
    try {
      const tok = await AsyncStorage.getItem("Token");
      const rol = await AsyncStorage.getItem("Role");
      if (tok !== "") {
        settoken(tok);
        setrole(rol);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onClickBack = () => {
    Keyboard.dismiss();
    props.navigation.goBack();
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

  const loginValidationSchema = yup.object().shape({
    CurrentPassword: yup
      .string()
      .required("Current Password is required")
      .min(6, "Current Password must be atleast 6 characters long"),
    NewPassword: yup
      .string()
      .required("New Password is required")
      .min(6, "New Password must be atleast 6 characters long")
      .notOneOf(
        [yup.ref("CurrentPassword"), null],
        "New Password must be different from current password"
      ),
    ConfirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .min(6, "Confirm Password must be atleast 6 characters long")
      .oneOf([yup.ref("NewPassword"), null], "Passwords must match"),
  });

  const submitHandler = (values, { resetForm }) => {
    props.changepasswordRequest(
      values.CurrentPassword,
      values.NewPassword,
      toastMessage,
      props.navigation,
      token
    );
    resetForm();
  };

  return (
    <ScrollView
      backgroundColor={
        role !== null && role === "customer" ? "#071D22" : globalStyle.lightgrey
      }
      enableScroll={false}
    >
      {props.network === false ? <Internetcomponent /> : null}
      {/* header */}
      {Platform.OS === "ios" ? (
        <HeaderRow
          customStyle={{ flex: 1, padding: 5, alignItems: "flex-start" }}
        >
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
            style={[
              styles.animateHeaderContainer,
              { opacity: _contentAnimate },
            ]}
          >
            <FlexCol customStyle={styles.headerLblContainer}>
              <BoldText
                text="CHANGE"
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
                color={globalStyle.green}
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
                  text="CHANGE"
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
      {/* form */}
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          CurrentPassword: "",
          NewPassword: "",
          ConfirmPassword: "",
        }}
        onSubmit={submitHandler}
      >
        {({ handleSubmit, values, isValid }) => (
          <>
            <Animated.View
              style={[styles.animateContainer, { opacity: _contentAnimate }]}
            >
              <Flex customStyle={styles.formContainer}>
                <Field
                  component={Input}
                  name="CurrentPassword"
                  placeholder="Current Password"
                  secureTextEntry={true}
                  fontcolor={
                    role !== null && role === "customer" ? "white" : "black"
                  }
                />
                <Field
                  component={Input}
                  name="NewPassword"
                  placeholder="New Password"
                  secureTextEntry={true}
                  fontcolor={
                    role !== null && role === "customer" ? "white" : "black"
                  }
                />
                <Field
                  component={Input}
                  name="ConfirmPassword"
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  fontcolor={
                    role !== null && role === "customer" ? "white" : "black"
                  }
                />
              </Flex>
            </Animated.View>
            {/* buttons */}
            <FlexCol customStyle={styles.buttonContainer}>
              <Button
                onClickEvent={
                  isValid
                    ? handleSubmit
                    : () => {
                        console.log(values);
                      }
                }
                customStyle={styles.btnRegister}
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
                  customStyle={styles.btnAccnt}
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
            </FlexCol>
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
    error: state.ChangePassword.error,
    loading: state.ChangePassword.loading,
    network: state.network.isConnected,
  };
};
const mapDispatchToProps = (dispatch) => ({
  changepasswordRequest: (
    currentpassword,
    newpassword,
    alertsuccess,
    navigator,
    token
  ) =>
    dispatch(
      changepasswordRequest(
        currentpassword,
        newpassword,
        alertsuccess,
        navigator,
        token
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
