import { defineStore } from "pinia";
import { setToken, getToken, removeToken } from "@/utils/auth";
import { User } from "../models/User";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: getToken(),
    user: {
      uuid: "",
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
      address: "",
      phone_number: "",
      is_marketing: 0,
      updated_at: "",
      created_at: "",
      token: "",
    },
  }),
  actions: {
    setUser(data: User) {
      this.user = data;
    },
    setToken(token: string) {
      this.token = token;
      setToken(token);
    },
    logout() {
      this.user = {
        uuid: "",
        first_name: "",
        last_name: "",
        email: "",
        avatar: "",
        address: "",
        phone_number: "",
        is_marketing: 0,
        updated_at: "",
        created_at: "",
        token: "",
      };
      this.token = null;
      removeToken();
    },
    isLoggedIn() {
      return !!this.token;
    },
    getUser() {
      return this.user;
    },
  },
});
