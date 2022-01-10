import React, { useState, useEffect, useRef } from "react";
import {
  Keyboard,
  Text,
  Image,
  Animated,
  View,
  Platform,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  FlexCol,
  Flex,
  FlexRow,
  Button,
  SmallText,
  BoldText,
  Input,
  ScrollView,
  HeaderRow,
  Switch,
  BottomLine,
} from "@components";
import { isTablet } from "react-native-device-info";
import globalStyle from "@globalStyle";
import styles from "./style";
import { RegisterRequest } from "./actions";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { Internetcomponent } from "../Utilities/helpers";
import { useToast } from "react-native-toast-notifications";
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PhoneInput from "react-native-phone-number-input";
function SignUp(props) {
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef();
  const formRef = React.useRef();
  const toast = useToast();
  const _logoAnimate = useState(new Animated.ValueXY({ x: 100, y: 50 }))[0];
  const _contentAnimate = useState(new Animated.Value(0))[0];

  const [isVendor, setIsVendor] = useState(false);

  const toggleSwitchVendor = () =>
    setIsVendor((previousState) => !previousState);

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

  const registrationValidationSchema = yup.object().shape({
    fullname: yup
      .string()
      .required("Full Name is required")
      .min(3, "Full Name must be atleast 3 characters long")
      .matches(
        /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
        "Full Name can only contain Spaces and A-Z"
      ),
    phone: yup
      .string()
      .required("Mobile number is required")
      .min(8, " Please enter valid mobile number"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be atleast 6 characters long"),
    confirmpassword: yup
      .string()
      .required("Confirm password is required")
      .min(6, "Confirm password must be atleast 6 characters long")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    businessname: yup
      .string()
      .required("Business Name is required")
      .min(3, "Business Name must be atleast 3 characters long"),
    abn: yup
      .string()
      .required("ABN Number is required")
      .min(11, "ABN Number must be atleast 11 characters long")
      .matches(/^(\d *?){11}$/, "Invalid ABN Number"),
  });

  const loginValidationSchema = yup.object().shape({
    fullname: yup
      .string()
      .required("Full Name is required")
      .min(3, "Full Name must be atleast 3 characters long")
      .matches(
        /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
        "Full Name can only contain Spaces and A-Z"
      ),
    phone: yup
      .string()
      .required("Mobile number is required")
      .min(8, " Please enter valid mobile number"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be atleast 6 characters long"),
    confirmpassword: yup
      .string()
      .required("Confirm password is required")
      .min(6, "Confirm password must be atleast 6 characters long")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const validateABN = (abn) => {
    var isValid = true;
    abn = abn.toString();
    //remove all spaces
    abn = abn.replace(/\s/g, "");
    //0. ABN must be 11 digits long
    isValid &= abn && /^\d{11}$/.test(abn);
    if (isValid) {
      var weightedSum = 0;
      var weight = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
      //Rues: 1,2,3
      for (var i = 0; i < weight.length; i++) {
        weightedSum += (parseInt(abn[i]) - (i === 0 ? 1 : 0)) * weight[i];
      }
      //Rules: 4,5
      isValid &= weightedSum % 89 === 0;
    }
    return isValid;
  };

  const submitHandler = (values, { resetForm, setFieldError }) => {
    const countrycode = phoneInput.current?.getCallingCode();
    const numbercode =
      phoneInput.current?.getNumberAfterPossiblyEliminatingZero();
    const mnumber = numbercode.number;

    if (isVendor) {
      if (validateABN(values.abn) === 1) {
        props.RegisterRequest(
          values.fullname,
          mnumber,
          values.email,
          values.password,
          "2",
          toastMessage,
          props.navigation,
          values.businessname,
          values.abn,
          countrycode
        );
      } else {
        setFieldError("abn", "Please enter valid abn number");
      }
    } else {
      props.RegisterRequest(
        values.fullname,
        mnumber,
        values.email,
        values.password,
        "1",
        toastMessage,
        props.navigation,
        values.businessname,
        values.abn,
        countrycode
      );
    }
  };

  const checknumber = (text) => {
    if (text.length === 0) {
      formRef.current.setFieldError("phone", "Mobile number is required");
    } else {
      const isvalid = phoneInput.current?.isValidNumber(text);
      if (!isvalid) {
        formRef.current.setFieldError(
          "phone",
          "Please enter valid mobile number"
        );
      } else {
        formRef.current.setFieldError("phone", null);
        formRef.current.setFieldValue("phone", text);
      }
    }
  };

  return (
    <ScrollView backgroundColor="#071D22" enableScroll={true}>
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
                text="SIGN UP"
                customStyle={{
                  ...styles.signUplbl,
                  fontSize: isTablet()
                    ? globalStyle.tabletSubTitleTxt
                    : globalStyle.phoneTitleTxt,
                }}
              />
              <BoldText
                text="WELCOME"
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
                  text="SIGN UP"
                  customStyle={{
                    ...styles.signUplbl,
                    fontSize: isTablet()
                      ? globalStyle.tabletSubTitleTxt
                      : globalStyle.phoneTitleTxt,
                  }}
                />
                <BoldText
                  text="WELCOME"
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
        innerRef={formRef}
        validationSchema={
          isVendor ? registrationValidationSchema : loginValidationSchema
        }
        initialValues={{
          fullname: "",
          phone: "",
          email: "",
          password: "",
          confirmpassword: "",
          businessname: "",
          abn: "",
        }}
        onSubmit={submitHandler}
      >
        {({ handleSubmit, values, isValid, errors, setFieldValue }) => (
          <>
            <Animated.View
              style={[styles.animateContainer, { opacity: _contentAnimate }]}
            >
              <Flex customStyle={styles.formContainer}>
                {showMessage && (
                  <View style={{ backgroundColor: "red" }}>
                    <Text>Value : {value}</Text>
                    <Text>Formatted Value : {formattedValue}</Text>
                    <Text>Valid : {valid ? "true" : "false"}</Text>
                  </View>
                )}

                <Field
                  component={Input}
                  name="fullname"
                  placeholder="Full Name"
                  fontcolor="white"
                />

                <PhoneInput
                  ref={phoneInput}
                  defaultValue={values.phone}
                  defaultCode="AU"
                  layout="second"
                  onChangeText={(text) => checknumber(text)}
                  onChangeFormattedText={(text) => {
                    checknumber(text);
                  }}
                  containerStyle={{
                    padding: 0,
                    width: "100%",
                    backgroundColor: globalStyle.darkGrey,
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                  }}
                  textContainerStyle={{
                    backgroundColor: globalStyle.darkGrey,
                    ontSize: 12,
                    height: 45,
                    paddingVertical: 0,
                    color: "red",
                  }}
                  codeTextStyle={{ color: "grey" }}
                  textInputProps={{
                    color: "#FFF",
                    placeholderTextColor: "grey",
                    selectionColor: "grey",
                  }}
                  renderDropdownImage={
                    <VectorIcon name="chevron-down" color="grey" size={20} />
                  }
                />
                {errors["phone"] && (
                  <Text style={styles.errorText}>{errors["phone"]}</Text>
                )}
                <Field
                  component={Input}
                  name="email"
                  placeholder="Email"
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
                <Field
                  component={Input}
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  fontcolor="white"
                />
                {isVendor ? (
                  <View>
                    <Field
                      component={Input}
                      name="businessname"
                      placeholder="Business Name"
                      fontcolor="white"
                    />
                    <Field
                      component={Input}
                      name="abn"
                      placeholder="ABN No"
                      fontcolor="white"
                      keyboardType="numeric"
                      maxLength={14}
                    />
                  </View>
                ) : null}
                <FlexRow customStyle={{ paddingVertical: 20 }}>
                  <SmallText
                    text="Become a Q&amp;GO Vendor"
                    customStyle={{
                      ...styles.innerTextWhite,
                      fontSize: isTablet()
                        ? globalStyle.tabletButtonTxt
                        : globalStyle.phoneButtonTxt,
                    }}
                  />
                  <Switch isOn={isVendor} onToggle={toggleSwitchVendor} />
                </FlexRow>
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
                  text="Create Account"
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
    error: state.RegisterReducer.error,
    loading: state.RegisterReducer.loading,
    network: state.network.isConnected,
  };
};
const mapDispatchToProps = (dispatch) => ({
  RegisterRequest: (
    name,
    mobilenumber,
    email,
    password,
    role,
    alertsuccess,
    navigator,
    businessname,
    abnno,
    countrycode
  ) =>
    dispatch(
      RegisterRequest(
        name,
        mobilenumber,
        email,
        password,
        role,
        alertsuccess,
        navigator,
        businessname,
        abnno,
        countrycode
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
