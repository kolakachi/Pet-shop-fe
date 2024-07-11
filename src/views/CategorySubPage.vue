<template>
  <main class="main">
    <div class="main-inner custom--padding">
      <div class="container-fluid p-0">
        <div class="custom--width custom--width--1200 py-4">
          <div class="d-flex flex-column gap-4">
            <SearchBar />

            <div class="d-flex gap-5 mt-3">
              <div
                class="d-md-flex d-none flex-column gap-5 pt-5 position-sticky sidebar"
              >
                <section>
                  <button
                    class="filter-dropdown-btn d-flex justify-content-between align-items-center w-100 active py-2"
                    onclick="toggleActive(event)"
                  >
                    <p class="text-uppercase fw-medium fnt-14">Brand</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                      viewBox="0 0 12 9"
                      fill="none"
                    >
                      <path
                        d="M10.591 0.869141L6.00098 5.44914L1.41098 0.869141L0.000976562 2.27914L6.00098 8.27914L12.001 2.27914L10.591 0.869141Z"
                        fill="#000"
                      ></path>
                    </svg>
                  </button>

                  <div class="filter-dropdown overflow-hidden d-grid">
                    <ul class="d-grid gap-1 overflow-hidden">
                      <a
                        class="filter-dropdown-element clr--subtext d-flex w-100"
                        href="#"
                        ><p>Brand 1</p>
                        <p class="ms-auto">(5)</p></a
                      >
                      <a
                        class="filter-dropdown-element clr--subtext d-flex w-100"
                        href="#"
                        ><p>Brand 1</p>
                        <p class="ms-auto">(5)</p></a
                      >
                      <a
                        class="filter-dropdown-element clr--subtext d-flex w-100"
                        href="#"
                        ><p>Brand 1</p>
                        <p class="ms-auto">(5)</p></a
                      >
                    </ul>
                  </div>
                </section>

                <section>
                  <button
                    class="filter-dropdown-btn d-flex justify-content-between align-items-center w-100 active py-2"
                    onclick="toggleActive(event)"
                  >
                    <p class="text-uppercase fw-medium fnt-14">Category</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="7"
                      viewBox="0 0 12 9"
                      fill="none"
                    >
                      <path
                        d="M10.591 0.869141L6.00098 5.44914L1.41098 0.869141L0.000976562 2.27914L6.00098 8.27914L12.001 2.27914L10.591 0.869141Z"
                        fill="#000"
                      ></path>
                    </svg>
                  </button>

                  <div class="filter-dropdown overflow-hidden d-grid">
                    <ul class="d-grid gap-1 overflow-hidden">
                      <a
                        class="filter-dropdown-element clr--subtext d-flex w-100"
                        href="#"
                        ><p>Hot Dog</p>
                        <p class="ms-auto">(5)</p></a
                      >
                      <a
                        class="filter-dropdown-element clr--subtext d-flex w-100"
                        href="#"
                        ><p>Pet treats and chews</p>
                        <p class="ms-auto">(23)</p></a
                      >
                      <a
                        class="filter-dropdown-element clr--subtext d-flex w-100"
                        href="#"
                        ><p>Flea and tick medication</p>
                        <p class="ms-auto">(11)</p></a
                      >
                      <a
                        class="filter-dropdown-element clr--subtext d-flex w-100"
                        href="#"
                        ><p>Pet grooming supplies</p>
                        <p class="ms-auto">(5)</p></a
                      >
                      <a
                        class="filter-dropdown-element clr--subtext d-flex w-100"
                        href="#"
                        ><p>Heartworm medication</p>
                        <p class="ms-auto">(5)</p></a
                      >
                    </ul>
                  </div>
                </section>
              </div>

              <section class="mb-5 flex-grow-1">
                <article
                  class="d-flex flex-column align-items-start gap-2 text-group mb-4"
                >
                  <h1 class="main-text clr--primary mb-3">Dry dog food</h1>

                  <div
                    class="d-flex justify-content-between align-items-center w-100"
                  >
                    <!-- 👇🏽 Breadcrumbs -->
                    <div class="breadcrumbs d-flex align-items-center gap-2">
                      <a class="breadcrum" href="#">Homepage</a
                      ><span class="fnt-15">/</span
                      ><a class="breadcrum" href="#">Dogs</a
                      ><span class="fnt-15">/</span
                      ><a class="breadcrum active" href="#">Dog Food</a>
                    </div>

                    <!-- 👇🏽 Sort By -->
                    <div class="fnt-15 d-grid">
                      <label class="clr--subtext fnt-14" for="">Sort By</label>
                      <div class="position-relative">
                        <select class="custom--select">
                          <option value="">Lower price first</option>
                          <option value="">Higher price first</option>
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                        >
                          <path
                            d="M0 0.0869141L5 5.08691L10 0.0869141H0Z"
                            fill="black"
                            fill-opacity="0.54"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>

                <section class="products-section position-relative">
                  <div class="products-wrapper overflow-x-hidden py-1 px-1">
                    <div class="row g-4">
                      <div
                        v-for="product in products"
                        :key="product.uuid"
                        class="col-xl-4 col-lg-6 col-sm-12"
                      >
                        <router-link
                          :to="{
                            name: 'product',
                            params: { uuid: product.uuid },
                          }"
                          class="product-card d-flex flex-column gap-3 px-3 py-4 clr--black"
                        >
                          <div class="product-card-img-div d-flex">
                            <img
                              class="product-card-img w-100"
                              :src="getImageUrl(product.metadata.image)"
                              alt=""
                            />
                          </div>

                          <div class="d-flex flex-column gap-1">
                            <h6
                              class="product-title text-decoration-underline product-card-text"
                            >
                              {{ product.title }}
                            </h6>
                            <p class="product-description product-card-text">
                              {{ product.description }}
                            </p>
                            <h5 class="product-quantity">
                              {{ product.price }}kn
                            </h5>

                            <div>
                              <button
                                @click="addToCart(product)"
                                class="add-to-cart-btn d-flex align-items-center gap-2 px-3 primary--bg btn-with-ripple"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M6.4165 15.5868C5.40817 15.5868 4.59234 16.4118 4.59234 17.4202C4.59234 18.4285 5.40817 19.2535 6.4165 19.2535C7.42484 19.2535 8.24984 18.4285 8.24984 17.4202C8.24984 16.4118 7.42484 15.5868 6.4165 15.5868ZM0.916504 0.920166V2.7535H2.74984L6.04984 9.711L4.81234 11.9568C4.66567 12.2135 4.58317 12.516 4.58317 12.8368C4.58317 13.8452 5.40817 14.6702 6.4165 14.6702H17.4165V12.8368H6.8015C6.67317 12.8368 6.57234 12.736 6.57234 12.6077L6.59984 12.4977L7.42484 11.0035H14.254C14.9415 11.0035 15.5465 10.6277 15.8582 10.0593L19.1398 4.11017C19.2132 3.98183 19.2498 3.826 19.2498 3.67017C19.2498 3.166 18.8373 2.7535 18.3332 2.7535H4.77567L3.914 0.920166H0.916504ZM15.5832 15.5868C14.5748 15.5868 13.759 16.4118 13.759 17.4202C13.759 18.4285 14.5748 19.2535 15.5832 19.2535C16.5915 19.2535 17.4165 18.4285 17.4165 17.4202C17.4165 16.4118 16.5915 15.5868 15.5832 15.5868Z"
                                    fill="white"
                                  ></path>
                                </svg>
                                <p
                                  class="text-uppercase fnt-13 fw-medium clr--white"
                                >
                                  Add to cart
                                </p>
                                <span class="btn-ripple"></span>
                              </button>
                            </div>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
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
import { useStore } from "vuex";
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
  name: "CategorySubPage",
  components: {
    SearchBar,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const products = ref<Product[]>([]);
    const fetchProductsByCategory = async (categoryUuid: string) => {
      try {
        const response = await axios.get(
          `https://pet-shop.buckhill.com.hr/api/v1/products?limit=10&category=${categoryUuid}`
        );
        products.value = response.data.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const getImageUrl = (imageUuid: string) => {
      return `https://pet-shop.buckhill.com.hr/api/v1/file/${imageUuid}`;
    };

    onMounted(() => {
      fetchProductsByCategory(props.uuid);
    });

    const store = useStore();
    const addToCart = (product) => {
      store.dispatch("addToCart", product);
    };

    return {
      products,
      addToCart,
      getImageUrl,
    };
  },
});
</script>
<style scoped>
.text-group .main-text {
  font-weight: 300;
}
.sidebar {
  width: 180px;
  margin-top: 5.7rem;
  top: 90px;
}
.filter-dropdown-element {
  padding: var(--font-05) 0;
  transition: 0.3s;
}
.clr--subtext {
  color: #0000008a;
}

.custom--select {
  padding: var(--font-05) var(--font-35) var(--font-05) 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  transition: 0.3s;
  cursor: pointer;
}
.product-card {
  transition: 0.3s;
}
.product-card:hover {
  box-shadow: 0px 0px 1px 0px #0000002b, 0px 2px 4px 0px #00000029;
}
.product-card .product-title {
  transition: 0.3s;
}
.product-card:hover .product-title {
  color: var(--primary-dark);
}
.product-description {
  color: #0000008a;
}

.product-card-img-div {
  width: 198px;
  height: 198px;
  overflow: hidden;
}
.product-card-img-div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
}
.add-to-cart-btn,
.remove-frm-cart-btn {
  height: var(--font-40);
  border-radius: var(--font-06);
}
</style>
