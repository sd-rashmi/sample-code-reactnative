import React, { useEffect, useState } from "react";
import { Image, BackHandler, StatusBar, Animated } from "react-native";
import {
  SmallText,
  BoldText,
  FlexCol,
  Button,
  ScrollView,
  Flex,
  HeaderRow,
  Icon_Nofitication,
  BottomLine,
} from "@components";
import PushNotification from "react-native-push-notification";
import { Platform } from "react-native";
import { getDeviceId, isTablet } from "react-native-device-info";
import globalStyle from "@globalStyle";
import styles from "./style";
import VectorIcon from "react-native-vector-icons/FontAwesome5";
function Confirmation(props) {
  const _logoAnimate = useState(new Animated.ValueXY({ x: 1, y: 200 }))[0];
  const _contentAnimate = useState(new Animated.Value(0))[0];

  const confirmationDescriptionLbl = `To make sure you get notified when${"\n"} your tickets is ready, please enable${"\n"} push notification for Q&GO${"\n"} on your device.`;
  const confirmationDescription = `To make sure you get notified when${"\n"} your tickets is ready, Q&go uses Push notifications to  send alerts directly to your device.`;
  const confirmationDescrip = `You may disable this in settings, however you may not be notified of orders.`;
  /**
   * On click Continue button
   * Checked platform
   */
  const onClickContinue = () => {
    setUpPushNotification();
    if (Platform.OS === "ios") {
      PushNotification.requestPermissions();
      props.navigation.navigate("login");
    } else {
      props.navigation.navigate("login");
    }
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });

    // animate header logo
    setTimeout(async () => {
      Animated.timing(_logoAnimate, {
        toValue: { x: 0, y: 0 },
        duration: 250,
        useNativeDriver: false,
      }).start();
    }, 500);
    // animate content logo
    setTimeout(async () => {
      Animated.timing(_contentAnimate, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 1000);
  }, []);

  /**
   * Create channel push notificaio
   */
  const setUpPushNotification = () => {
    PushNotification.configure({
      onRegister: (token) => {
        props.navigation.navigate("login");
      },
      onNotification: (notification) => {
        console.log("NOTIFICATION:", notification);
      },
      onRegistrationError: (err) => {
        console.error(err.message, err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      senderID: "12345",
      popInitialNotification: true,
      requestPermissions: false,
    });

    PushNotification.createChannel({
      channelId: `qgo-notification-channel-${getDeviceId()}`,
      channelName: "qgo-notification-channel",
      channelDescription: "qgo-notification-channel-description",
      soundName: "default",
      importance: 4,
      vibrate: true,
    });
  };

  return (
    <ScrollView backgroundColor={globalStyle.darkGreen} enableScroll={false}>
      <StatusBar backgroundColor={globalStyle.darkGreen} />
      <HeaderRow customStyle={styles.headerContainer}>
        <Flex customStyle={{ flex: 1 }}>
          <Animated.View style={_logoAnimate.getLayout()}>
            <Image
              source={require("@asset/LoginLogo.png")}
              style={styles.logoImage}
              resizeMode="contain"
              testID="app-logo"
            />
          </Animated.View>
        </Flex>
      </HeaderRow>
      <Animated.View
        style={[styles.animateContainer, { opacity: _contentAnimate }]}
      >
        <FlexCol customStyle={styles.quickContainer}>
          <BoldText
            text={Platform.OS === "ios" ? "ONE QUICK STEP" : "JUST SO YOU KNOW"}
            customStyle={{
              ...styles.quickStepLbl,
              fontSize: 24,
            }}
          />
          <BoldText
            text={"BEFORE WE START"}
            customStyle={{
              ...styles.beforeLbl,
              fontSize: 22,
            }}
          />
        </FlexCol>

        {Platform.OS === "ios" ? (
          <FlexCol customStyle={styles.allowContainer}>
            <Icon_Nofitication
              width="45"
              height="45"
              color={globalStyle.green}
            />
            <BoldText
              text={`PLEASE ALLOW ${"\n"} PUSH NOTIFICATION`}
              customStyle={{
                ...styles.allowNotifLbl,
                fontSize: isTablet()
                  ? globalStyle.tabletSubTitleTxt
                  : globalStyle.phoneSubTitleTxt,
              }}
            />
            <SmallText
              text={confirmationDescriptionLbl}
              customStyle={{
                ...styles.confirmationDescriptionLbl,
                fontSize: isTablet()
                  ? globalStyle.tabletButtonTxt
                  : globalStyle.phoneDescTxt,
              }}
            />
          </FlexCol>
        ) : (
          <FlexCol customStyle={styles.allowContainer}>
            <VectorIcon name="bell" color={globalStyle.green} solid size={50} />
            <BoldText
              text={`WE'VE ENABLED${"\n"} PUSH NOTIFICATIONS`}
              customStyle={{
                ...styles.allowNotifLbl,
                fontSize: 20,
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
          </FlexCol>
        )}

        <FlexCol customStyle={styles.buttonContainer}>
          <Button
            onClickEvent={onClickContinue}
            customStyle={styles.btnContinue}
          >
            <SmallText
              text="Continue"
              customStyle={{
                ...styles.confirmationDescriptionLbl,
                fontSize: 18,
              }}
            />
          </Button>
        </FlexCol>
      </Animated.View>
      <BottomLine />
    </ScrollView>
  );
}

export default Confirmation;
