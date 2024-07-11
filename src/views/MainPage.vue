<template>
  <main class="main">
    <div class="main-inner custom--padding">
      <div class="container-fluid p-0">
        <div class="custom--width py-4">
          <div class="d-flex flex-column gap-4">
            <SearchBar />

            <section class="hero-img-section position-relative mb-5">
              <article
                class="hero-img-texts d-flex flex-column align-items-start gap-2 text-group"
              >
                <h1 class="main-text clr--white">Up to 30% sale</h1>
                <p class="sub-text clr--white">On select dog food and toys</p>
              </article>
              <img
                class="w-100"
                src="assets/images/bones.jpg"
                alt=""
                style="border-radius: 2px"
              />
            </section>

            <ProductCarousel
              v-if="categories.length > 0"
              :category="categories[0]"
            />

            <section class="mt-3 mb-5">
              <div class="row g-sm-5 g-4">
                <div class="col-lg-7">
                  <div class="d-flex">
                    <img
                      class="w-100 object-fit-cover"
                      style="aspect-ratio: 16 / 9"
                      src="https://s3-alpha-sig.figma.com/img/2c75/dd4a/8625918b48b9b3041808cb9ccf5d3879?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ByeTjtA5f~uSS-OPVxnAovpACzCXKdk7G9nD2oY6o4O3rxVOoI0dQaNm4K~aVCMrvVpuBCcPp~2egwpu4Dm3QByFZfAsGP9GJbvRorllGC9To-ex8g8yqqVu5Pc9mzU9yk8so2bi~s344aWTBxWBT2bsqj8s5WOUDEwMpycgY86ypbzErNwbNouAKyk6OpdXmvz3T~DBSZ8MyXb3GL78W7eMepdX1HouTmaBR7Qo44TaWv0tJRgHH6MzI4u6Csv0xikMbfXJOlODFyENXBCjkr2PRnV-V-JGcSTAw-aCvvobrD84FCCc7YEqlf6JfSrAHKBa8GKiMliXrQaZ7wnV6Q__"
                      alt=""
                    />
                  </div>
                </div>

                <div class="col-lg-5">
                  <article
                    class="d-flex flex-column align-items-start justify-content-center gap-2 text-group mb-4 h-100"
                  >
                    <h1 class="main-text clr--primary">Treat your pup</h1>
                    <a
                      class="sub-text clr--white primary--bg px-2 py-1 text-decoration-underline fw-medium"
                      href="#"
                      >Discover our dog treat selection</a
                    >
                  </article>
                </div>
              </div>
            </section>

            <ProductCarousel
              v-if="categories.length > 1"
              :category="categories[1]"
            />

            <section class="mt-3 mb-5">
              <div class="row g-sm-5 g-4 flex-row-reverse">
                <div class="col-lg-7">
                  <div class="d-flex">
                    <img
                      class="w-100 object-fit-cover"
                      style="aspect-ratio: 16 / 9"
                      src="https://s3-alpha-sig.figma.com/img/7dbc/c55c/d02b552c345b6b0862fc4dc52b25b30f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ge4R2N2MLUHmjC4QAltXfQETGhNU6xW~n6DiGQmE2Saw3Ol2O52dEhpxnQgD-7cUvBY4iGG1l9PckEo2ph9~XXWQ6wLQ0nUIjC9-M~~NiOuTGk7iXPO6K20e0jOH7Mimi3poxOJtuAkHqmFlHOWa-c2-OSlKUNuLqH3l~Ee7G8jOmlxPhP~pxImiv1kEGAOgvWfMcAjUHU36b7HmlqAQ65ES7ZAvCYcBYrgeGJNfBQ1MFWBjMrXavejt1z9bxM1jtxDG8PohuC6WqMN7j6C4ZTt6qdzG4YkE4L415hC7EPIEzA~BrHGHj~xSziQuvmioIQ-VpF5OuuTn2CUOPtpjHg__"
                      alt=""
                    />
                  </div>
                </div>

                <div class="col-lg-5">
                  <article
                    class="d-flex flex-column align-items-start justify-content-center gap-2 text-group mb-4 h-100"
                  >
                    <h1 class="main-text clr--primary">Get the best tips</h1>
                    <a
                      class="sub-text clr--white primary--bg px-2 py-1 text-decoration-underline fw-medium"
                      href="#"
                      target="_blank"
                      >Read our blog</a
                    >
                  </article>
                </div>
              </div>
            </section>
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
import ProductCarousel from "@/components/ProductCarousel.vue";
import { Category } from "../models/Category";

export default defineComponent({
  name: "MainPage",
  components: {
    SearchBar,
    ProductCarousel,
  },
  setup() {
    const categories = ref<Category[]>([]);
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://pet-shop.buckhill.com.hr/api/v1/categories?limit=2"
        );
        categories.value = response.data.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    onMounted(() => {
      fetchCategories();
    });

    return {
      categories,
    };
  },
});
</script>
<style scoped>
.hero-img-texts {
  padding: 0;
}
.hero-img-texts {
  position: absolute;
  top: 0;
  z-index: 1;
  padding: var(--font-25);
}

.hero-img-texts .main-text {
  padding: 1rem;
}
.hero-img-texts .main-text,
.hero-img-texts .sub-text {
  background-color: #00000042;
  border-radius: 2px;
}
.hero-img-texts .sub-text {
  padding: 0.4rem 1rem;
}

.text-group .main-text {
  font-weight: 300;
}

.text-group {
  font-size: calc(1.375rem + 1.5vw);
}

.clr--subtext {
  color: #0000008a;
}
</style>
