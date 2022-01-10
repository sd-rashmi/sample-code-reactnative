import React from "react";
import { Text, StyleSheet } from "react-native";
import propTypes from "prop-types";

// props validation
HeavyText.propTypes = {
  text: propTypes.string,
  customStyle: propTypes.object,
};

function HeavyText({ customStyle, text }) {
  return <Text style={{ ...styles.text, ...customStyle }}> {text} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "SFUIDisplay-Heavy",
    letterSpacing: 1.5,
  },
});

export default HeavyText;
