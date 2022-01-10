import React from "react";
import { StyleSheet } from "react-native";
import { Flex, Circle } from "../";

function BigTicket({ ticketStyle, isReady, children }) {
  return (
    <Flex
      customStyle={{
        ...styles.container,
        ...ticketStyle.ticket,
      }}
    >
      <Flex
        customStyle={{
          ...styles.border,
          borderColor: isReady ? "#009A74" : "#071D22",
        }}
      >
        <Circle customStyle={ticketStyle.circle} />
        {children}
      </Flex>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  border: {
    backgroundColor: "white",
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
});

export default BigTicket;
