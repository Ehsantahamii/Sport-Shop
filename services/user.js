import api from "../configs/api";

const getProfile = () =>
  api.get("products", {
    headers: { Authorization: `Bearer ${token}` },
  });
export { getProfile };
