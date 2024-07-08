<template>
  <section class="mt-2 mb-2">
    <div class="search-bar-div mx-auto position-relative">
      <svg
        class="position-absolute top-50 translate-middle-y"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_10167_3092)">
          <path
            d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
            fill="#4EC690"
          />
        </g>
        <defs>
          <clipPath id="clip0_10167_3092">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <input
        type="text"
        class="search-bar w-100"
        placeholder="Search products"
      />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  components: {},
  data() {
    return {
      search: "",
    };
  },
});
</script>

<style scoped>
.search-bar-div {
  max-width: 600px;
}

.search-bar {
  border: 1px solid var(--primary);
  height: var(--font-50);
  border-radius: var(--font-05);
  transition: 0.35s;
  padding: 0 var(--font-15) 0 var(--font-45);
}

.search-bar::placeholder {
  color: var(--primary);
}

.search-bar:hover {
  background-color: #4ec69010;
}
.search-bar:focus {
  background-color: #4ec69007;
  box-shadow: 0 0 0 0.25rem rgba(78, 198, 144, 0.25);
}

.search-bar-div svg {
  left: var(--font-15);
}
</style>
