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

export async function createAddress(stateOtp, formData) {
  const title = formData.get("title");
  const cellphone = formData.get("cellphone");
  const postal_code = formData.get("postal_code");
  const province_id = formData.get("province_id");
  const city_id = formData.get("city_id");
  const address = formData.get("address");

  if (title === "") {
    return {
      status: "error",
      message: "عنوان الزامی است.",
    };
  }

  if (cellphone === "") {
    return {
      status: "error",
      message: "تلفن همراه الزامی است.",
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/i;

  if (!pattern.test(cellphone)) {
    return {
      status: "error",
      message: " شماره تلفن همراه نادرست است.",
    };
  }

  if (province_id === "") {
    return {
      status: "error",
      message: "استان را وارد کنید.",
    };
  }
  if (postal_code === "") {
    return {
      status: "error",
      message: "کد پستی الزامی است.",
    };
  }
  const postalCodePattern = /^\d{5}[ -]?\d{5}$/i;
  if (postal_code === "" || !postalCodePattern.test(postal_code)) {
    return {
      status: "error",
      message: "فیلد کد پستی نامعتبر است.",
    };
  }

  if (city_id === "") {
    return {
      status: "error",
      message: "شهر را وارد کنید.",
    };
  }
  if (address === "") {
    return {
      status: "error",
      message: "آدرس الزامی است.",
    };
  }

  const accessToken = cookies().get("access_token");

  const data = await postFetch('/profile/addresses/create', { title, cellphone, postal_code, province_id, city_id, address }, { 'Authorization': `Bearer ${accessToken.value}` });

  if (data.status === "success") {
    // revalidatePath("/profile/addresses");
    return {
      status: data.status,
      message: "آدرس شما ثبت شد.",
    };
  } else {
    return {
      status: data.status,
      message: data.message,
    };
  }
}
