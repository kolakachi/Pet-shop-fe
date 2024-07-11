<template>
  <!-- 👇🏽 Main -->
  <main class="main">
    <div class="main-inner custom--padding">
      <div class="container-fluid p-0">
        <div class="custom--width py-4">
          <div class="cart-products-container d-flex flex-column gap-4">
            <section class="mt-4 mb-2 col-lg-8 mx-auto">
              <article
                class="d-flex flex-column align-items-start gap-2 text-group my-4"
              >
                <h1 class="main-text clr--primary">Checkout</h1>
              </article>

              <!-- 👇🏽 Item/Product Container -->
              <div class="d-flex flex-column gap-5 my-5">
                <!-- 👇🏽Progress Bar -->
                <div
                  class="progress-bar-container d-flex justify-content-between position-relative z-1 mb-5"
                >
                  <div
                    :class="{ active: checkoutStep == 1 }"
                    class="progress-bar-step"
                  >
                    <p>1</p>
                    <h6 class="fnt-14">Shipping address</h6>
                  </div>
                  <div
                    :class="{ active: checkoutStep == 2 }"
                    class="progress-bar-step"
                  >
                    <p>2</p>
                    <h6 class="fnt-14">Payment details</h6>
                  </div>
                  <div
                    :class="{ active: checkoutStep == 3 }"
                    class="progress-bar-step"
                  >
                    <p>3</p>
                    <h6 class="fnt-14">Review your order</h6>
                  </div>
                </div>

                <!-- 👇🏽 Step 1 -->
                <section
                  class="d-flex flex-column gap-4"
                  v-if="checkoutStep == 1"
                >
                  <header class="fw-medium fnt-19">Shipping Address</header>

                  <form
                    class="d-flex flex-column gap-4"
                    @submit.prevent="goNext()"
                  >
                    <div class="input-group d-flex gap-4 gap-md-5">
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.shipping_address.first_name"
                          class="border-bottom-input w-100"
                          placeholder="First Name *"
                          required
                        />
                      </div>
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.shipping_address.last_name"
                          class="border-bottom-input w-100"
                          placeholder="Last Name *"
                          required
                        />
                      </div>
                    </div>

                    <div class="input-group d-flex gap-3">
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.shipping_address.address_line_1"
                          class="border-bottom-input w-100"
                          placeholder="Address line 1 *"
                          required
                        />
                      </div>
                    </div>

                    <div class="input-group d-flex gap-3">
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.shipping_address.address_line_2"
                          class="border-bottom-input w-100"
                          placeholder="Address line 2 *"
                          required
                        />
                      </div>
                    </div>

                    <div class="input-group d-flex gap-4 gap-md-5">
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.shipping_address.city"
                          class="border-bottom-input w-100"
                          placeholder="City"
                          required
                        />
                      </div>
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.shipping_address.state"
                          class="border-bottom-input w-100"
                          placeholder="State/Province/Region"
                          required
                        />
                      </div>
                    </div>
                    <div class="input-group d-flex gap-4 gap-md-5">
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.shipping_address.zip"
                          class="border-bottom-input w-100"
                          placeholder="Zip/Postal code *"
                          required
                        />
                      </div>
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.shipping_address.country"
                          class="border-bottom-input w-100"
                          placeholder="Country *"
                          required
                        />
                      </div>
                    </div>

                    <div class="d-flex align-items-center gap-2">
                      <input type="checkbox" v-model="useShippingAsPayment" />
                      <label for="">Use this address for payment details</label>
                    </div>

                    <div class="d-flex justify-content-end mt-4">
                      <button
                        type="submit"
                        class="primary--bg px-5 py-2 btn-with-ripple"
                        style="
                          border-radius: var(--font-05);
                          box-shadow: 0px 0px 1px 0px #0000002b,
                            0px 2px 4px 0px #00000029;
                        "
                      >
                        <p class="clr--white text-uppercase fw-medium">Next</p>
                        <span class="btn-ripple"></span>
                      </button>
                    </div>
                  </form>
                </section>

                <!-- 👇🏽 Step 2 -->
                <section
                  class="d-flex flex-column gap-4"
                  v-if="checkoutStep == 2"
                >
                  <header class="fw-medium fnt-19">Payment Details</header>

                  <form
                    class="d-flex flex-column gap-4"
                    @submit.prevent="goNext()"
                  >
                    <div class="input-group d-flex gap-4 gap-md-5">
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.payment_details.first_name"
                          class="border-bottom-input w-100"
                          placeholder="First Name *"
                          required
                        />
                      </div>
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.payment_details.last_name"
                          class="border-bottom-input w-100"
                          placeholder="Last Name *"
                          required
                        />
                      </div>
                    </div>

                    <div class="input-group d-flex gap-3">
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.payment_details.address_line_1"
                          class="border-bottom-input w-100"
                          placeholder="Address line 1 *"
                          required
                        />
                      </div>
                    </div>

                    <div class="input-group d-flex gap-3">
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.payment_details.address_line_2"
                          class="border-bottom-input w-100"
                          placeholder="Address line 2 *"
                          required
                        />
                      </div>
                    </div>

                    <div class="input-group d-flex gap-4 gap-md-5">
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.payment_details.city"
                          class="border-bottom-input w-100"
                          placeholder="City"
                          required
                        />
                      </div>
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.payment_details.state"
                          class="border-bottom-input w-100"
                          placeholder="State/Province/Region"
                          required
                        />
                      </div>
                    </div>

                    <div class="input-group d-flex gap-4 gap-md-5">
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.payment_details.zip"
                          class="border-bottom-input w-100"
                          placeholder="Zip/Postal code *"
                          required
                        />
                      </div>
                      <div class="input-div flex-grow-1">
                        <input
                          type="text"
                          v-model="checkout.payment_details.country"
                          class="border-bottom-input w-100"
                          placeholder="Country *"
                          required
                        />
                      </div>
                    </div>

                    <div class="d-flex align-items-center gap-2">
                      <input type="checkbox" v-model="usePaymentAsShipping" />
                      <label for=""
                        >Payment details are same as shipping details</label
                      >
                    </div>

                    <div class="d-flex flex-column gap-4 mt-5">
                      <header class="fw-medium fnt-19">Payment Type</header>

                      <!-- 👇🏽 Payment Type Buttons -->
                      <div class="d-flex gap-4">
                        <button
                          @click="setPaymentType('credit_card')"
                          :class="{ active: paymentType == 'credit_card' }"
                          class="payment-type d-flex flex-column align-items-center text-center flex-one"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="93"
                            height="76"
                            viewBox="0 0 93 76"
                            fill="none"
                          >
                            <path
                              d="M83.714 0.911133H9.40291C4.24757 0.911133 0.160458 5.04469 0.160458 10.2L0.114014 65.9333C0.114014 71.0887 4.24757 75.2222 9.40291 75.2222H83.714C88.8694 75.2222 93.0029 71.0887 93.0029 65.9333V10.2C93.0029 5.04469 88.8694 0.911133 83.714 0.911133ZM83.714 65.9333H9.40291V38.0667H83.714V65.9333ZM83.714 19.4889H9.40291V10.2H83.714V19.4889Z"
                              fill="#4EC690"
                            />
                          </svg>
                          <p>Credit Card</p>
                        </button>
                        <button
                          @click="setPaymentType('cash_on_delivery')"
                          :class="{ active: paymentType == 'cash_on_delivery' }"
                          class="payment-type d-flex flex-column align-items-center text-center flex-one"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="93"
                            height="75"
                            viewBox="0 0 93 75"
                            fill="none"
                          >
                            <path
                              d="M60.4918 56.2382H74.4251C76.9796 56.2382 79.0696 54.1482 79.0696 51.5938V23.7271C79.0696 21.1727 76.9796 19.0827 74.4251 19.0827H60.4918C57.9374 19.0827 55.8474 21.1727 55.8474 23.7271V51.5938C55.8474 54.1482 57.9374 56.2382 60.4918 56.2382ZM65.1362 28.3715H69.7807V46.9493H65.1362V28.3715ZM32.6251 56.2382H46.5585C49.1129 56.2382 51.2029 54.1482 51.2029 51.5938V23.7271C51.2029 21.1727 49.1129 19.0827 46.5585 19.0827H32.6251C30.0707 19.0827 27.9807 21.1727 27.9807 23.7271V51.5938C27.9807 54.1482 30.0707 56.2382 32.6251 56.2382ZM37.2696 28.3715H41.914V46.9493H37.2696V28.3715ZM18.6918 19.0827C16.1373 19.0827 14.0473 21.1727 14.0473 23.7271V51.5938C14.0473 54.1482 16.1373 56.2382 18.6918 56.2382C21.2462 56.2382 23.3362 54.1482 23.3362 51.5938V23.7271C23.3362 21.1727 21.2462 19.0827 18.6918 19.0827ZM0.114014 9.79377V65.5271C0.114014 70.636 4.29401 74.816 9.4029 74.816H83.714C88.8229 74.816 93.0029 70.636 93.0029 65.5271V9.79377C93.0029 4.68488 88.8229 0.504883 83.714 0.504883H9.4029C4.29401 0.504883 0.114014 4.68488 0.114014 9.79377ZM79.0696 65.5271H14.0473C11.4929 65.5271 9.4029 63.4371 9.4029 60.8826V14.4382C9.4029 11.8838 11.4929 9.79377 14.0473 9.79377H79.0696C81.624 9.79377 83.714 11.8838 83.714 14.4382V60.8826C83.714 63.4371 81.624 65.5271 79.0696 65.5271Z"
                              fill="#4EC690"
                            />
                          </svg>
                          <p>Cash on delivery</p>
                        </button>
                        <button
                          @click="setPaymentType('bank_transfer')"
                          :class="{ active: paymentType == 'bank_transfer' }"
                          class="payment-type d-flex flex-column align-items-center text-center flex-one"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="99"
                            height="70"
                            viewBox="0 0 99 70"
                            fill="none"
                          >
                            <path
                              d="M34.8828 44.6438H0.475342V54.4604H34.8828V69.1854L54.467 49.5521L34.8828 29.9188V44.6438ZM64.2346 39.7354V25.0104H98.642V15.1938H64.2346V0.46875L44.6503 20.1021L64.2346 39.7354Z"
                              fill="#4EC690"
                            />
                          </svg>
                          <p>Bank transfer</p>
                        </button>
                      </div>

                      <!-- 👇🏽 Payment Type Fields -->
                      <div>
                        <!-- 👇🏽 Card Details -->
                        <section
                          class="d-flex flex-column gap-4 mt-4"
                          v-if="paymentType == 'credit_card'"
                        >
                          <header class="fw-medium fnt-19">Card Details</header>

                          <div class="d-flex flex-column gap-4">
                            <div class="input-group d-flex gap-4 gap-md-5">
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="
                                    checkout.card_details.credit_card_number
                                  "
                                  class="border-bottom-input w-100"
                                  placeholder="Credit Card Number *"
                                  required
                                />
                              </div>
                            </div>
                            <div class="input-group d-flex gap-4 gap-md-5">
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="checkout.card_details.expiry_date"
                                  class="border-bottom-input w-100"
                                  placeholder="Expiry *"
                                  required
                                />
                              </div>
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="checkout.card_details.cvv"
                                  class="border-bottom-input w-100"
                                  placeholder="CVV *"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </section>

                        <!-- 👇🏽 Cash on Delivery -->
                        <section
                          class="d-flex flex-column gap-4 mt-4"
                          v-if="paymentType == 'cash_on_delivery'"
                        >
                          <header class="fw-medium fnt-19">
                            Cash on delivery
                          </header>

                          <div class="d-flex flex-column gap-4">
                            <div class="input-group d-flex gap-4 gap-md-5">
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="checkout.cash_on_delivery.first_name"
                                  class="border-bottom-input w-100"
                                  placeholder="First Name *"
                                  required
                                />
                              </div>
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="checkout.cash_on_delivery.last_name"
                                  class="border-bottom-input w-100"
                                  placeholder="Last Name *"
                                  required
                                />
                              </div>
                            </div>

                            <div class="input-group d-flex gap-4 gap-md-5">
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="
                                    checkout.cash_on_delivery.address_line_1
                                  "
                                  class="border-bottom-input w-100"
                                  placeholder="Address Line 1 *"
                                  required
                                />
                              </div>
                            </div>
                            <div class="input-group d-flex gap-4 gap-md-5">
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="
                                    checkout.cash_on_delivery.address_line_2
                                  "
                                  class="border-bottom-input w-100"
                                  placeholder="Address Line 2 *"
                                  required
                                />
                              </div>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                              <input
                                type="checkbox"
                                v-model="checkout.cash_on_delivery.consent"
                              />
                              <label for="">I consent to your T&C’s</label>
                            </div>
                          </div>
                        </section>

                        <!-- 👇🏽 Bank transfer -->
                        <section
                          class="d-flex flex-column gap-4 mt-4"
                          v-if="paymentType == 'bank_transfer'"
                        >
                          <header class="fw-medium fnt-19">
                            Bank transfer
                          </header>

                          <div class="d-flex flex-column gap-4">
                            <div class="input-group d-flex gap-4 gap-md-5">
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="checkout.bank_transfer.swift_code"
                                  class="border-bottom-input w-100"
                                  placeholder="Bank SWIFT code *"
                                  required
                                />
                              </div>
                            </div>

                            <div class="input-group d-flex gap-4 gap-md-5">
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="checkout.bank_transfer.iban"
                                  class="border-bottom-input w-100"
                                  placeholder="IBAN *"
                                  required
                                />
                              </div>
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="checkout.bank_transfer.name"
                                  class="border-bottom-input w-100"
                                  placeholder="Name *"
                                  required
                                />
                              </div>
                            </div>
                            <div class="input-group d-flex gap-4 gap-md-5">
                              <div class="input-div flex-grow-1">
                                <input
                                  type="text"
                                  v-model="checkout.bank_transfer.ref_code"
                                  class="border-bottom-input w-100"
                                  placeholder="Ref Code *"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>

                    <div class="d-flex justify-content-end mt-4">
                      <button
                        type="button"
                        @click="setStep(1)"
                        class="btn-white--bg px-4 py-2 btn-with-ripple"
                        style="
                          margin-right: 10px;
                          border-radius: var(--font-05);
                          box-shadow: 0px 0px 1px 0px #0000002b,
                            0px 2px 4px 0px #00000029;
                        "
                      >
                        <p class="clr--primary text-uppercase fw-medium">Previous</p>
                        <span class="btn-ripple"></span>
                      </button>
                      <button
                        type="submit"
                        class="primary--bg px-5 py-2 btn-with-ripple"
                        style="
                          border-radius: var(--font-05);
                          box-shadow: 0px 0px 1px 0px #0000002b,
                            0px 2px 4px 0px #00000029;
                        "
                      >
                        <p class="clr--white text-uppercase fw-medium">Next</p>
                        <span class="btn-ripple"></span>
                      </button>
                    </div>
                  </form>
                </section>

                <!-- 👇🏽 Step 3 -->
                <section
                  class="d-flex flex-column gap-4"
                  v-if="checkoutStep == 3"
                >
                  <header class="fw-medium fnt-19">Review your order</header>

                  <div class="d-flex flex-column gap-4">
                    <div class="">
                      <nav
                        class="w-100 d-flex justify-content-between align-items-center px-3 py-2 mb-3"
                        style="background-color: #f3f3f3"
                      >
                        <h5>Shipping address</h5>
                        <button @click="setStep(1)">
                          <p class="clr--primary">Edit</p>
                        </button>
                      </nav>

                      <section class="px-3 py-2 d-flex flex-column gap-1">
                        <h6>
                          {{ checkout.shipping_address.first_name }} &
                          {{ checkout.shipping_address.last_name }}
                        </h6>
                        <p class="clr--subtext">
                          {{ checkout.shipping_address.address_line_1 }}
                        </p>
                        <p class="clr--subtext">
                          {{ checkout.shipping_address.address_line_2 }}
                        </p>
                        <p class="clr--subtext">
                          {{ checkout.shipping_address.city }},
                          {{ checkout.shipping_address.state }}
                        </p>
                        <p class="clr--subtext">
                          {{ checkout.shipping_address.zip }},
                          {{ checkout.shipping_address.country }}
                        </p>
                      </section>
                    </div>

                    <div class="">
                      <nav
                        class="w-100 d-flex justify-content-between align-items-center px-3 py-2 mb-3"
                        style="background-color: #f3f3f3"
                      >
                        <h5>Payment details</h5>
                        <button @click="setStep(2)">
                          <p class="clr--primary">Edit</p>
                        </button>
                      </nav>

                      <section class="px-3 py-2 d-flex flex-column gap-1">
                        <h6>
                          {{ checkout.payment_details.first_name }} &
                          {{ checkout.payment_details.last_name }}
                        </h6>
                        <p class="clr--subtext">
                          {{ checkout.payment_details.address_line_1 }}
                        </p>
                        <p class="clr--subtext">
                          {{ checkout.payment_details.address_line_2 }}
                        </p>
                        <p class="clr--subtext">
                          {{ checkout.payment_details.city }},
                          {{ checkout.payment_details.state }}
                        </p>
                        <p class="clr--subtext">
                          {{ checkout.payment_details.zip }},
                          {{ checkout.payment_details.country }}
                        </p>
                      </section>
                    </div>

                    <div
                      class="px-3 py-2 d-flex flex-column gap-1"
                      style="border-top: 1px solid #00000014"
                    >
                      <h6>Payment type</h6>
                      <p class="clr--subtext">{{ checkout.type_of_payment }}</p>
                    </div>

                    <div class="">
                      <nav
                        class="w-100 d-flex justify-content-between align-items-center px-3 py-2 mb-3"
                        style="background-color: #f3f3f3"
                      >
                        <h5>Your order</h5>
                        <router-link
                          :to="{
                            name: 'cart',
                          }"
                        >
                          <p class="clr--primary">Edit</p>
                        </router-link>
                      </nav>

                      <!-- Ordered Products -->
                      <section class="px-3 py-2 d-flex flex-column gap-1">
                        <div
                          v-for="item in cartItems"
                          :key="item.product.uuid"
                          class="cart-item py-3"
                          style="border-bottom: 1px solid #00000014"
                        >
                          <div class="row g-4">
                            <div class="col-2">
                              <div class="d-flex">
                                <img
                                  class="w-100 cart-item-img object-fit-cover"
                                  style="aspect-ratio: 1 / 1"
                                  :src="
                                    getImageUrl(item.product.metadata.image)
                                  "
                                  alt=""
                                />
                              </div>
                            </div>

                            <div class="col-10">
                              <div
                                class="d-flex flex-column justify-content-center gap-1 h-100"
                              >
                                <h5 class="product-title fnt-16">
                                  {{ item.product.title }}
                                </h5>
                                <p class="product-description fnt-14 fw-medium">
                                  {{ item.product.description }}
                                </p>
                                <h4 class="product-quantity fnt-15">
                                  {{ item.product.price }}kn
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="cart-item py-3"
                          style="border-bottom: 1px solid #00000014"
                        >
                          <div class="row g-4">
                            <div class="col-2">
                              <div class="d-flex">
                                <img
                                  class="w-100 cart-item-img object-fit-cover"
                                  style="aspect-ratio: 1 / 1"
                                  src="https://pyxis.nymag.com/v1/imgs/d24/f50/79a43dc8eebd2429524d5f7d201bc76853-Greenies-01-.rsquare.w600.jpg"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div class="col-10">
                              <div
                                class="d-flex flex-column justify-content-center gap-1 h-100"
                              >
                                <h5 class="product-title fnt-16">
                                  Royal Canin
                                </h5>
                                <p class="product-description fnt-14 fw-medium">
                                  Animonda
                                </p>
                                <h4 class="product-quantity fnt-15">15kn</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>

                    <div class="">
                      <nav
                        class="w-100 d-flex justify-content-between align-items-center px-3 py-2 mb-3"
                        style="background-color: #f3f3f3"
                      >
                        <h5>Summary</h5>
                      </nav>

                      <section class="px-3 py-2 d-flex flex-column gap-1">
                        <h6>Summary</h6>
                        <div
                          class="d-flex align-items-center justify-content-between"
                        >
                          <p class="clr--subtext">Subtotal before delivery</p>
                          <p class="clr--subtext">{{cartTotal}}kn</p>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between"
                        >
                          <p class="clr--subtext">Delivery charge</p>
                          <p class="clr--subtext">200kn</p>
                        </div>

                        <div class="" style="border-top: 1px solid #00000014">
                          <div
                            class="d-flex justify-content-between align-items-center py-3"
                          >
                            <h5>Total</h5>
                            <h5>{{ cartTotal + 200 }}Kn</h5>
                          </div>
                        </div>
                      </section>

                      <button
                        class="submit-btn primary--bg btn-with-ripple w-100 py-3 mt-5"
                        type="submit"
                      >
                        <p class="text-uppercase clr--white fw-medium">
                          Place Order
                        </p>
                        <span class="btn-ripple"></span>
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

interface Address {
  first_name: string;
  last_name: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface Checkout {
  shipping_address: Address;
  payment_details: Address;
  type_of_payment: string;
  card_details: {
    credit_card_number: string;
    expiry_date: string;
    cvv: string;
  };
  cash_on_delivery: {
    first_name: string;
    last_name: string;
    address_line_1: string;
    address_line_2: string;
    consent: boolean;
  };
  bank_transfer: {
    swift_code: string;
    iban: string;
    name: string;
    ref_code: string;
  };
}

export default defineComponent({
  name: "CheckoutPage",
  setup() {
    const checkoutStep = ref(1);
    const paymentType = ref("credit_card");
    const useShippingAsPayment = ref(false);
    const usePaymentAsShipping = ref(false);
    const store = useStore();
    const cartItems = computed(() => store.getters.cartItems);
    const cartTotal = computed(() => store.getters.cartTotal);
    const address = ref<Address>({
      first_name: "",
      last_name: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    });
    const checkout = ref<Checkout>({
      shipping_address: { ...address.value },
      payment_details: { ...address.value },
      type_of_payment: "credit_card",
      card_details: {
        credit_card_number: "",
        expiry_date: "",
        cvv: "",
      },
      cash_on_delivery: {
        first_name: "",
        last_name: "",
        address_line_1: "",
        address_line_2: "",
        consent: false,
      },
      bank_transfer: {
        swift_code: "",
        iban: "",
        name: "",
        ref_code: "",
      },
    });

    const validateShippingForm = () => {
      return (
        checkout.value.shipping_address.first_name !== "" &&
        checkout.value.shipping_address.last_name !== "" &&
        checkout.value.shipping_address.address_line_1 !== "" &&
        checkout.value.shipping_address.city !== "" &&
        checkout.value.shipping_address.state !== "" &&
        checkout.value.shipping_address.zip !== "" &&
        checkout.value.shipping_address.country !== ""
      );
    };

    const validatePaymentForm = () => {
      return (
        checkout.value.payment_details.first_name !== "" &&
        checkout.value.payment_details.last_name !== "" &&
        checkout.value.payment_details.address_line_1 !== "" &&
        checkout.value.payment_details.city !== "" &&
        checkout.value.payment_details.state !== "" &&
        checkout.value.payment_details.zip !== "" &&
        checkout.value.payment_details.country !== "" &&
        (paymentType.value === "credit_card"
          ? checkout.value.card_details.credit_card_number !== "" &&
            checkout.value.card_details.expiry_date !== "" &&
            checkout.value.card_details.cvv !== ""
          : true) &&
        (paymentType.value === "cash_on_delivery"
          ? checkout.value.cash_on_delivery.first_name !== "" &&
            checkout.value.cash_on_delivery.last_name !== "" &&
            checkout.value.cash_on_delivery.address_line_1 !== "" &&
            checkout.value.cash_on_delivery.address_line_2 !== "" &&
            checkout.value.cash_on_delivery.consent !== false
          : true) &&
        (paymentType.value === "bank_transfer"
          ? checkout.value.bank_transfer.swift_code !== "" &&
            checkout.value.bank_transfer.iban !== "" &&
            checkout.value.bank_transfer.name !== "" &&
            checkout.value.bank_transfer.ref_code !== ""
          : true)
      );
    };

    const goNext = () => {
      if (checkoutStep.value === 1 && validateShippingForm()) {
        if (useShippingAsPayment.value) {
          checkout.value.payment_details = {
            ...checkout.value.shipping_address,
          };
          usePaymentAsShipping.value = false;
        }
        checkoutStep.value++;
      } else if (checkoutStep.value === 2 && validatePaymentForm()) {
        if (usePaymentAsShipping.value) {
          checkout.value.shipping_address = {
            ...checkout.value.payment_details,
          };
          useShippingAsPayment.value = false;
        }
        checkoutStep.value++;
      } else {
        alert("Please fill in all required fields.");
      }
    };

    const setStep = (step: number) => {
      checkoutStep.value = step;
    };
    const setPaymentType = (type: string) => {
      paymentType.value = type;
      checkout.value.type_of_payment = type;
    };

    const getImageUrl = (imageUuid: string) => {
      return `https://pet-shop.buckhill.com.hr/api/v1/file/${imageUuid}`;
    };

    return {
      cartTotal,
      cartItems,
      getImageUrl,
      checkout,
      checkoutStep,
      goNext,
      setStep,
      paymentType,
      setPaymentType,
      useShippingAsPayment,
      usePaymentAsShipping,
    };
  },
});
</script>
<style scoped>
.text-group .main-text {
  font-weight: 300;
}
.progress-bar-step.active p {
  background-color: var(--primary);
}
.progress-bar-step p {
  width: var(--font-30);
  height: var(--font-30);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000061;
  color: var(--white);
  border-radius: 50%;
}
.progress-bar-step.active h6 {
  color: #000000;
}
.progress-bar-container::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 1px;
  background-color: #00000061;
  z-index: -1;
}
.progress-bar-step {
  display: flex;
  align-items: center;
  gap: var(--font-07);
  background-color: var(--white);
  padding: 0 var(--font-10);
}

.border-bottom-input {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  height: 3.3rem;
  transition: 0.3s;
}
.payment-type {
  box-shadow: 0px 0px 1px 0px #0000002b, 0px 2px 4px 0px #00000029;
  aspect-ratio: 1 / 1;
  justify-content: center;
  gap: var(--font-15);
  border-radius: var(--font-08);
}
.payment-type.active {
  background-color: #f4f6f5;
}
.btn-white--bg {
    border: 1px solid var(--primary);;
}
</style>
