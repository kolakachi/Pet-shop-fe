import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

// Define the shape of your product
interface Product {
  category_uuid: string;
  title: string;
  uuid: string;
  price: number;
  description: string;
  metadata: {
    brand: string;
    image: string;
  };
}

// Define the shape of your cart item
interface CartItem {
  product: Product;
  quantity: number;
}

interface State {
  cart: CartItem[];
}

export default createStore<State>({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product: Product) {
      const cartItem = state.cart.find((item) => {
        console.log([item.product.uuid, product.uuid]);
        item.product.uuid === product.uuid;
      });
      console.log(cartItem);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({ product, quantity: 1 });
      }
    },
    removeFromCart(state, productUuid: string) {
      const item = state.cart.find((item) => item.product.uuid === productUuid);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          const index = state.cart.indexOf(item);
          state.cart.splice(index, 1);
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  actions: {
    addToCart({ commit }, product: Product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, productUuid: string) {
      commit("removeFromCart", productUuid);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    cartTotal(state) {
      return state.cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },
    productTotalInCart: (state) => (productUuid: string) => {
      console.log(state.cart);
      const item = state.cart.find(
        (item: CartItem) => item.product.uuid === productUuid
      );
      if (item) {
        return item.quantity;
      }
      return 0;
    },
  },
  plugins: [createPersistedState()],
});
