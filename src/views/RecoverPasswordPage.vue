<template>
  <main class="main mb-5">
    <div class="main-inner custom--padding">
      <div class="container-fluid p-0">
        <div class="custom--width py-4 mb-5">
          <div class="d-flex flex-column gap-4">
            <!-- 👇🏽 Recover Password Section -->
            <section class="mt-4 mb-2 col-lg-6 mx-auto">
              <header class="mb-5">
                <h4 class="text-center mb-3">Recover Password</h4>
                <p class="text-center clr--subtext">
                  Enter the email associated with your account and we’ll send an
                  email with instructions to reset your password.
                </p>
              </header>

              <form
                class="d-flex flex-column gap-4"
                @submit.prevent="recoverPassword()"
              >
                <div class="input-group d-flex gap-3">
                  <div class="input-div flex-grow-1">
                    <input
                      v-model="formData.email"
                      type="email"
                      class="auth-input w-100"
                      placeholder="Email Address *"
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
                      Get Recovery Link
                    </p>
                    <span class="btn-ripple"></span>
                  </button>
                </div>
              </form>
            </section>

            <section
              class="custom-modal"
              id="recoveryLinkModal"
              :class="{ visible: redirectModalVisible }"
            >
              <div class="modal-inner bg-white custom--modal--padding">
                <button
                  @click="closeModal()"
                  class="position-absolute tool-tip-btn close-modal-btn close-btn pe-none-inner"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                      fill="black"
                      fill-opacity="0.54"
                    />
                  </svg>
                  <span class="tool-tip">Close</span>
                </button>

                <div class="auth-container d-flex flex-column gap-4 py-5">
                  <div class="info-alert d-flex align-items gap-2 p-3 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.08301 5.41634H10.9163V7.24967H9.08301V5.41634ZM9.08301 9.08301H10.9163V14.583H9.08301V9.08301ZM9.99967 0.833008C4.93967 0.833008 0.833008 4.93967 0.833008 9.99967C0.833008 15.0597 4.93967 19.1663 9.99967 19.1663C15.0597 19.1663 19.1663 15.0597 19.1663 9.99967C19.1663 4.93967 15.0597 0.833008 9.99967 0.833008ZM9.99967 17.333C5.95717 17.333 2.66634 14.0422 2.66634 9.99967C2.66634 5.95717 5.95717 2.66634 9.99967 2.66634C14.0422 2.66634 17.333 5.95717 17.333 9.99967C17.333 14.0422 14.0422 17.333 9.99967 17.333Z"
                        fill="#2196F3"
                      />
                    </svg>
                    <p style="color: #0d3c61">
                      For demo purposes, we are using a URL token
                    </p>
                  </div>

                  <div>
                    <p class="clr--subtext">
                      Click on the URL and change password
                    </p>
                    <a :href="redirectURL" style="word-wrap: break-word">{{
                      redirectURL
                    }}</a>
                  </div>
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
import { defineComponent, ref } from "vue";
import axios from "../axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RecoverPasswordPage",
  setup() {
    const router = useRouter();
    const redirectURL = ref("");
    const redirectModalVisible = ref(false);
    const formData = {
      email: "",
    };
    const validateForm = () => {
      return formData.email !== "";
    };
    const recoverPassword = async () => {
      try {
        if (validateForm()) {
          const response = await axios.post("/user/forgot-password", formData);
          if (response.data.success) {
            redirectModalVisible.value = true;
            const changePasswordPageLocation = router.resolve({
              path: "/change-password",
              query: {
                token: response.data.data.reset_token,
                email: formData.email,
              },
            });
            const fullPath = `${changePasswordPageLocation.fullPath}`;
            const baseUrl = window.location.origin;
            redirectURL.value = `${baseUrl}${fullPath}`;
          } else {
            alert(response.data.error);
          }
        } else {
          alert("Please fill in all required fields.");
        }
      } catch (error) {
        alert("Encountered an error.");
      }
    };
    const closeModal = () => {
      redirectModalVisible.value = false;
    };
    return {
      formData,
      closeModal,
      redirectURL,
      redirectModalVisible,
      recoverPassword,
    };
  },
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
.custom-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  /* overflow-y: auto; */
  z-index: 999;
  background: rgba(18, 18, 18, 0.7);
  backdrop-filter: blur(3px);
  display: none;
  align-items: center;
  justify-content: center;
}
.custom-modal.visible {
  display: flex;
}
.modal-inner {
  border-radius: var(--font-10);
  width: 94%;
  max-width: 550px;
  animation: scaleUp 0.45s ease;
  position: relative;
  overflow-y: auto;
  max-height: 95vh;
  overflow-x: hidden;
}

.info-alert {
  background-color: #e9f5fe;
  border-radius: var(--font-12) var(--font-15);
}
.close-modal-btn {
  top: var(--font-15);
  right: var(--font-15);
}
.tool-tip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.95);
  color: #fff;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 5px;
  pointer-events: none;
  transition: 0.25s;
  z-index: 12;
  white-space: nowrap;
  text-transform: capitalize;
  font-weight: 500;
}
.clr--subtext {
  color: #0000008a;
}
</style>
