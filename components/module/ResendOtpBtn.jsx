"use client"

import { useEffect, useState } from "react";
import SubmitBtn from "./submitBtn";
import { useFormState } from "react-dom";
import { resendOtp } from "@/actions/authAction";
import { toast } from "react-toastify";

const ResendOtpBtn = () => {

    const [stateResendOtp, formActionResendOtp] = useFormState(resendOtp, {});

    useEffect(() => {
        toast(stateResendOtp?.message, { type: `${stateResendOtp?.status}` });
        if (stateResendOtp?.status === 'success') {
            setMinutes(0)
            setseconds(15)
        }
    }, [stateResendOtp]);

    const [minutes, setMinutes] = useState(2);
    const [seconds, setseconds] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            if (seconds > 0) {
                setseconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setseconds(59);
                    setMinutes(minutes - 1);
                }
            }

        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);


    return (
        <>
            {
                seconds > 0 || minutes > 0 ? (
                    <div className="flex gap-1 text-xs pt-2 text-gray-400 uppercase">
                        <button className="text-xs uppercase dark:text-gray-400" disabled >ارسال دوباره</button>
                        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </div>
                ) : (
                    <form action={formActionResendOtp}>
                        <SubmitBtn title='ارسال دوباره' style="text-xs pt-2 text-gray-600 uppercase dark:text-gray-400 hover:underline" />
                    </form>

                )
            }
        </>
    );
};

export default ResendOtpBtn;