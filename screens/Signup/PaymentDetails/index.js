import React, { useState, useEffect } from "react";
import { Keyboard, Text, Image, Animated } from "react-native";
import {
  FlexCol,
  Flex,
  Button,
  SmallText,
  BoldText,
  Input,
  ScrollView,
  HeaderRow,
  StripeCard,
} from "@components";
import { isTablet } from "react-native-device-info";
import globalStyle from "@globalStyle";
import styles from "./style";

function PaymentDetails(props) {
  let { ...user } = props.route.params;
  const _logoAnimate = useState(new Animated.ValueXY({ x: 100, y: 50 }))[0];
  const _contentAnimate = useState(new Animated.Value(0))[0];

  const [businessNameValue, setBusinessName] = useState("");
  const [TAsValue, setTAs] = useState("");
  const [abnValue, setAbn] = useState("");
  const [addressValue, setAddress] = useState("");
  const [suburdValue, setSuburdValue] = useState("");
  const [postCodeValue, setPostCode] = useState("");
  const [stateValue, setState] = useState("");
  const [countryValue, setCountry] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [stripeCard, setStripeCard] = useState(false);

  const onClickRegistration = async () => {
    try {
      Keyboard.dismiss();
      props.navigation.navigate("signup-verification", {
        user: "",
        defaultToken: "",
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const onClickBack = () => {
    Keyboard.dismiss();
    props.navigation.goBack();
  };

  const onCheckStatus = async (paymentResponse) => {
    let jsonResponse = JSON.parse(paymentResponse);
    setStripeCard(jsonResponse);
    // perform operation to check payment status
    // console.log(jsonResponse);
    // try {
    // 	const stripeResponse = await axios.post(`${SOCKET_URL}/payment`, {
    // 		email: 'jimperalta@remotodojo.com',
    // 		product: {
    // 			id: '5eruyt35eggr76476236523t3',
    // 			description: 'First subcription',
    // 			amount: parseInt(39.95 * 100)
    // 		},
    // 		authToken: jsonResponse
    // 	});

    // 	if (stripeResponse) {
    // 		const { paid } = stripeResponse.data;
    // 		if (paid === true) {
    // 			setShowCardPayment(false);
    // 		}
    // 	}
    // } catch (error) {
    // 	console.log(error);
    // }
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

  return (
    <ScrollView backgroundColor="#071D22" enableScroll={true}>
      {/* header */}
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
              text="ADDITIONAL DETAILS"
              customStyle={{
                ...styles.welcomeLbl,
                fontSize: isTablet()
                  ? globalStyle.tabletSubTitleTxt
                  : globalStyle.tabletButtonTxt,
              }}
            />
          </FlexCol>
        </Animated.View>
      </HeaderRow>
      {/* form */}
      <Animated.View
        style={[styles.animateContainer, { opacity: _contentAnimate }]}
      >
        <FlexCol customStyle={styles.formContainer}>
          <Input
            value={businessNameValue}
            onChange={setBusinessName}
            placeholderLabel="Business Name"
          />
          <Input value={TAsValue} onChange={setTAs} placeholderLabel="T/As" />
          <Input
            value={abnValue}
            onChange={setAbn}
            placeholderLabel="ABN"
            keyboardType="numeric"
          />
          <Input
            value={addressValue}
            onChange={setAddress}
            placeholderLabel="Address"
          />
          <Input
            value={suburdValue}
            onChange={setSuburdValue}
            placeholderLabel="Suburd"
          />
          <Input
            value={postCodeValue}
            onChange={setPostCode}
            placeholderLabel="Postcode"
          />
          <Input
            value={stateValue}
            onChange={setState}
            placeholderLabel="State"
          />
          <Input
            value={countryValue}
            onChange={setCountry}
            placeholderLabel="Country"
          />

          <Text style={styles.errorMssg}> {errorMessage} </Text>
        </FlexCol>
      </Animated.View>
      <Flex customStyle={{ paddingVertical: 10 }}>
        <StripeCard
          data={{
            email: "jimkarlperalta7@gmail.com",
            address: addressValue,
            city: suburdValue,
            state: stateValue,
            zip: postCodeValue,
            country: countryValue,
          }}
          onCheckStatus={onCheckStatus}
        />
      </Flex>
      {/* buttons */}
      <FlexCol customStyle={styles.buttonContainer}>
        <Button onClickEvent={onClickBack} customStyle={styles.btnAccnt}>
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
        <Button
          onClickEvent={onClickRegistration}
          customStyle={styles.btnRegister}
        >
          <SmallText
            text="Continue"
            customStyle={{
              ...styles.innerTextWhite,
              fontSize: isTablet()
                ? globalStyle.tabletButtonTxt
                : globalStyle.phoneButtonTxt,
            }}
          />
        </Button>
      </FlexCol>
    </ScrollView>
  );
}

export default PaymentDetails;
