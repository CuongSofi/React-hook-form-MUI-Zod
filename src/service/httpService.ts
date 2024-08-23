import { KeyLocalStorage } from "../constants/keyLocal";

class HttpService {
  saveInfoLocal(info: any) {
    window.localStorage.setItem(KeyLocalStorage.info, JSON.stringify(info));
  }
  getInfoLocal() {
    const infoLocal = window.localStorage.getItem(KeyLocalStorage.info);
    const userInfo = infoLocal ? JSON.parse(infoLocal) : null;
    return userInfo;
  }
}

export default new HttpService();
