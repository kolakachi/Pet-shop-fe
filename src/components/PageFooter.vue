<template>
  <footer class="footer custom--padding py-4 mt-5">
    <div class="custom--width py-5">
      <div class="d-flex flex-md-row flex-column gap-3">
        <section class="pe-3 d-flex justify-content-center">
          <img
            src="assets/images/logos/logo(green).png"
            style="height: max-content"
            alt="Petson Logo"
          />
        </section>

        <section class="flex-grow-1 d-flex flex-column flex-sm-row gap-3">
          <div class="flex-grow-1 d-flex flex-column gap-3">
            <header class="fw-semibold fnt-18">Petson</header>
            <ul class="footer-links d-flex flex-column gap-2">
              <li>
                <a href="#" class="footer-link">About us</a>
              </li>
              <li>
                <a href="#" class="footer-link">Blog</a>
              </li>
              <li>
                <a href="#" class="footer-link">Store locator</a>
              </li>
            </ul>
          </div>
          <div class="flex-grow-1 d-flex flex-column gap-3">
            <header class="fw-semibold fnt-18">Contact</header>
            <ul class="footer-links d-flex flex-column gap-2">
              <li>
                <a
                  href="mailto:contact@petson.com"
                  target="_blank"
                  class="footer-link"
                  >contact@petson.com</a
                >
              </li>
              <li>
                <a href="tel:+385000000" class="footer-link">+385000000</a>
              </li>
              <li>
                <a href="#" class="footer-link"
                  >35 Shnauzer avenue, Dogville AL</a
                >
              </li>
            </ul>
          </div>
          <div class="flex-grow-1 d-flex flex-column gap-3">
            <header class="fw-semibold fnt-18">Information</header>
            <ul class="footer-links d-flex flex-column gap-2">
              <li>
                <a href="#" class="footer-link">Ordering and shipping</a>
              </li>
              <li>
                <a href="#" class="footer-link">FAQ</a>
              </li>
              <li>
                <a href="#" class="footer-link">GDPR statement</a>
              </li>
            </ul>
          </div>
        </section>

        <section class="pt-3">
          <p style="color: #0000008a" class="d-sm-block d-none">
            If you can’t find answer to your<br />
            question, please contact our<br />
            <a href="#">customer service</a>
          </p>
          <p style="color: #0000008a" class="d-sm-none d-block">
            If you can’t find answer to your question, please contact our
            <a href="#">customer service</a>
          </p>
        </section>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageFooter",
  components: {},
});
</script>
<style scoped>
.footer {
  background-color: var(--footer-color);
}

.footer-link {
  color: #0000008a;
  transition: 0.3s;
}

.footer-link:hover {
  color: var(--primary-dark);
}
</style>
