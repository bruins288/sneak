import axios from "axios";

const BASE_URL = "https://63a2f34d471b38b20601509a.mockapi.io/";

class ProductsApi {
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
  getProducts() {
    return this.instance.get("goods");
  }
  getCart() {
    return this.instance.get("cart");
  }
  getFavorites() {
    return this.instance.get("favorite");
  }
  addItemCart(product) {
    return this.instance.post("cart", product);
  }
  deleteItemCart(id) {
    return this.instance.delete("cart/" + id);
  }
  addItemFavorite(product) {
    return this.instance.post("favorite", product);
  }
  deleteItemFavorite(id) {
    return this.instance.delete("favorite/" + id);
  }
  addItemsOrder(products) {
    return this.instance.post("orders", products);
  }
}

export default new ProductsApi();
