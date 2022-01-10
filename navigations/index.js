import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
 *  Screens
 **/
import Loading from "../screens/Loading";
import Confirmation from "../screens/Confirmation";
import LoginScreen from "../screens/Login";
import SignUp from "../screens/Signup";
import SignupVerification from "../screens/Signup/Vefication";
import SignInScreen from "../screens/Signin";
import ScanSignInScreen from "../screens/ScanSignIn";
import ScanCodeScreen from "../screens/Customer/ScanScode";
import SignupPaymentDetails from "../screens/Signup/PaymentDetails";
import CustomerScreens from "./customer";
import VendorScreens from "./vendorTabs";
import ForgotPassword from "../screens/ForgotPassword";
import ChangePassword from "../screens/ChangePassword";
import CreateCode from "../screens/Vendor/CreateCode";
import Intro from "../screens/Intro";
import WebScreen from "../components/Layouts/webScreen";
const Stack = createStackNavigator();
import { navigationRef } from "../RootNavigation";
import * as RootNavigation from "../RootNavigation";
import { fcmService } from "../FCMService";
import { localNotificationService } from "../LocalNotificatonService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Scanned from "../screens/Customer/Scanned";
import EmailScreen from "../screens/Email";
const screenOptionStyle = {
  headerShown: false,
};

export function Route({ navigation }) {
  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);

    function onRegister(token) {
      console.log("[App] onRegister: ", token);
    }

    function onNotification(notify) {
      console.log("[App] onNotification: ", notify);
      const options = {
        soundName: "default",
        playSound: true, //,
      };
      localNotificationService.showNotification(
        0,
        notify.notification.title,
        notify.notification.body,
        notify,
        options
      );
    }

    function onOpenNotification(notify) {
      console.log(notify);
    }

    return () => {
      console.log("[App] unRegister");
      fcmService.unRegister();
      localNotificationService.unregister();
    };
  }, []);
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="loading"
      headerMode="none"
    >
      <Stack.Screen name="loading" component={Loading} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="confirmation" component={Confirmation} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="signup-verification" component={SignupVerification} />
      <Stack.Screen name="signup-payment" component={SignupPaymentDetails} />
      <Stack.Screen name="signin" component={SignInScreen} />
      <Stack.Screen name="scan-signin" component={ScanSignInScreen} />
      <Stack.Screen name="scancode" component={ScanCodeScreen} />
      <Stack.Screen name="customer" component={CustomerScreens} />
      <Stack.Screen name="vendor-screen" component={VendorScreens} />
      <Stack.Screen name="CreateCode" component={CreateCode} />
      <Stack.Screen name="WebScreen" component={WebScreen} />
      <Stack.Screen name="Scanned" component={Scanned} />
    </Stack.Navigator>
  );
}
