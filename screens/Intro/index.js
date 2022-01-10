import { Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import globalStyle from "@globalStyle";

const Simple = ({ navigation, route }) => {
  const onDone = () => {
    const type = route.params.type;
    if (type === "vendor") {
      navigation.navigate("vendor-screen", { screen: "Queue" });
    } else if (type === "customer") {
      navigation.navigate("customer");
    }
  };
  return (
    <Onboarding
      onDone={() => onDone()}
      showSkip={false}
      pages={[
        {
          backgroundColor: globalStyle.darkGray,
          image: (
            <Image
              source={require("../../assets/LoginLogo.png")}
              style={{ height: 100, width: 100, resizeMode: "contain" }}
            />
          ),
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          subtitle:
            "Suspendisse eget lacus vestibulum metus placerat semper. Nam vitae eros tortor. Duis quis sagittis magna. Nullam lorem massa, luctus ut elit commodo, aliquam volutpat leo. Suspendisse ex est, feugiat sed orci ut, condimentum aliquet mauris. Aliquam a feugiat magna",
        },
        {
          backgroundColor: globalStyle.darkGray,
          image: (
            <Image
              source={require("../../assets/LoginLogo.png")}
              style={{ height: 100, width: 100, resizeMode: "contain" }}
            />
          ),
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          subtitle:
            "Suspendisse eget lacus vestibulum metus placerat semper. Nam vitae eros tortor. Duis quis sagittis magna. Nullam lorem massa, luctus ut elit commodo, aliquam volutpat leo. Suspendisse ex est, feugiat sed orci ut, condimentum aliquet mauris. Aliquam a feugiat magna",
        },
        {
          backgroundColor: globalStyle.darkGray,
          image: (
            <Image
              source={require("../../assets/LoginLogo.png")}
              style={{ height: 100, width: 100, resizeMode: "contain" }}
            />
          ),
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          subtitle:
            "Suspendisse eget lacus vestibulum metus placerat semper. Nam vitae eros tortor. Duis quis sagittis magna. Nullam lorem massa, luctus ut elit commodo, aliquam volutpat leo. Suspendisse ex est, feugiat sed orci ut, condimentum aliquet mauris. Aliquam a feugiat magna",
        },
      ]}
    />
  );
};

export default Simple;
