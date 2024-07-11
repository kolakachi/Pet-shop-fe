import { defineStore } from "pinia";
import { setToken, getToken, removeToken } from "@/utils/auth";

interface User {
  uuid: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string | null;
  address: string;
  phone_number: string;
  is_marketing: number;
  updated_at: string;
  created_at: string;
  token: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: getToken(),
    user: null as User | null,
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
      this.user = null;
      this.token = null;
      removeToken();
    },
    isLoggedIn() {
      return !!this.token;
    },
  },
});
