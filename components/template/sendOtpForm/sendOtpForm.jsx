import { useEffect } from "react";
import { useFormState } from "react-dom";
import { login } from "actions/authAction";
import SubmitBtn from "@/module//submitBtn";

import { toast } from "react-toastify";

const SendOtpForm = ({ setStep }) => {
  const [stateCellphone, formActionCellphone] = useFormState(login, {});
  console.log(stateCellphone?.status);
  useEffect(() => {
    toast(stateCellphone?.message, { type: `${stateCellphone.status}` });
    if (stateCellphone.status === "success") {
      setStep(2)
    }
  });

  return (
    <div className="login-container w-[15dvw] min-w-[310px] mx-auto absolute left-1/2 top-1/2 py-3 -translate-x-1/2 -translate-y-1/2 sm:max-w-xl sm:mx-auto">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-5 justify-center">
            <h2>سایت فروشگاهی</h2>
          </div>
          <form action={formActionCellphone}>
            <div className="mt-5">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="mobile"
              >
                تلفن همراه را وارد نمایید.
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                name="cellphone"
                type="text"
                id="mobile"
                placeholder="تلفن همراه"
              />
            </div>
            <div className="text-right mb-4">
              <a
                className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                href="#"
              ></a>
            </div>
            <div className="mt-5">
              <SubmitBtn
                title="ارسال"
                style="flex item-center justify-center py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              />
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <a
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              href="/"
            >
              بازگشت به صفحه اصلی
            </a>
            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOtpForm;
