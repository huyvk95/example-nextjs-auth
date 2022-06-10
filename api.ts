import axios from "axios";
import { User } from "./types";

class Api {
  private static instance: Api;
  static getInstance() {
    if (!this.instance) {
      this.instance = new Api();
      this.instance.init();
    }
    return this.instance;
  }

  init() {
    axios.defaults.baseURL = "http://localhost:3001/";
    axios.defaults.withCredentials = true;
  }

  getProfile() {
    return axios.get<User>("/profile");
  }

  signIn(params: { username: string; password: string }) {
    return axios.post<{ data: User }>("/auth/signIn", params);
  }

  signUp(params: { username: string; password: string }) {
    return axios.post<{ data: User }>("/auth/signUp", params);
  }

  logout() {
    return axios.post("/auth/logout");
  }
}

export default Api.getInstance();
