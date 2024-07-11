<template>
  <nav class="navbar custom--padding">
    <section
      class="navbar-center d-flex justify-content-between align-items-center"
    >
      <div class="navbar-items sidebar w-100">
        <a href="/" class="navbar-logo align-items-center gap-2 clr--white">
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
            <p class="fw-medium text-uppercase fnt-14">
              Cart ({{ cartTotalItems }})
            </p>
          </router-link>
          <button
            v-if="!authStore.isLoggedIn()"
            @click="openModal('loginModal')"
            class="navbar-btn d-flex align-items-center justify-content-center gap-2 modal-btn"
            data-modal="loginModal"
          >
            <p class="fw-medium text-uppercase fnt-14">Login</p>
          </button>
          <button
            v-if="authStore.isLoggedIn()"
            @click="logout()"
            class="navbar-btn d-flex align-items-center justify-content-center gap-2 modal-btn"
            data-modal="loginModal"
          >
            <p class="fw-medium text-uppercase fnt-14">Logout</p>
          </button>

          <button
            v-if="authStore.isLoggedIn()"
            @click="openModal('userModal')"
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
            <img src="/assets/images/logos/logo(mixed).png" alt="Petson logo" />
          </div>
          <h4 class="text-center">Login</h4>

          <form class="d-flex flex-column gap-4" @submit.prevent="logIn()">
            <div class="input-group d-flex gap-3">
              <div class="input-div flex-grow-1">
                <input
                  type="email"
                  v-model="logInFormData.email"
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
                  v-model="logInFormData.password"
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
                <router-link
                  :to="{ name: 'recoverPassword' }"
                  @click="closeModal('loginModal')"
                  >Forgot Password?</router-link
                >
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
            <img src="/assets/images/logos/logo(mixed).png" alt="Petson logo" />
          </div>
          <h4 class="text-center">SignUp</h4>

          <form class="d-flex flex-column gap-4" @submit.prevent="signUp()">
            <div class="input-group d-flex gap-3">
              <div class="input-div flex-grow-1">
                <input
                  type="text"
                  v-model="signUpFormData.first_name"
                  class="auth-input w-100"
                  placeholder="First Name *"
                  required
                />
              </div>
              <div class="input-div flex-grow-1">
                <input
                  type="text"
                  v-model="signUpFormData.last_name"
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
                  v-model="signUpFormData.email"
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
                  v-model="signUpFormData.password"
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
                  v-model="signUpFormData.password_confirmation"
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
                <p class="text-uppercase clr--white fw-medium">Register</p>
                <span class="btn-ripple"></span>
              </button>

              <div
                class="d-flex justify-content-center align-items-center mt-3"
              >
                <a
                  href="#"
                  @click="openModal('loginModal')"
                  class="modal-btn close-btn"
                  data-modal="loginModal"
                  >Already have an account? Log in</a
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section
      :class="{ visible: userModalVisible }"
      class="custom-modal"
      id="userModal"
    >
      <div class="modal-inner modal-inner-lg bg-white custom--modal--padding">
        <button
          @click="closeModal('userModal')"
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

        <div class="d-flex flex-column gap-4 py-3 mb-3">
          <h4 class="text-center">User Settings</h4>
        </div>

        <section>
          <div class="d-flex flex-column flex-md-row mb-5">
            <section
              class="user-img-modal d-flex justify-content-center px-4 px-md-5"
            >
              <img
                width="150"
                height="150"
                class="rounded-circle"
                src="https://s3-alpha-sig.figma.com/img/a8de/b080/6ecb230ed941d771dd185bcb77ae8017?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hx2qka5lc2PMvSiPddaFP5HVU-MAwjzlHOjIJJARNKtlSC~93K3C-c3HOmmFQKGQn1S820YGWmTFQFNaoRAHt2w6Deol2rp5VPdmGEWI6FotDDOqClK4-W2-MHGS8b8vIigU8tTcnVZvh9p3uQmQ-mIeniD1P6zaMNOZySwBiEdZdOsUpv9W9-o5h9kntTDerkPa4NpiAnLlN5ccQIgSCnjI~Em7mPuWQDGHiJdnAORurBvR7L7CW3indPMJ9t-cDp0qt0YiCQCCBuBlxFILtQBPxb6DPGIuVnmoX4k07u6w2YKZNT-MHHfbKj5rJu37r~p9zp5nvYdoOHbl5bzPeg__"
                alt=""
              />
            </section>

            <section class="flex-one px-4 px-md-5">
              <div class="row g-4">
                <div class="col-lg-4">
                  <div>
                    <small class="clr--subtext fnt-12">Name</small>
                    <p class="fnt-16 clr--black">John Rollingston</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div>
                    <small class="clr--subtext fnt-12">Phone number</small>
                    <p class="fnt-16 clr--black">(559) 979-6096</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div>
                    <small class="clr--subtext fnt-12">Address</small>
                    <p class="fnt-16 clr--black">
                      1285 Fallen Pioneer Heights, Dallas, TX
                    </p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div>
                    <small class="clr--subtext fnt-12">Date joined</small>
                    <p class="fnt-16 clr--black">14. 9. 2020.</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div>
                    <small class="clr--subtext fnt-12">Email</small>
                    <p class="fnt-16 clr--black">j.sharp@hotmail.com</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div>
                    <small class="clr--subtext fnt-12"
                      >Marketing preferences</small
                    >
                    <p class="fnt-16 clr--black">No</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="custom--table">
            <div class="custom--table--inner">
              <section class="table-section">
                <header class="px-3 py-4">Latest orders</header>

                <table class="table table-responsive">
                  <thead>
                    <tr>
                      <th class="px-3" scope="col">
                        <p class="clr--subtext">Order UUID</p>
                      </th>
                      <th class="px-3" scope="col">
                        <p class="clr--subtext">Status</p>
                      </th>
                      <th scope="col" class="px-3 clr--subtext">
                        <p class="clr--subtext text-center">Download invoice</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-3">
                        <p class="clr--subtext">
                          083d0036-9616-3f1e-9b03-4fe51ad2e1c2
                        </p>
                      </td>
                      <td class="px-3">
                        <p class="status-type open fnt-13">Open</p>
                      </td>
                      <td class="px-3">
                        <div
                          class="d-flex align-items-center justify-content-center gap-2"
                        >
                          <a
                            href="#"
                            class="d-flex align-items-center justify-content-center download-btn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_10382_795)">
                                <path
                                  d="M16.4495 10.5V16.3333H4.78288V10.5H3.11621V16.3333C3.11621 17.25 3.86621 18 4.78288 18H16.4495C17.3662 18 18.1162 17.25 18.1162 16.3333V10.5H16.4495ZM11.4495 11.0583L13.6079 8.90833L14.7829 10.0833L10.6162 14.25L6.44954 10.0833L7.62454 8.90833L9.78288 11.0583V3H11.4495V11.0583Z"
                                  fill="black"
                                  fill-opacity="0.54"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_10382_795">
                                  <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                    transform="translate(0.616211 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-3">
                        <p class="clr--subtext">
                          083d0036-9616-3f1e-9b03-4fe51ad2e1c2
                        </p>
                      </td>
                      <td class="px-3">
                        <p class="status-type pending-payment fnt-13">
                          Pending payment
                        </p>
                      </td>
                      <td class="px-3">
                        <div
                          class="d-flex align-items-center justify-content-center gap-2"
                        >
                          <a
                            href="#"
                            class="d-flex align-items-center justify-content-center download-btn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_10382_795)">
                                <path
                                  d="M16.4495 10.5V16.3333H4.78288V10.5H3.11621V16.3333C3.11621 17.25 3.86621 18 4.78288 18H16.4495C17.3662 18 18.1162 17.25 18.1162 16.3333V10.5H16.4495ZM11.4495 11.0583L13.6079 8.90833L14.7829 10.0833L10.6162 14.25L6.44954 10.0833L7.62454 8.90833L9.78288 11.0583V3H11.4495V11.0583Z"
                                  fill="black"
                                  fill-opacity="0.54"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_10382_795">
                                  <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                    transform="translate(0.616211 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-3">
                        <p class="clr--subtext">
                          083d0036-9616-3f1e-9b03-4fe51ad2e1c2
                        </p>
                      </td>
                      <td class="px-3">
                        <p class="status-type shipped fnt-13">Shipped</p>
                      </td>
                      <td class="px-3">
                        <div
                          class="d-flex align-items-center justify-content-center gap-2"
                        >
                          <a
                            href="#"
                            class="d-flex align-items-center justify-content-center download-btn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_10382_795)">
                                <path
                                  d="M16.4495 10.5V16.3333H4.78288V10.5H3.11621V16.3333C3.11621 17.25 3.86621 18 4.78288 18H16.4495C17.3662 18 18.1162 17.25 18.1162 16.3333V10.5H16.4495ZM11.4495 11.0583L13.6079 8.90833L14.7829 10.0833L10.6162 14.25L6.44954 10.0833L7.62454 8.90833L9.78288 11.0583V3H11.4495V11.0583Z"
                                  fill="black"
                                  fill-opacity="0.54"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_10382_795">
                                  <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                    transform="translate(0.616211 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-3">
                        <p class="clr--subtext">
                          083d0036-9616-3f1e-9b03-4fe51ad2e1c2
                        </p>
                      </td>
                      <td class="px-3">
                        <p class="status-type cancelled fnt-13">Cancelled</p>
                      </td>
                      <td class="px-3">
                        <div
                          class="d-flex align-items-center justify-content-center gap-2"
                        >
                          <a
                            href="#"
                            class="d-flex align-items-center justify-content-center download-btn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_10382_795)">
                                <path
                                  d="M16.4495 10.5V16.3333H4.78288V10.5H3.11621V16.3333C3.11621 17.25 3.86621 18 4.78288 18H16.4495C17.3662 18 18.1162 17.25 18.1162 16.3333V10.5H16.4495ZM11.4495 11.0583L13.6079 8.90833L14.7829 10.0833L10.6162 14.25L6.44954 10.0833L7.62454 8.90833L9.78288 11.0583V3H11.4495V11.0583Z"
                                  fill="black"
                                  fill-opacity="0.54"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_10382_795">
                                  <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                    transform="translate(0.616211 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="d-flex justify-content-end gap-4 px-3 py-2">
                  <div class="d-flex align-items-center gap-2">
                    <label for="" class="clr--subtext fnt-14"
                      >Rows per page:</label
                    >
                    <div class="position-relative">
                      <select
                        id=""
                        class="clr--subtext pe-2 cursor-pointer border-0 fw-medium"
                      >
                        <option value="">5</option>
                        <option value="">10</option>
                        <option value="">15</option>
                      </select>

                      <svg
                        class="position-absolute pe-none top-50 translate-middle-y end-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                      >
                        <path
                          d="M0 0.0869141L5 5.08691L10 0.0869141H0Z"
                          fill="black"
                          fill-opacity="0.54"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div class="table-pagination d-flex align-items-center gap-3">
                    <p class="clr--subtext">1 - 5 of 240</p>

                    <div class="pagination-arrows d-flex gap-1">
                      <button class="pagination-arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="15"
                          viewBox="0 0 8 15"
                          fill="none"
                        >
                          <path
                            d="M7 13.2844L1.06906 7.25974C1.03075 7.22082 1.03075 7.15835 1.06906 7.11943L7 1.09473"
                            stroke="#9FA2B4"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                      <button class="pagination-arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="15"
                          viewBox="0 0 8 15"
                          fill="none"
                        >
                          <path
                            d="M1 13.2844L6.93094 7.25974C6.96925 7.22082 6.96925 7.15835 6.93094 7.11943L1 1.09473"
                            stroke="#9FA2B4"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </section>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import axios from "../axios";
import { useAuthStore } from "../store/auth";

export default defineComponent({
  name: "HorizontalNavbar",
  setup() {
    const store = useStore();
    const cartTotalItems = computed(() => store.getters.cartTotalItems);

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

    const authStore = useAuthStore();
    const logInFormData = {
      email: "",
      password: "",
    };
    const validateSignInForm = () => {
      return logInFormData.email !== "" && logInFormData.password !== "";
    };

    const logIn = async () => {
      try {
        if (validateSignInForm()) {
          const response = await axios.post("/user/login", logInFormData);
          if (response.data.success) {
            authStore.setToken(response.data.data.token);
            closeModal("loginModal");
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

    const signUpFormData = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "0909090909",
      address: "address",
      password: "",
      password_confirmation: "",
    };

    const validateSignUpForm = () => {
      return (
        signUpFormData.first_name !== "" &&
        signUpFormData.last_name !== "" &&
        signUpFormData.email !== "" &&
        signUpFormData.phone_number !== "" &&
        signUpFormData.address !== "" &&
        signUpFormData.password.length > 7 &&
        signUpFormData.password == signUpFormData.password_confirmation
      );
    };

    const signUp = async () => {
      try {
        if (validateSignUpForm()) {
          const response = await axios.post("/user/create", signUpFormData);
          if (response.data.success) {
            authStore.setUser(response.data.data);
            authStore.setToken(response.data.data.token);
            closeModal("signUpModal");
            alert("Welcome");
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

    const logout = async () => {
      const response = await axios.get("/user/logout");
      if (!response.data.success) {
        alert(response.data.error);
      } else {
        authStore.logout();
      }
    };

    return {
      logIn,
      signUp,
      logout,
      authStore,
      logInFormData,
      signUpFormData,
      cartTotalItems,
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
.user-img-modal {
  border-right: 1px solid #dde3e2;
}
.custom--table {
  box-shadow: 0px 0px 1px 0px #0000002b, 0px 2px 4px 0px #00000029;
  border-radius: var(--font-06);
}
.status-type.open {
  --primary: #2196f3;
}
.status-type.pending-payment {
  --primary: #f09e00;
}
.status-type.shipped {
  --primary: #008655;
}
.status-type.cancelled {
  --primary: #b6c4c1;
}
.custom--table .status-type {
  padding: var(--font-05) var(--font-10);
  width: max-content;
  background-color: var(--primary);
  color: var(--white);
  border-radius: var(--font-15);
}
.custom--table .download-btn {
  background-color: #dde3e2;
  width: var(--font-35);
  height: var(--font-35);
  border-radius: var(--font-06);
}
.clr--subtext {
  color: #0000008a;
}
.pagination-arrow {
  width: var(--font-30);
  height: var(--font-30);
  border-radius: var(--font-05);
  transition: 0.1s;
}
</style>
