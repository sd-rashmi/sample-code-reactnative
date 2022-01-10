import React from "react";
import { StatusBar, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoadingIndicator } from "@components";
import globalStyle from "@globalStyle";
function AuthLoadingScreen(props) {
  const checkAuth = async () => {
    try {
      const auth = await AsyncStorage.getItem("Token");
      const role = await AsyncStorage.getItem("Role");
      const Int = await AsyncStorage.getItem("Intro");
      if (auth !== null && auth !== "") {
        if (role == "customer") {
          props.navigation.navigate("customer");
        } else if (role === "vendor") {
          props.navigation.navigate("vendor-screen");
        }
      } else {
        props.navigation.navigate("confirmation");
      }
    } catch (error) {
      console.log("auth", error);
    }
  };
  checkAuth();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: globalStyle.darkGreen,
        justifyContent: "center",
      }}
    >
      <LoadingIndicator color="#009b88" />
      <StatusBar backgroundColor={globalStyle.darkGreen} />
    </View>
  );
}

export default AuthLoadingScreen;
