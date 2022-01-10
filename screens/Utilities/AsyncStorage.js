import AsyncStorage from "@react-native-async-storage/async-storage";

class AsyncStorageUtil {
  static async clear() {
    AsyncStorage.clear();
  }

  static async storetoken(Data) {
    const log = ["Token", Data.data.access_token];
    const log1 = ["Role", Data.data.user.role];
    try {
      await AsyncStorage.multiSet([log, log1]);
    } catch (e) {}
  }

  static async storesocial(Data) {
    const log = ["Token", Data.data.access_token];
    const log1 = ["Role", "customer"];
    try {
      await AsyncStorage.multiSet([log, log1]);
    } catch (e) {}
  }

  static async storeIntro(Data) {
    const log = ["Intro", Data];
    try {
      await AsyncStorage.multiSet([log]);
    } catch (e) {}
  }
}

export default AsyncStorageUtil;
