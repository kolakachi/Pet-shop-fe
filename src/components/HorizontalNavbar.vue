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
          <a
            href="cart.html"
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
          </a>
          <button
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
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HorizontalNavbar",
  components: {},
  data() {
    return {
      isLoggedin: false,
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
</style>
