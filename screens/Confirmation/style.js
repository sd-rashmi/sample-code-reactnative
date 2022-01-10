import { Platform, StyleSheet } from "react-native";
import globalStyle from "@globalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.darkGreen,
    flexDirection: "column",
  },
  headerContainer: {
    flex: 1,
    padding: 10,
  },
  logoImage: {
    flex: 0,
    width: "90%",
    height: "90%",
    alignSelf: "center",
  },
  btnContinue: {
    backgroundColor: globalStyle.green,
    paddingVertical: 10,
    width: "75%",
    alignSelf: "center",
    justifyContent: "center",
    height: Platform.OS === "android" ? 45 : 50,
  },
  innerTextWhite: {
    color: "white",
  },
  beforeLbl: {
    color: "white",
    letterSpacing: 1,
    textAlign: "center",
  },
  quickStepLbl: {
    color: "#009A74",
    letterSpacing: 2,
    textAlign: "center",
  },
  allowNotifLbl: {
    letterSpacing: 1,
    color: "white",
    textAlign: "center",
  },
  confirmationDescriptionLbl: {
    color: "white",
    textAlign: "center",
    paddingHorizontal: 40,
  },
  confirmationDescriptionLbll: {
    color: "white",
    textAlign: "center",
    paddingHorizontal: 40,
    marginTop: 15,
  },
  quickContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  allowContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  animateContainer: {
    flex: 1,
  },
});

export default styles;
