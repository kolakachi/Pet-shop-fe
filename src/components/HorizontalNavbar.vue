<template>
  <nav class="navbar custom--padding">
    <section
      class="navbar-center d-flex justify-content-between align-items-center"
    >
      <div class="navbar-items sidebar w-100">
        <a
          href="index.html"
          class="navbar-logo align-items-center gap-2 clr--white"
        >
          <img src="/assets/images/logos/logo(white).svg" alt="Petson Logo" />
          <p class="fnt-19">petson.</p>
        </a>

        <!-- Navbar Links -->
        <ul class="navbar-links d-flex gap-lg-5 gap-4">
          <li>
            <button class="d-flex align-items-center gap-2 navbar-link">
              <span class="text-uppercase fw-medium fnt-14">Products</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                viewBox="0 0 12 9"
                fill="none"
              >
                <path
                  d="M10.591 0.869141L6.00098 5.44914L1.41098 0.869141L0.000976562 2.27914L6.00098 8.27914L12.001 2.27914L10.591 0.869141Z"
                  fill="white"
                />
              </svg>
            </button>
          </li>
          <li>
            <a class="navbar-link text-uppercase fw-medium fnt-14" href="#"
              >Promotions</a
            >
          </li>
          <li>
            <a class="navbar-link text-uppercase fw-medium fnt-14" href="#"
              >Blog</a
            >
          </li>
        </ul>

        <!-- Navbar Buttons -->
        <div class="navbar-btns">
          <router-link
            :to="{
              name: 'cart',
            }"
            class="navbar-btn d-flex align-items-center justify-content-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clip-path="url(#clip0_10167_2095)">
                <path
                  d="M6.41699 16.5002C5.40866 16.5002 4.59283 17.3252 4.59283 18.3335C4.59283 19.3418 5.40866 20.1668 6.41699 20.1668C7.42533 20.1668 8.25033 19.3418 8.25033 18.3335C8.25033 17.3252 7.42533 16.5002 6.41699 16.5002ZM0.916992 1.8335V3.66683H2.75033L6.05033 10.6243L4.81283 12.8702C4.66616 13.1268 4.58366 13.4293 4.58366 13.7502C4.58366 14.7585 5.40866 15.5835 6.41699 15.5835H17.417V13.7502H6.80199C6.67366 13.7502 6.57283 13.6493 6.57283 13.521L6.60033 13.411L7.42533 11.9168H14.2545C14.942 11.9168 15.547 11.541 15.8587 10.9727L19.1403 5.0235C19.2137 4.89516 19.2503 4.73933 19.2503 4.5835C19.2503 4.07933 18.8378 3.66683 18.3337 3.66683H4.77616L3.91449 1.8335H0.916992ZM15.5837 16.5002C14.5753 16.5002 13.7595 17.3252 13.7595 18.3335C13.7595 19.3418 14.5753 20.1668 15.5837 20.1668C16.592 20.1668 17.417 19.3418 17.417 18.3335C17.417 17.3252 16.592 16.5002 15.5837 16.5002Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_10167_2095">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p class="fw-medium text-uppercase fnt-14">Cart (0)</p>
          </router-link>
          <button
            @click="openModal('loginModal')"
            class="navbar-btn d-flex align-items-center justify-content-center gap-2 modal-btn"
            data-modal="loginModal"
          >
            <p class="fw-medium text-uppercase fnt-14">Login</p>
          </button>

          <button
            v-if="isLoggedin"
            class="user-btn d-flex align-items-center gap-1 modal-btn tool-tip-btn"
            data-modal="userModal"
          >
            <img
              class="user-profile-img object-fit-cover rounded-circle"
              src="https://s3-alpha-sig.figma.com/img/a8de/b080/6ecb230ed941d771dd185bcb77ae8017?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMSN7uCQg0gxxR0oSYGQH0OjmCWgjkk5qZksK2-v0oUdFtXDj3MUn7bCLP~aHWf3lMyvts-E0tJ2bx~z5zhxcPfK6NnKYU0dk6aTjNc6FunF618FqHIxWuoYWEKEuOtAzjcVLYaPuvLmKrILPjRedNvXviCJ3PqygOK5dJTPEIT3Q-okSLem~j5AWuWfUYUpG5RTihzL-3YHnBAc8rIrWk8m9d3e3cRwSCGWrcGB7TeMr8KF3SVERGvGoANd9MxG73f7VUSdeO29vkgh9217TBEfAcptlBmWFpnnMkh2BmoU3cSA1UHGtbVWoi3L3c0rDzQadoKlKh0pZUhvKgrmyA__"
              alt=""
            />
            <p class="clr--white">John Rollingston</p>
            <span class="tool-tip">View Profile</span>
          </button>
        </div>
      </div>
    </section>
    <!-- 👇🏽 Login Modal -->
    <section
      :class="{ visible: loginModalVisible }"
      class="custom-modal"
      id="loginModal"
    >
      <div class="modal-inner bg-white custom--modal--padding">
        <button
          @click="closeModal('loginModal')"
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

        <div class="auth-container d-flex flex-column gap-4 py-4">
          <div class="d-flex justify-content-center">
            <img src="assets/images/logos/logo(mixed).png" alt="Petson logo" />
          </div>
          <h4 class="text-center">Login</h4>

          <form class="d-flex flex-column gap-4">
            <div class="input-group d-flex gap-3">
              <div class="input-div flex-grow-1">
                <input
                  type="email"
                  class="auth-input w-100"
                  placeholder="Email Address *"
                  required
                />
              </div>
            </div>
            <div class="input-group d-flex gap-3">
              <div class="input-div flex-grow-1">
                <input
                  type="password"
                  class="auth-input w-100"
                  placeholder="Password *"
                  required
                />
              </div>
            </div>

            <div class="d-flex align-items-center gap-2">
              <input type="checkbox" id="rememberMe" />
              <label for="rememberMe">Remember Me</label>
            </div>

            <div>
              <button
                class="submit-btn primary--bg btn-with-ripple w-100 py-3"
                type="submit"
              >
                <p class="text-uppercase clr--white fw-medium">Log In</p>
                <span class="btn-ripple"></span>
              </button>

              <div
                class="d-flex justify-content-between align-items-center mt-3"
              >
                <a href="recover-password.html">Forgot Password?</a>
                <a
                  @click="openModal('signUpModal')"
                  href="#"
                  class="modal-btn close-btn"
                  data-modal="signUpModal"
                  >Don’t have an account? Sign Up</a
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- 👇🏽 SignUp Modal -->
    <section
      :class="{ visible: signUpModalVisible }"
      class="custom-modal"
      id="signUpModal"
    >
      <div class="modal-inner bg-white custom--modal--padding">
        <button
          @click="closeModal('signUpModal')"
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

        <div class="auth-container d-flex flex-column gap-4 py-4">
          <div class="d-flex justify-content-center">
            <img src="assets/images/logos/logo(mixed).png" alt="Petson logo" />
          </div>
          <h4 class="text-center">SignUp</h4>

          <form class="d-flex flex-column gap-4">
            <div class="input-group d-flex gap-3">
              <div class="input-div flex-grow-1">
                <input
                  type="text"
                  class="auth-input w-100"
                  placeholder="First Name *"
                  required
                />
              </div>
              <div class="input-div flex-grow-1">
                <input
                  type="text"
                  class="auth-input w-100"
                  placeholder="LastName *"
                  required
                />
              </div>
            </div>
            <div class="input-group d-flex gap-3">
              <div class="input-div flex-grow-1">
                <input
                  type="email"
                  class="auth-input w-100"
                  placeholder="Email Address *"
                  required
                />
              </div>
            </div>
            <div class="input-group d-flex gap-3">
              <div class="input-div flex-grow-1">
                <input
                  type="password"
                  class="auth-input w-100"
                  placeholder="Password *"
                  required
                />
              </div>
            </div>
            <div class="input-group d-flex gap-3">
              <div class="input-div flex-grow-1">
                <input
                  type="password"
                  class="auth-input w-100"
                  placeholder="Confirm Password *"
                  required
                />
              </div>
            </div>

            <div class="d-flex align-items-center gap-2">
              <input type="checkbox" id="mailUpdates" />
              <label for="mailUpdates"
                >I want to receive inspiration, marketing promotions and updates
                via email.</label
              >
            </div>

            <div>
              <button
                class="submit-btn primary--bg btn-with-ripple w-100 py-3"
                type="submit"
              >
                <p class="text-uppercase clr--white fw-medium">Log In</p>
                <span class="btn-ripple"></span>
              </button>

              <div
                class="d-flex justify-content-center align-items-center mt-3"
              >
                <a href="#" class="modal-btn close-btn" data-modal="loginModal"
                  >Already have an account? Log in</a
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HorizontalNavbar",
  setup() {
    const isLoggedin = ref(false);
    const loginModalVisible = ref(false);
    const signUpModalVisible = ref(false);
    const userModalVisible = ref(false);

    const openModal = (modalId: string) => {
      if (modalId === "loginModal") {
        loginModalVisible.value = true;
        signUpModalVisible.value = false;
      } else if (modalId === "userModal") {
        userModalVisible.value = true;
      } else if (modalId === "signUpModal") {
        signUpModalVisible.value = true;
        loginModalVisible.value = false;
      }
    };

    const closeModal = (modalId: string) => {
      if (modalId === "loginModal") {
        loginModalVisible.value = false;
      } else if (modalId === "userModal") {
        userModalVisible.value = false;
      } else if (modalId === "signUpModal") {
        signUpModalVisible.value = false;
      }
    };

    return {
      isLoggedin,
      closeModal,
      openModal,
      loginModalVisible,
      userModalVisible,
      signUpModalVisible,
    };
  },
});
</script>
<style scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: var(--primary);
  z-index: 99;
  height: 75px;
}

.navbar-center {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.navbar-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-btns {
  display: flex;
  gap: var(--font-15);
}

.navbar-btn {
  background-color: transparent;
  border: 1px solid var(--white);
  height: var(--font-48);
  color: var(--white);
  padding: 0 var(--font-21);
  border-radius: var(--font-05);
  z-index: 1;
  position: relative;
  overflow: hidden;
}

.navbar-btn::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.17);
  z-index: -1;
  transition: 0.3s;
  transform: scaleY(0);
  transform-origin: bottom;
}

.navbar-btn:hover::before {
  transform: scaleY(1);
}

.navbar-links {
  align-items: center;
}
.navbar-link {
  color: var(--white);
}
.navbar-logo {
  display: flex;
}

.user-btn img {
  width: var(--font-40);
  width: var(--font-40);
  border: 1px solid var(--white);
}
.user-btn p {
  display: none;
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

.tool-tip-btn {
  position: relative;
}

.tool-tip-btn:hover .tool-tip {
  opacity: 1;
  bottom: -40px;
}
/* MEDIA QUERY */
@media screen and (max-width: 800px) {
  .navbar-items {
    position: fixed;
    top: 75px;
    left: 0;
    bottom: 0;
    z-index: 999;
    flex-direction: column;
    max-height: 0;
    overflow-y: hidden;
    transform-origin: top;
    justify-content: start;
    background-color: var(--primary);
    gap: 2.5rem !important;
    transition: 0.5s;
  }

  .hero-img-texts {
    padding: 0;
  }

  .navbar-items.visible {
    max-height: 100vh;
  }

  .navbar-links {
    margin-top: var(--font-35);
  }
  .navbar-btns,
  .navbar-links {
    flex-direction: column;
    gap: 2.5rem !important;
  }

  .user-btn p,
  .logo-mobile,
  .sidebar-btn {
    display: flex;
  }

  .navbar-logo {
    display: none;
  }

  .payment-type svg {
    width: 50px;
  }
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

.custom-modal::-webkit-scrollbar {
  width: 0;
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

.modal-inner.modal-inner-lg {
  max-width: 1100px;
}
.close-modal-btn {
  top: var(--font-15);
  right: var(--font-15);
}
.auth-input {
  border: 1px solid #0000003b;
  height: 3.3rem;
  border-radius: var(--font-06);
  padding: 0 var(--font-12);
  transition: 0.3s;
}
</style>
