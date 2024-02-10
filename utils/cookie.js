"use server";

import { cookies } from "next/headers";

async function setCookie(data) {
  cookies().set("accessToken", data.login_token, {
    httpOnly: true,
    maxAge: 1 * 60 * 24 * 7, // One day
    path: "/",
  });
}
async function setBearerCookie(data) {
  cookies().set("bearerToken", data.token, {
    httpOnly: true,
    maxAge: 30 * 60 * 24 * 7, // One month
    path: "/",
  });
}

async function getCookie() {
  const bearerCookie = cookies().get("bearerToken");
  return bearerCookie;
}

export { setCookie, setBearerCookie, getCookie };
