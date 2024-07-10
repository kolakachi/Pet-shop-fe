<template>
  <section class="mt-3 mb-5">
    <article class="d-flex flex-column align-items-start gap-2 text-group mb-4">
      <h1 class="main-text clr--primary">
        <router-link
          :to="{
            name: 'category',
            params: { slug: category.slug },
            query: { uuid: category.uuid },
          }"
        >
          {{ category.title }}
        </router-link>
      </h1>
    </article>
    <section class="products-section position-relative">
      <div
        ref="productSlider"
        class="products-wrapper products-wrapper-slider overflow-x-hidden py-1 px-1"
      >
        <div class="row flex-md-nowrap g-4">
          <div
            v-for="product in products"
            :key="product.uuid"
            class="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item"
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
                <h6 class="product-quantity">{{ product.price }}kn</h6>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="product-slide-controls">
        <button
          class="btn-prev start-0 d-sm-block d-none"
          :disabled="isPrevDisabled"
          @click="prevSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style="transform: rotate(180deg)"
            width="22"
            height="36"
            viewBox="0 0 26 40"
            fill="none"
          >
            <path
              d="M5.33379 0L0.633789 4.7L15.9005 20L0.633789 35.3L5.33379 40L25.3338 20L5.33379 0Z"
              fill="black"
              fill-opacity="0.54"
            />
          </svg>
        </button>
        <button class="btn-next end-0 d-sm-block d-none" @click="nextSlide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="36"
            viewBox="0 0 26 40"
            fill="none"
          >
            <path
              d="M5.33379 0L0.633789 4.7L15.9005 20L0.633789 35.3L5.33379 40L25.3338 20L5.33379 0Z"
              fill="black"
              fill-opacity="0.54"
            />
          </svg>
        </button>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from "vue";
import axios from "axios";

interface Category {
  uuid: string;
  title: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

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
  name: "ProductCarousel",
  props: {
    category: {
      type: Object as PropType<Category>,
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

    const productSlider = ref<HTMLElement | null>(null);
    const isPrevDisabled = ref(true);

    const nextSlide = () => {
      if (productSlider.value) {
        const cardWidth =
          productSlider.value.querySelector(".col-sm-12")?.clientWidth || 0;
        productSlider.value.scrollBy({ left: cardWidth, behavior: "smooth" });
        setTimeout(() => {
          if (productSlider.value && productSlider.value.scrollLeft > 0) {
            isPrevDisabled.value = false;
          }
        }, 500);
      }
    };

    const prevSlide = () => {
      if (productSlider.value) {
        const cardWidth =
          productSlider.value.querySelector(".col-sm-12")?.clientWidth || 0;
        productSlider.value.scrollBy({
          left: -cardWidth * 2,
          behavior: "smooth",
        });
        setTimeout(() => {
          if (productSlider.value) {
            isPrevDisabled.value = productSlider.value.scrollLeft === 0;
          }
        }, 500);
      }
    };

    onMounted(() => {
      fetchProductsByCategory(props.category.uuid);
    });

    return {
      products,
      productSlider,
      isPrevDisabled,
      getImageUrl,
      nextSlide,
      prevSlide,
    };
  },
});
</script>

<style scoped>
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

.product-slide-controls .btn-next {
  transform: translate(100%, -50%);
}
.product-slide-controls .btn-prev {
  transform: translate(-100%, -50%);
}
.product-slide-controls .btn-next,
.product-slide-controls .btn-prev {
  position: absolute;
  top: 50%;
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
}
.main-text a {
  font-weight: 300 !important;
  color: var(--primary) !important;
  font-size: 2.5rem !important;
}
</style>
