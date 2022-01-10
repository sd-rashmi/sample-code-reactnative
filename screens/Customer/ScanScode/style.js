import { StyleSheet, Dimensions } from "react-native";
import globalStyle from "@globalStyle";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency
const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "#FFF";

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#FFF";

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#243336",
  },
  headerContainer: {
    flex: 0,
    backgroundColor: globalStyle.darkGreen,
    paddingVertical: 10,
    alignItems: "center",
  },
  headerBackContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    left: 5,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  footerRectangle: {
    borderWidth: 5,
    borderColor: "#009A74",
    backgroundColor: "white",
  },
  centerText: {
    alignSelf: "center",
    textAlign: "center",
    color: "white",
    top: 50,
    zIndex: 2,
  },
  backLabel: {
    color: "#009A74",
  },
  scanCodelbl: {
    color: "white",
  },
  scanIcon: {
    alignItems: "center",
    top: -20,
    zIndex: 2,
  },
  logo: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  backBtnContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    left: 5,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25,
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
  },
  scanLabel: {
    color: "#A7A7A7",
    alignSelf: "center",
    padding: 4,
    // top: 15
  },
  footerCircleBg: {
    // flex: 1,
    minWidth: 90,
    maxWidth: 90,
    minHeight: 90,
    maxHeight: 90,
    // bottom: 30,
    zIndex: 2,
    borderRadius: 100 / 2,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#009A74",
    position: "absolute",
    bottom: 10,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#20363A",
    zIndex: 2,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 105,
    backgroundColor: "#20363A",
    borderRadius: 10,
  },
  triangleDown: {
    transform: [{ rotate: "180deg" }],
  },
  tap: {
    zIndex: 2,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 120,
    backgroundColor: "#20363A",
    borderRadius: 10,
  },
  goint: {
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: "#7B837E",
    width: 90,
    height: 90,
    alignSelf: "center",
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    alignSelf: "center",
  },
});

export default styles;
