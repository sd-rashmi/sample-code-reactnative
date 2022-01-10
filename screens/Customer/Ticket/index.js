import React, { useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StatusBar,
  View,
  Platform,
} from "react-native";
import {
  BoldText,
  Flex,
  ScrollView,
  SmallText,
  FlexCol,
  HeaderRow,
  Icon_ArrowLeft,
  BigTicket,
  BottomLine,
} from "@components";
import { isTablet } from "react-native-device-info";
import globalStyle from "@globalStyle";
import styles from "./style";
import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { scannedRequest } from "../Scanned/actions";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { useToast } from "react-native-toast-notifications";
const FirstContentText = (status) => {
  if (status === "Ready") {
    return (
      <View>
        <BoldText
          text="YOUR ORDER IS"
          customStyle={{
            ...styles.contentText,
            fontSize: isTablet()
              ? globalStyle.tabletSubTitleTxt
              : globalStyle.phoneSubTitleTxt,
          }}
        />
        <BoldText
          text="READY FOR"
          customStyle={{
            ...styles.contentText,
            fontSize: isTablet()
              ? globalStyle.tabletSubTitleTxt
              : globalStyle.phoneSubTitleTxt,
          }}
        />
        <BoldText
          text="COLLECTION!"
          customStyle={{
            ...styles.contentText,
            fontSize: isTablet()
              ? globalStyle.tabletSubTitleTxt
              : globalStyle.phoneSubTitleTxt,
          }}
        />
      </View>
    );
  } else if (status === "Collected") {
    return (
      <View>
        <BoldText
          text="YOUR ORDER IS"
          customStyle={{
            ...styles.contentText,
            fontSize: isTablet()
              ? globalStyle.tabletSubTitleTxt
              : globalStyle.phoneSubTitleTxt,
          }}
        />
        <BoldText
          text="COLLECTED!"
          customStyle={{
            ...styles.contentText,
            fontSize: isTablet()
              ? globalStyle.tabletSubTitleTxt
              : globalStyle.phoneSubTitleTxt,
          }}
        />
      </View>
    );
  } else if (status === "Skipped") {
    return (
      <View>
        <BoldText
          text="YOUR ORDER IS"
          customStyle={{
            ...styles.contentText,
            fontSize: isTablet()
              ? globalStyle.tabletSubTitleTxt
              : globalStyle.phoneSubTitleTxt,
          }}
        />
        <BoldText
          text="SKIPPED!"
          customStyle={{
            ...styles.contentText,
            fontSize: isTablet()
              ? globalStyle.tabletSubTitleTxt
              : globalStyle.phoneSubTitleTxt,
          }}
        />
      </View>
    );
  } else {
    return (
      <View>
        <BoldText
          text="YOUR ORDER IS"
          customStyle={{
            ...styles.contentText,
            fontSize: isTablet()
              ? globalStyle.tabletSubTitleTxt
              : globalStyle.phoneSubTitleTxt,
          }}
        />
        <BoldText
          text="BEING PREPARED"
          customStyle={{
            ...styles.contentText,
            fontSize: isTablet()
              ? globalStyle.tabletSubTitleTxt
              : globalStyle.phoneSubTitleTxt,
          }}
        />
      </View>
    );
  }
};

function TicketScreen({ navigation, route, loading, scannedRequest }) {
  const onClickViewTickets = () => {
    navigation.navigate("dashboard");
  };
  const dd = route.params.ticket;
  console.log(dd);
  const toast = useToast();
  const [token, settoken] = useState(null);
  const [ticket, setticket] = useState([]);
  useEffect(() => {
    readData();
    const interval = setInterval(() => {
      readData();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const readData = async () => {
    try {
      const tok = await AsyncStorage.getItem("Token");
      if (tok !== "") {
        settoken(tok);
        scannedRequest(tok, dd.vendor_id, dd.order_no, toastMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const toastMessage = (msg) => {
    setticket([msg.data]);
  };

  const gettext = (item) => {
    if (item.order_status === "Ready") {
      return "Ready to Collect";
    } else if (item.order_status === "Preparing") {
      return "Preparing";
    } else if (item.order_status === "Collected") {
      return "Completed";
    } else if (item.order_status === "Skipped") {
      return "Skipped";
    }
  };

  const getcolor = (item) => {
    if (item.order_status === "Ready") {
      return globalStyle.green;
    } else if (item.order_status === "Preparing") {
      return globalStyle.darkGreen;
    } else if (item.order_status === "Collected") {
      return globalStyle.lightGreen;
    } else if (item.order_status === "Skipped") {
      return globalStyle.orange;
    }
  };

  return (
    <ScrollView
      backgroundColor={
        Platform.OS === "android" ? globalStyle.darkGreen : globalStyle.darkGray
      }
    >
      <StatusBar backgroundColor={globalStyle.darkGreen} />
      {Platform.OS === "ios" ? (
        <HeaderRow customStyle={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerBackContainer}
            onPress={onClickViewTickets}
          >
            <Icon_ArrowLeft width="13" height="13" color={globalStyle.green} />
            <SmallText
              text="All Tickets"
              customStyle={{
                ...styles.allTicketLbl,
                fontSize: isTablet()
                  ? globalStyle.tabletDescTxt
                  : globalStyle.phoneDescTxt,
              }}
            />
          </TouchableOpacity>
          <SmallText
            text="My Ticket"
            customStyle={{
              ...styles.myTicketLbl,
              fontSize: isTablet()
                ? globalStyle.tabletButtonTxt
                : globalStyle.phoneButtonTxt,
            }}
          />
          <Flex />
        </HeaderRow>
      ) : (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={onClickViewTickets}>
              <VectorIcon
                name="keyboard-backspace"
                color={"#FFF"}
                solid
                size={30}
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
            <SmallText
              text="Ticket"
              customStyle={{
                ...styles.myTicketLbl,
                fontSize: isTablet()
                  ? globalStyle.tabletButtonTxt
                  : globalStyle.phoneButtonTxt,
              }}
            />
          </View>
          <VectorIcon name="dots-vertical" color={"#FFF"} solid size={25} />
        </View>
      )}

      {ticket.length > 0 ? (
        <Flex customStyle={styles.content}>
          {FirstContentText(ticket[0].order_status)}
          <Image
            source={
              ticket[0].order_status === "Ready"
                ? require("@asset/GoReady.png")
                : require("@asset/GoIndeterminate.png")
            }
            style={styles.logo}
          />
        </Flex>
      ) : null}

      {ticket.length > 0 ? (
        <BigTicket
          ticketStyle={{
            ticket: styles.footer,
            circle: styles.ticketCircle,
          }}
          isReady={ticket[0].order_status === "Ready"}
        >
          <Flex customStyle={styles.footerContent}>
            <SmallText
              text="Your number is"
              customStyle={{
                ...styles.yourNumberLabel,
                fontSize: isTablet()
                  ? globalStyle.phoneButtonTxt
                  : globalStyle.tabletSmallTxt,
              }}
            />
            <BoldText
              text={`Q${ticket[0].order_no}`}
              customStyle={{
                ...styles.numberLabel,
                fontSize: isTablet()
                  ? globalStyle.tabletTitleTxt
                  : globalStyle.phoneTitleTxt,
              }}
              numberOfLines={2}
            />
          </Flex>
          <FlexCol
            customStyle={{
              ...styles.ticketSecondContainer,
              backgroundColor: getcolor(ticket[0]),
            }}
          >
            <Image
              source={{ uri: ticket[0].logo }}
              style={styles.circleFooter}
            />
            <SmallText
              text={gettext(ticket[0])}
              customStyle={{
                ...styles.statusLabel,
                fontSize: isTablet()
                  ? globalStyle.tabletButtonTxt
                  : globalStyle.phoneButtonTxt,
              }}
              numberOfLines={1}
            />
          </FlexCol>
        </BigTicket>
      ) : null}

      <Spinner visible={loading} />
      <BottomLine />
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.ScannedReducer.error,
    loading: state.ScannedReducer.loading,
    network: state.network.isConnected,
  };
};
const mapDispatchToProps = (dispatch) => ({
  scannedRequest: (token, id, orderno, alertsuccess) =>
    dispatch(scannedRequest(token, id, orderno, alertsuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketScreen);
