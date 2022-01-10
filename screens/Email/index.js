import React, { useState, useEffect } from "react";
import {
  Image,
  StatusBar,
  Animated,
  TouchableOpacity,
  Platform,
  View,
  Text,
} from "react-native";
import {
  BoldText,
  FlexCol,
  ScrollView,
  HeaderRow,
  Flex,
  BottomLine,
  SmallText,
} from "@components";
import { isTablet } from "react-native-device-info";
import styles from "./style";
import globalStyle from "@globalStyle";
import Spinner from "react-native-loading-spinner-overlay";
import { Internetcomponent } from "../Utilities/helpers";
import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";
const confirmationDescription = `To make sure you are really you, we've send you an email with a link to confirm your details.`;
const confirmationDescrip = `Simply click the link in our message and you will be signed in.`;
function EmailScreen(props) {
  const _logoAnimate = useState(new Animated.ValueXY({ x: 100, y: 50 }))[0];
  const _contentAnimate = useState(new Animated.Value(0))[0];

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
                  text="ONE LAST STEP"
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
      <Image
        source={require("../../assets/notification.png")}
        style={{
          alignSelf: "center",
          width: 70,
          height: 70,
          tintColor: globalStyle.green,
        }}
      />
      <BoldText
        text={`PLEASE CHECK ${"\n"} YOUR EMAIL`}
        customStyle={{
          ...styles.allowNotifLbl,
          fontSize: isTablet()
            ? globalStyle.tabletSubTitleTxt
            : globalStyle.phoneSubTitleTxt,
        }}
      />

      <SmallText
        text={confirmationDescription}
        customStyle={{
          ...styles.confirmationDescriptionLbl,
          fontSize: isTablet()
            ? globalStyle.tabletButtonTxt
            : globalStyle.phoneDescTxt,
        }}
      />
      <SmallText
        text={confirmationDescrip}
        customStyle={{
          ...styles.confirmationDescriptionLbll,
          fontSize: isTablet()
            ? globalStyle.tabletButtonTxt
            : globalStyle.phoneDescTxt,
        }}
      />
      <View
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 100 }}
      >
        <Text
          style={{
            ...styles.txt,
            fontSize: isTablet()
              ? globalStyle.tabletButtonTxt
              : globalStyle.phoneDescTxt,
          }}
        >{`Didn't receive our email?`}</Text>
        <Text
          style={{
            ...styles.txt,
            fontSize: isTablet()
              ? globalStyle.tabletButtonTxt
              : globalStyle.phoneDescTxt,
            marginLeft: 4,
            color: globalStyle.green,
            textDecorationLine: "underline",
          }}
        >{`Re-send it      `}</Text>
        <VectorIcon
          name="arrow-right"
          color={globalStyle.green}
          size={18}
          style={{ position: "absolute", right: 0, bottom: 0 }}
        />
      </View>
      <BottomLine />
      <Spinner visible={props.loading} />
    </ScrollView>
  );
}

export default EmailScreen;
