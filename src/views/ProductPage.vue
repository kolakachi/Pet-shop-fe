<template>
  <main class="main">
    <div class="main-inner custom--padding">
      <div class="container-fluid p-0">
        <div class="custom--width custom--width--1200 py-4">
          <div class="d-flex flex-column gap-4">
            <SearchBar />

            <article
              class="d-flex flex-column align-items-start gap-2 text-group my-4"
            >
              <div class="breadcrumbs d-flex align-items-center gap-2">
                <a class="breadcrum" href="#">Homepage</a
                ><span class="fnt-15">/</span
                ><a class="breadcrum" href="#">Dogs</a
                ><span class="fnt-15">/</span
                ><a class="breadcrum active" href="#">Brit Care Endurance</a>
              </div>
            </article>
            <div class="d-flex flex-column gap-5 my-5" v-if="product">
              <!-- 👇🏽  Item/Product Image + CTA Btns -->
              <div class="mb-5">
                <div class="row g-4">
                  <div class="col-lg-6">
                    <div class="d-flex">
                      <img
                        class="w-100 cart-item-img object-fit-cover shadow-none"
                        style="aspect-ratio: 1 / 1"
                        :key="product.uuid"
                        :src="getImageUrl(product.metadata.image)"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div
                      class="d-flex flex-column justify-content-center gap-1 h-100"
                    >
                      <h3 class="product-title fw-normal">
                        Brit Care Endurance
                      </h3>
                      <h5 class="product-description fw-normal">
                        Endurance Duck & Rice
                      </h5>

                      <h2 class="product-quantity mt-4 mb-3 fw-light">200kn</h2>

                      <div class="d-flex flex-wrap gap-3">
                        <!-- 👇🏽 Add To Cart Button -->
                        <section class="d-flex">
                          <button
                            class="add-to-cart-btn d-flex align-items-center gap-2 px-3 primary--bg btn-with-ripple"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M6.4165 15.5868C5.40817 15.5868 4.59234 16.4118 4.59234 17.4202C4.59234 18.4285 5.40817 19.2535 6.4165 19.2535C7.42484 19.2535 8.24984 18.4285 8.24984 17.4202C8.24984 16.4118 7.42484 15.5868 6.4165 15.5868ZM0.916504 0.920166V2.7535H2.74984L6.04984 9.711L4.81234 11.9568C4.66567 12.2135 4.58317 12.516 4.58317 12.8368C4.58317 13.8452 5.40817 14.6702 6.4165 14.6702H17.4165V12.8368H6.8015C6.67317 12.8368 6.57234 12.736 6.57234 12.6077L6.59984 12.4977L7.42484 11.0035H14.254C14.9415 11.0035 15.5465 10.6277 15.8582 10.0593L19.1398 4.11017C19.2132 3.98183 19.2498 3.826 19.2498 3.67017C19.2498 3.166 18.8373 2.7535 18.3332 2.7535H4.77567L3.914 0.920166H0.916504ZM15.5832 15.5868C14.5748 15.5868 13.759 16.4118 13.759 17.4202C13.759 18.4285 14.5748 19.2535 15.5832 19.2535C16.5915 19.2535 17.4165 18.4285 17.4165 17.4202C17.4165 16.4118 16.5915 15.5868 15.5832 15.5868Z"
                                fill="white"
                              />
                            </svg>
                            <p
                              class="text-uppercase fnt-14 fw-medium clr--white"
                            >
                              Add to cart
                            </p>
                            <span class="btn-ripple"></span>
                          </button>
                        </section>

                        <!-- 👇🏽 Increment || Decrement -->
                        <section class="d-flex gap-2">
                          <button
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
                            <p class="fw-medium">1</p>
                          </div>
                          <button
                            class="cart-quantity-btn d-flex align-items-center justify-content-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="21"
                              viewBox="0 0 24 24"
                              fill="#0000008A"
                            >
                              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                            </svg>
                          </button>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 👇🏽 Item/Product Container -->
              <div class="d-flex flex-column gap-4 gap-sm-5">
                <div class="d-flex flex-column gap-3">
                  <p class="fnt-16 clr--subtext">
                    {{ product.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import SearchBar from "@/components/SearchBar.vue";

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
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export default defineComponent({
  name: "ProductPage",
  components: {
    SearchBar,
  },
  props: {
    uuid: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const product = ref<Product | null>(null);
    const fetchProductById = async (productUuid: string) => {
      try {
        const response = await axios.get(
          `https://pet-shop.buckhill.com.hr/api/v1/product/${productUuid}`
        );
        product.value = response.data.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const getImageUrl = (imageUuid: string) => {
      return `https://pet-shop.buckhill.com.hr/api/v1/file/${imageUuid}`;
    };
    onMounted(() => {
      console.log(props.uuid);
      fetchProductById(props.uuid);
    });
    return {
      product,
      getImageUrl,
    };
  },
});
</script>
<style scoped>
.product-description {
  color: #0000008a;
}
.add-to-cart-btn {
  height: var(--font-40);
  border-radius: var(--font-06);
}
.cart-quantity-btn {
  background-color: #f4f6f5;
  transition: 0.1s;
}
.cart-quantity-btn {
  width: var(--font-40);
  height: var(--font-40);
  border-radius: var(--font-05);
}
.cart-item-total-products {
  width: var(--font-40);
  height: var(--font-40);
  border-radius: var(--font-05);
}
.cart-item-total-products {
  border: 1px solid #0000003b;
  color: #0000008a !important;
}
.cart-quantity-btn:hover {
  background-color: #e3ebe7;
}
.product-description-text {
  overflow: hidden;
  text-overflow: ellipsis;
}
.clr--subtext {
  color: #0000008a;
}
</style>
