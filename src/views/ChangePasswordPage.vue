<template>
  <main class="main">
    <div class="main-inner custom--padding">
      <div class="container-fluid p-0">
        <div class="custom--width py-4">
          <div class="d-flex flex-column gap-4">
            <!-- 👇🏽 Recover Password Section -->
            <section class="mt-4 mb-2 col-lg-6 mx-auto">
              <header class="mb-5">
                <h4 class="text-center mb-3">Change Password</h4>
                <p class="text-center clr--subtext">
                  Enter the email associated with your account and we’ll send an
                  email with instructions to reset your password.
                </p>
              </header>

              <form class="d-flex flex-column gap-4">
                <div class="input-group d-flex gap-3">
                  <div class="input-div flex-grow-1">
                    <input
                      type="password"
                      class="auth-input w-100"
                      placeholder="New password"
                      required
                    />
                  </div>
                </div>
                <div class="input-group d-flex gap-3">
                  <div class="input-div flex-grow-1">
                    <input
                      type="password"
                      class="auth-input w-100"
                      placeholder="Re-enter your new password"
                      required
                    />
                  </div>
                </div>

                <div>
                  <button
                    class="submit-btn primary--bg btn-with-ripple w-100 py-3"
                    type="submit"
                  >
                    <p class="text-uppercase clr--white fw-medium">
                      Change password
                    </p>
                    <span class="btn-ripple"></span>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChangePasswordPage",
});
</script>
<style scoped>
.auth-input {
  border: 1px solid #0000003b;
  height: 3.3rem;
  border-radius: var(--font-06);
  padding: 0 var(--font-12);
  transition: 0.3s;
}
.submit-btn {
  box-shadow: 0px 0px 1px 0px #0000002b, 0px 2px 4px 0px #00000029;
  border-radius: var(--font-07);
}
</style>
