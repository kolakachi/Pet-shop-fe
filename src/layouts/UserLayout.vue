<template>
  <v-app>
    <HorizontalNavbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <PageFooter />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HorizontalNavbar from "@/components/HorizontalNavbar.vue";
import PageFooter from "@/components/PageFooter.vue";

export default defineComponent({
  name: "UserLayout",
  components: {
    PageFooter,
    HorizontalNavbar,
  },
});
</script>
