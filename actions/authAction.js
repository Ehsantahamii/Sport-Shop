"use server";

import { postFetch } from "@/utils/requests";
import { cookies } from "next/headers";


export async function login(stateCellphone, formData) {
  const cellphone = formData.get("cellphone");

  if (cellphone === "") {
    return {
      status: "error",
      message: "فیلد تلفن همراه خالی است.",
    };
  }

  const pattern = /^(\+98|0)?9\d{9}$/;

  if (!pattern.test(cellphone)) {
    return {
      status: "error",
      message: " شماره تلفن همراه نادرست است.",
    };
  }

  const data = await postFetch("/auth/login", { cellphone });
  console.log(data);

  if (data.status === "success") {
    cookies().set({
      name: "login_token",
      value: data.data.login_token,
      httpOnly: true,
      maxAge: 1 * 60 * 24 * 7, // One day
      path: "/",
    });

    return {
      status: data.status,
      message: "کد ارسال شد",
    };
  } else {
    return {
      message: "کد ارسال نشد",
    };
  }
}

export async function checkOtp(stateOtp, formData) {
  const otp = formData.get("otp");

  if (otp === "") {
    return {
      status: "error",
      message: "کد ورود الزامی است.",
    };
  }

  const pattern = /^[0-9]{6}$/;

  if (!pattern.test(otp)) {
    return {
      status: "error",
      message: " کد ورود نامعتبر است.",
    };
  }

  const loginToken = cookies().get("login_token");
  if (!loginToken) {
    return {
      status: "error",
      message: "خطایی رخ داده است، دوباره تلاش کنید.",
    };
  }

  const data = await postFetch("/auth/check-otp", {
    otp,
    login_token: loginToken.value,
  });

  if (data.status === "success") {
    cookies().delete("login_token");
    cookies().set({
      name: "access_token",
      value: data.data.token,
      httpOnly: true,
      maxAge: 1 * 60 * 24 * 7, // One day
      path: "/",
    });

    return {
      status: data.status,
      message: "با موفقیت وارد شدید.",
      user: data.user,
    };
  } else {
    return {
      message: "ورود انجام نشد",
    };
  }
}
export async function resendOtp(stateResendOtp, formData) {
  const loginToken = cookies().get("login_token");

  if (!loginToken) {
    return {
      status: "error",
      message: "خطایی رخ داده است، دوباره تلاش کنید.",
    };
  }

  const data = await postFetch("/auth/resend-otp", {
    login_token: loginToken.value,
  });

  if (data.status === "success") {
    cookies().set({
      name: "login_token",
      value: data.data.login_token,
      httpOnly: true,
      maxAge: 1 * 60 * 24 * 7, // One week
      path: "/",
    });

    return {
      status: data.status,
      message: "کد ورود مجدداً ارسال شد.",
    };
  } else {
    return {
      message: "خطایی رخ داده است، دوباره تلاش کنید.",
    };
  }
}
export async function wai() {
  const accessToken = cookies().get("access_token");
  if (!accessToken) {
    return {
      error: "ابتدا وارد حساب کاربری خود شوید.",
    };
  }

  const data = await postFetch(
    "/auth/me",
    {},
    { Authorization: `Bearer ${accessToken.value}` }
  );
  if (data.status === "success") {
    return {
      user: data.data,
    };
  } else {
    return {
      error: "ابتدا باید وارد حساب کاربری شوید.",
    };
  }
}
export async function logout() {
  cookies().delete("access_token");
}
