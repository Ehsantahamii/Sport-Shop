import { useContext, useEffect } from 'react';
import { checkOtp } from 'actions/authAction';
import { useFormState } from "react-dom";
import { toast } from 'react-toastify';
import SubmitBtn from '@/module//submitBtn';
import AuthContext from '@/context//authContext';
import ResendOtpBtn from '@/module//ResendOtpBtn';
import { useRouter } from 'next/navigation';



const CheckOtpForm = () => {

    const [stateOtp, formActionOtp] = useFormState(checkOtp, {});
    const { loginContext } = useContext(AuthContext);

    const router = useRouter()

    useEffect(() => {
        toast(stateOtp?.message, { type: `${stateOtp?.status}` });
        if (stateOtp?.status === 'success') {
            loginContext(stateOtp.user);
            router.push("/");

        }
    }, [stateOtp]);


    return (
        <div className="otp-form-container w-[15dvw] min-w-[310px] mx-auto absolute left-1/2 top-1/2 py-3 -translate-x-1/2 -translate-y-1/2 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center space-x-5 justify-center">
                        <h2>سایت فروشگاهی</h2>
                    </div>
                    <form action={formActionOtp}>
                        <div className="mt-5">
                            <label className="font-semibold text-sm text-gray-600 pb-1 block" htmlFor="otp">کد ورود را وارد نمایید.</label>
                            <input
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                type="text"
                                name='otp'
                                id="otpcode"
                                placeholder="کد ورود"
                            />
                        </div>
                        <div className="mt-[0.8rem]">
                            <SubmitBtn
                                title="ارسال"
                                style="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                            />
                        </div>
                    </form>
                    <ResendOtpBtn />
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

export default CheckOtpForm;