import api from "../configs/api";

const getProfile = (data) =>
  api.get("products", {
    headers: { Authorization: `Bearer ${data.token}` },
  });
export { getProfile };
