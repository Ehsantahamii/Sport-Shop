"use server";

import { postFetch } from "@/utils/requests";
import { cookies } from "next/headers";

export async function editInfo(stateOtp, formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  if (name === "") {
    return {
      status: "error",
      message: "نام الزامی است.",
    };
  }

  if (email === "") {
    return {
      status: "error",
      message: "ایمیل الزامی است.",
    };
  }

  const accessToken = cookies().get("access_token");

  const data = await postFetch(
    "/profile/info/edit",
    { name, email },
    { Authorization: `Bearer ${accessToken.value}` }
  );

  if (data.status === "success") {
    return {
      status: data.status,
      message: "ویرایش اطلاعات با موفقیت انجام شد.",
      user: data.user,
    };
  } else {
    return {
      message: "ویرایش انجام نشد",
    };
  }
}
