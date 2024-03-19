'use client'
import { useState } from "react";
import SendOtpForm from "@/template//sendOtpForm/sendOtpForm";
import CheckOtpForm from "@/template//checkOtpForm/checkOtpForm";

const page = () => {

    const [step, setStep] = useState(1);

    return (
        <div className="w-full h-screen">
            {step === 1 && <SendOtpForm setStep={setStep} />}
            {step === 2 && <CheckOtpForm />}
        </div>
    );
};

export default page;