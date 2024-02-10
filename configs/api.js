import axios from "axios";

const api = axios.create({
  baseURL: "https://api.developmart.ir/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
