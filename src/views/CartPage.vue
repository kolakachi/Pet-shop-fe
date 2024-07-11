<template>
  <main class="main">
    <div class="main-inner custom--padding">
      <div class="container-fluid p-0">
        <div class="custom--width py-4">
          <div class="cart-products-container d-flex flex-column gap-4">
            <section class="col-lg-10 mx-auto">
              <article
                class="d-flex flex-column align-items-start gap-2 text-group my-4"
              >
                <div class="breadcrumbs d-flex align-items-center gap-2">
                  <a class="breadcrum" href="#">Homepage</a
                  ><span class="fnt-15">/</span
                  ><a class="breadcrum active" href="#">Your Cart</a>
                </div>
                <h1 class="main-text clr--primary">Your Cart</h1>
              </article>

              <!-- 👇🏽 Cart Items -->
              <div class="cart-items d-flex flex-column gap-5 my-5">
                <!-- 👇🏽 Single Cart Item -->
                <div
                  class="cart-item"
                  v-for="item in cartItems"
                  :key="item.product.uuid"
                >
                  <div class="row g-4">
                    <div class="col-lg-4">
                      <div class="d-flex">
                        <img
                          class="w-100 cart-item-img object-fit-cover"
                          style="aspect-ratio: 1 / 1"
                          :src="getImageUrl(item.product.metadata.image)"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div
                        class="d-flex flex-column justify-content-center gap-1 h-100"
                      >
                        <h5 class="product-title">{{ item.product.title }}</h5>
                        <p class="product-description fnt-14 fw-medium">
                          {{ item.product.description }}
                        </p>
                        <h4 class="product-quantity my-2">
                          {{ item.product.price }}kn
                        </h4>

                        <div class="d-flex gap-3 flex-wrap">
                          <section class="d-flex gap-2">
                            <button
                              @click="removeFromCart(item.product)"
                              class="cart-quantity-btn d-flex align-items-center justify-content-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="#0000008A"
                              >
                                <path d="M5 11h14v2H5z"></path>
                              </svg>
                            </button>
                            <div
                              class="cart-item-total-products d-flex align-items-center justify-content-center"
                            >
                              <p class="fw-medium">
                                {{ item.quantity }}
                              </p>
                            </div>
                            <button
                              @click="addToCart(item.product)"
                              class="cart-quantity-btn d-flex align-items-center justify-content-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="#0000008A"
                              >
                                <path
                                  d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"
                                ></path>
                              </svg>
                            </button>
                          </section>

                          <section class="d-flex">
                            <button
                              @click="removeProductFromCart(item.product.uuid)"
                              class="remove-frm-cart-btn d-flex align-items-center gap-2 px-3"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_10382_2242)">
                                  <path
                                    d="M18.9417 18.9419L2.30833 2.30859L1.66667 1.66693L1.05833 1.05859L0 2.11693L3.65833 5.77526L5.5 9.65859L4.375 11.7003C4.24167 11.9336 4.16667 12.2086 4.16667 12.5003C4.16667 13.4169 4.91667 14.1669 5.83333 14.1669H12.05L13.2 15.3169C12.7833 15.6169 12.5083 16.1086 12.5083 16.6669C12.5083 17.5836 13.25 18.3336 14.1667 18.3336C14.725 18.3336 15.2167 18.0586 15.5167 17.6336L17.8833 20.0003L18.9417 18.9419ZM6.18333 12.5003C6.06667 12.5003 5.975 12.4086 5.975 12.2919L6 12.1919L6.75 10.8336H8.71667L10.3833 12.5003H6.18333ZM12.9583 10.8336C13.5833 10.8336 14.1333 10.4919 14.4167 9.97526L17.4 4.56693C17.4667 4.45026 17.5 4.30859 17.5 4.16693C17.5 3.70859 17.125 3.33359 16.6667 3.33359H5.45L12.9583 10.8336ZM5.83333 15.0003C4.91667 15.0003 4.175 15.7503 4.175 16.6669C4.175 17.5836 4.91667 18.3336 5.83333 18.3336C6.75 18.3336 7.5 17.5836 7.5 16.6669C7.5 15.7503 6.75 15.0003 5.83333 15.0003Z"
                                    fill="#F09E00"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_10382_2242">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p class="text-uppercase fnt-14 fw-medium">
                                Remove from cart
                              </p>
                            </button>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cart-btn-container mb-5">
                <button
                  :disabled="cartTotalItems < 1"
                  @click="goToCheckout()"
                  class="submit-btn primary--bg btn-with-ripple w-100 py-3"
                  type="submit"
                >
                  <p class="text-uppercase clr--white fw-medium">
                    Proceed To Checkout
                  </p>
                  <span class="btn-ripple"></span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

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

export default defineComponent({
  name: "CartPage",
  setup() {
    const store = useStore();
    const cartTotalItems = computed(() => store.getters.cartTotalItems);
    const cartItems = computed(() => store.getters.cartItems);
    const removeFromCart = (product: Product) => {
      store.dispatch("removeFromCart", product.uuid);
    };
    const addToCart = (product: Product) => {
      store.dispatch("addToCart", product);
    };
    const removeProductFromCart = (productUuid: string) => {
      store.dispatch("removeProductFromCart", productUuid);
    };

    const getImageUrl = (imageUuid: string) => {
      return `https://pet-shop.buckhill.com.hr/api/v1/file/${imageUuid}`;
    };

    const router = useRouter();
    const goToCheckout = () => {
      router.push("/checkout");
    };

    return {
      cartItems,
      addToCart,
      removeFromCart,
      getImageUrl,
      removeProductFromCart,
      cartTotalItems,
      goToCheckout,
    };
  },
});
</script>
<style scoped>
.cart-item-total-products,
.cart-quantity-btn {
  width: var(--font-40);
  height: var(--font-40);
  border-radius: var(--font-05);
}
.cart-quantity-btn:hover {
  background-color: #e3ebe7;
}
.cart-quantity-btn {
  background-color: #f4f6f5;
  transition: 0.1s;
}
.cart-item-total-products {
  border: 1px solid #0000003b;
  color: #0000008a !important;
}
.cart-quantity-btn {
  background-color: #f4f6f5;
  transition: 0.1s;
}
.remove-frm-cart-btn {
  border: 1px solid #f09e0080;
  transition: 0.3s;
}
.add-to-cart-btn,
.remove-frm-cart-btn {
  height: var(--font-40);
  border-radius: var(--font-06);
}
.remove-frm-cart-btn p {
  color: #f09e00;
}
.remove-frm-cart-btn:hover {
  background-color: #f09e0015;
}
.text-group .main-text {
  font-weight: 300;
}
.cart-btn-container {
  min-height: 100px;
}
</style>
