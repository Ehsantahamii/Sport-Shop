import { sendOtp, checkOtp } from "@/services/auth";
import { getProfile } from "@/services/user";
import { setCookie } from "@/utils/cookie";

import { toast } from 'react-toastify';


const SendOtpForm = ({ mobile, setMobile, setStep, token, setToken }) => {

    const submitHandler = async (e) => {
        e.preventDefault()

        if (mobile.length !== 11) return;

        const { res, error } = await sendOtp(mobile);

        if (res) setStep(2); setCookie(res.data); setToken(res.data); getProfile(res.data); toast.success(res.data.message);
        console.log(res.data.otpcode);
        if (error) toast.error("اتصال را بررسی کنید!");

        console.log(res, error);
    }
    return (
        <div className="login-container w-[15dvw] min-w-[310px] mx-auto absolute left-1/2 top-1/2 py-3 -translate-x-1/2 -translate-y-1/2 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center space-x-5 justify-center">
                        <h2>سایت فروشگاهی</h2>
                    </div>
                    <form onSubmit={submitHandler} >
                        <div className="mt-5">
                            <label className="font-semibold text-sm text-gray-600 pb-1 block" htmlFor="mobile">تلفن همراه</label>
                            <input
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                type="text"
                                id="mobile"
                                required
                                value={mobile}
                                onChange={e => setMobile(e.target.value)}
                            />
                        </div>
                        <div className="text-right mb-4">
                            <a className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer" href="#">
                            </a>
                        </div>
                        <div className="mt-5">
                            <button
                                className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                type="submit"

                            >
                                ارسال کد تایید
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        <a
                            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                            href="/">
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