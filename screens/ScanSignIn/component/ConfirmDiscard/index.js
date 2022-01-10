import React from "react";
import { Flex, FlexCol, BoldText, SmallText, Button } from "@components";
import { isTablet } from "react-native-device-info";
import { TouchableOpacity } from "react-native";
import globalStyle from "@globalStyle";
import styles from "./style";

function ConfirmDiscard(props) {
  return (
    <Flex customStyle={styles.container}>
      <FlexCol customStyle={styles.discardContainer}>
        <BoldText
          text="Are you sure you want to discard your offer?"
          customStyle={{
            color: globalStyle.midDarkGray,
            textAlign: "center",
            fontSize: isTablet() ? globalStyle.tabletDescTxt : 14,
          }}
        />
        <FlexCol customStyle={styles.divider} />
        <TouchableOpacity onPress={props.cancelOrder}>
          <SmallText
            text="Discard Order"
            customStyle={{
              color: globalStyle.orange,
              fontSize: isTablet()
                ? globalStyle.tabletButtonTxt
                : globalStyle.phoneButtonTxt,
            }}
          />
        </TouchableOpacity>
      </FlexCol>

      <Button
        customStyle={styles.cancelContainer}
        onClickEvent={props.closeModal}
      >
        <BoldText
          text="Cancel"
          customStyle={{
            color: globalStyle.blue,
            fontSize: isTablet()
              ? globalStyle.tabletButtonTxt
              : globalStyle.phoneButtonTxt,
          }}
        />
      </Button>
    </Flex>
  );
}

export default ConfirmDiscard;
