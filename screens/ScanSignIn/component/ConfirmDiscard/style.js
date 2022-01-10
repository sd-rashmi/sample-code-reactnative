import { StyleSheet } from "react-native";
import globalStyle from "@globalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  discardContainer: {
    flex: 0,
    backgroundColor: globalStyle.gray,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  cancelContainer: {
    flex: 0,
    marginTop: 10,
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  divider: {
    flex: 1,
    marginVertical: 15,
    width: "100%",
    borderBottomWidth: 0.7,
    borderBottomColor: globalStyle.midDarkGray,
  },
});

export default styles;
