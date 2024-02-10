'use client'

import { useState } from "react";
import CheckOtpForm from "@/template//checkOtpForm/checkOtpForm";
import SendOtpForm from "@/template//sendOtpForm/sendOtpForm";



const page = () => {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [token, setToken] = useState("");

    return (
        <div className="bg-slate-300 w-full h-screen">
            {step === 1 && <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} token={token} setToken={setToken} />}
            {step === 2 && <CheckOtpForm otpCode={otpCode} setOtpCode={setOtpCode} mobile={mobile} setStep={setStep} token={token} />}
        </div>
    );
};

export default page;