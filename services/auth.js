import api from "../configs/api.js";

const sendOtp = async (mobile) => {
  try {
    const res = await api.post("login", { cellphone: mobile });
    return { res };
  } catch (error) {
    return { error };
  }
};

const checkOtp = async (otpCode, token) => {
  console.log(otpCode, token);
  try {
    const res = await api.post("check-otp", {
      otp: otpCode,
      login_token: token,
    });
    return { res };
  } catch (error) {
    return { error };
  }
};




export { sendOtp, checkOtp };
