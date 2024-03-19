"use client"
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import SubmitBtn from "../module/submitBtn";
import { useFormState } from "react-dom";
import { editInfo } from "@/actions/profile";
import { toast } from "react-toastify";

const ProfilePage = ({ user }) => {

    const [stateProfile, formAction] = useFormState(editInfo, {});


    useEffect(() => {
        toast(stateProfile?.message, { type: `${stateProfile?.status}` });
    }, [stateProfile]);


    return (
        <form action={formAction} className="flex flex-col gap-4 mt-9 max-w-[480px]">
            <label htmlFor="">نام و نام خانوادگی</label>
            <input className="text-black py-1 px-4 rounded-sm border-b-2" name="name" type="text" placeholder={user.name} />
            <label htmlFor="">ایمیل</label>
            <input className="text-black py-1 px-4 rounded-sm border-b-2" name="email" type="text" placeholder={user.email} />
            <label htmlFor="">تلفن همراه</label>
            <input className="text-black py-1 px-4 rounded-sm border-b-2 cursor-not-allowed" type="text" disabled defaultValue={user.cellphone} />
            <SubmitBtn title="ویرایش" style="bg-blue-600 mt-2 py-2 text-white max-w-[160px] rounded-md" />
        </form>
    );
};

export default ProfilePage;