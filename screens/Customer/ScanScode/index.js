import React, { Component } from "react";
import {
  Dimensions,
  TouchableOpacity,
  StatusBar,
  LogBox,
  View,
  Text,
  Image,
} from "react-native";
LogBox.ignoreAllLogs();
import {
  SmallText,
  HeaderRow,
  Flex,
  Icon_QRCodeScanner,
  Icon_ArrowLeft,
} from "@components";
import { isTablet } from "react-native-device-info";
import QRCodeScanner from "react-native-qrcode-scanner";
import globalStyle from "@globalStyle";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { scanRequest } from "./actions";
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { Internetcomponent } from "../../Utilities/helpers";
import VectorIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
console.disableYellowBox = true;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
class QrCodeCamera extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      enable: false,
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    this._unsubscribe = navigation.addListener("focus", async () => {
      this.checkdata();
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }

  async checkdata() {
    let values;

    try {
      values = await AsyncStorage.multiGet(["Token"]);
      const result = values[0].slice(1).toString();
      if (result !== null) {
        this.setState({
          token: result,
        });
      } else {
        console.log("not logged in");
      }
    } catch (error) {
      console.log(error);
    }
  }

  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  }

  onClickTicketList = () => {
    const { navigation } = this.props;
    navigation.navigate("dashboard");
  };

  readData = async () => {
    try {
      const tok = await AsyncStorage.getItem("Token");
      if (tok !== "") {
        settoken(tok);
      }
    } catch (e) {
      console.log(e);
    }
  };

  onBack = () => {
    const { navigation } = this.props;
    navigation.navigate("login");
  };

  /**
   * On user scan
   */
  onReadScan = async (e) => {
    const { enable } = this.state;
    if (enable === true) {
      const { scanRequest, navigation } = this.props;
      const { token } = this.state;
      let obj = {};
      let paramsArray = e.data.match(/([^?=&]+)(=([^&]*))/g);
      if (paramsArray) {
        paramsArray.forEach((query) => {
          let strings = query.split("=");
          obj[strings[0]] = strings[1];
        });
      }
      const x = obj;
      const id = x.order_id;
      const vid = x.vender_id;
      const logo = x.vendor_logo;
      scanRequest(
        token,
        vid,
        id,
        this.toastMessage.bind(this),
        navigation,
        logo
      );
    } else {
      return;
    }
  };

  toastMessage = (msg) => {
    console.log(msg);
    this.setState({ enable: false });
  };

  onScanStart = () => {
    this.scanner.reactivate();
    this.setState({ enable: !this.state.enable });
  };

  render() {
    const { route, navigation, loading, network } = this.props;
    return (
      <Flex customStyle={styles.parentContainer}>
        <StatusBar backgroundColor={globalStyle.darkGreen} />
        {network === false ? <Internetcomponent /> : null}
        <HeaderRow customStyle={styles.headerContainer}>
          {Platform.OS === "ios" ? (
            <TouchableOpacity
              style={styles.backBtnContainer}
              onPress={() => this.onClickBack()}
            >
              <Icon_ArrowLeft
                width="13"
                height="13"
                color={globalStyle.green}
              />
              <SmallText
                text="Back"
                customStyle={{
                  ...styles.headerBackLbl,
                  fontSize: isTablet()
                    ? globalStyle.tabletDescTxt
                    : globalStyle.phoneDescTxt,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.backBtnContainer}
              onPress={() =>
                route.params?.auth ? this.onClickTicketList() : this.onBack()
              }
            >
              <VectorIcon
                name="keyboard-backspace"
                color={"#FFF"}
                solid
                size={30}
              />
            </TouchableOpacity>
          )}

          <SmallText
            text="Scan Code"
            customStyle={{
              ...styles.scanCodelbl,
              fontSize: isTablet()
                ? globalStyle.tabletButtonTxt
                : globalStyle.phoneButtonTxt,
            }}
          />
          <Flex />
        </HeaderRow>
        <Flex customStyle={styles.content}>
          <QRCodeScanner
            ref={(node) => {
              this.scanner = node;
            }}
            showMarker
            fadeIn
            reactivate
            reactivateTimeout={3000}
            onRead={this.onReadScan.bind(this)}
            cameraStyle={{ height: SCREEN_HEIGHT }}
            customMarker={
              <View style={styles.rectangleContainer}>
                <View style={styles.topOverlay}>
                  <Text style={styles.centerText}>Position QR Code</Text>
                  <Text style={styles.centerText}>
                    in the centre of your screen
                  </Text>
                  <Flex customStyle={styles.scanIcon}>
                    <Icon_QRCodeScanner width="25" height="25" color="white" />
                  </Flex>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={styles.leftAndRightOverlay} />

                  <View style={styles.rectangle}>
                    <Icon
                      name="qr-code"
                      size={SCREEN_WIDTH * 0.73}
                      color="transparent"
                    />
                  </View>

                  <View style={styles.leftAndRightOverlay} />
                </View>

                <View style={styles.bottomOverlay} />
              </View>
            }
          />
        </Flex>
        <Spinner visible={loading} />

        <Flex customStyle={{ justifyContent: "flex-end" }}>
          {this.state.enable === false ? (
            <View>
              {Platform.OS === "ios" ? (
                <TouchableOpacity
                  style={styles.footerCircleBg}
                  onPress={() => this.onScanStart()}
                >
                  <Icon_QRCodeScanner width="45" height="45" color="white" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.footerCircleBg}
                  onPress={() => this.onScanStart()}
                  activeOpacity={1}
                >
                  <Image
                    source={require("../../../assets/sclogo.png")}
                    style={{ resizeMode: "contain", width: 80, height: 80 }}
                  />
                </TouchableOpacity>
              )}

              <View style={styles.tap}>
                <SmallText
                  text="TAP TO SCAN CODE"
                  customStyle={{
                    ...styles.scanLabel,
                    fontSize: isTablet()
                      ? globalStyle.tabletSmallTxt
                      : globalStyle.phoneSmallTxt,
                  }}
                />
              </View>
              <View style={[styles.triangle, styles.triangleDown]}></View>
            </View>
          ) : (
            <View>
              <SmallText
                text="SCANNING"
                customStyle={{
                  ...styles.scanLabel,
                  fontSize: 18,
                }}
              />
              <TouchableOpacity style={styles.goint} activeOpacity={1}>
                <Image
                  source={require("../../../assets/goint.png")}
                  style={styles.img}
                />
              </TouchableOpacity>
            </View>
          )}
        </Flex>
      </Flex>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.ScanReducer.error,
    loading: state.ScanReducer.loading,
    network: state.network.isConnected,
  };
};
const mapDispatchToProps = (dispatch) => ({
  scanRequest: (token, id, orderno, alertsuccess, navigator, logo) =>
    dispatch(scanRequest(token, id, orderno, alertsuccess, navigator, logo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QrCodeCamera);
