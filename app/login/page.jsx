'use client'

import { useEffect, useState } from "react";
import SendOtpForm from "@/template//sendOtpForm/sendOtpForm";
import CheckOtpForm from "@/template//checkOtpForm/checkOtpForm";
import { useFormState } from "react-dom";
import { login } from "actions/authAction";
import { toast } from "react-toastify";


const page = () => {

    const [step, setStep] = useState(1);

    return (
        <div className="bg-slate-300 w-full h-screen">
            {step === 1 && <SendOtpForm setStep={setStep} />}
            {step === 2 && <CheckOtpForm />}
        </div>
    );
};

export default page;