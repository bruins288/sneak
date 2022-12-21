import axios from "axios";

const BASE_URL = "https://63a2f34d471b38b20601509a.mockapi.io/";

class GoodsApi {
  #instance;
  constructor() {
    this.instance = { baseURL: BASE_URL, withCredentials: false };
  }
  set instance(serverSettings) {
    this.#instance = axios.create(serverSettings);
  }
  get instance() {
    return this.#instance;
  }
  getGoods() {
    return this.instance.get("goods");
  }
}

export default new GoodsApi();
