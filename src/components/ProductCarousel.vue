<template>
  <section class="products-section position-relative">
    <div
      ref="productSlider"
      class="products-wrapper products-wrapper-slider overflow-x-hidden py-1 px-1"
    >
      <div class="row flex-md-nowrap g-4">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item"
        >
          <a
            href="#"
            class="product-card d-flex flex-column gap-3 px-3 py-4 clr--black"
          >
            <div class="product-card-img-div d-flex">
              <img
                class="product-card-img w-100"
                :src="product.imgSrc"
                :alt="product.imgAlt"
              />
            </div>
            <div class="d-flex flex-column gap-1">
              <h6 class="product-title text-decoration-underline">
                {{ product.title }}
              </h6>
              <p class="product-description">{{ product.description }}</p>
              <h6 class="product-quantity">{{ product.quantity }}</h6>
            </div>
          </a>
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Product {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  quantity: string;
}

export default defineComponent({
  name: "ProductCarousel",
  setup() {
    const products = ref<Product[]>([
      {
        id: 1,
        imgSrc: "assets/images/demo-product.png",
        imgAlt: "Product Image",
        title: "Brit care endurance",
        description: "Animonda",
        quantity: "200kn",
      },
      {
        id: 2,
        imgSrc: "assets/images/demo-product.png",
        imgAlt: "Product Image",
        title: "Brit care endurance",
        description: "Animonda",
        quantity: "200kn",
      },
      {
        id: 3,
        imgSrc: "assets/images/demo-product.png",
        imgAlt: "Product Image",
        title: "Brit care endurance",
        description: "Animonda",
        quantity: "200kn",
      },
      {
        id: 4,
        imgSrc: "assets/images/demo-product.png",
        imgAlt: "Product Image",
        title: "Brit care endurance",
        description: "Animonda",
        quantity: "200kn",
      },
      {
        id: 5,
        imgSrc: "assets/images/demo-product.png",
        imgAlt: "Product Image",
        title: "Brit care endurance",
        description: "Animonda",
        quantity: "200kn",
      },
      {
        id: 6,
        imgSrc: "assets/images/demo-product.png",
        imgAlt: "Product Image",
        title: "Brit care endurance",
        description: "Animonda",
        quantity: "200kn",
      },
      {
        id: 7,
        imgSrc: "assets/images/demo-product.png",
        imgAlt: "Product Image",
        title: "Brit care endurance",
        description: "Animonda",
        quantity: "200kn",
      },
    ]);

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

    return {
      products,
      productSlider,
      isPrevDisabled,
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
</style>
