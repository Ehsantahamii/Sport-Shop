"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
const page = () => {

    const [form, setForm] = useState({ name: "", slug: "", icon: "" });
    console.log(form);

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const submitHandler = e => {
        e.preventDefault()
    }

    return (
        <div className="  p-8 text-white">
            <h2 className='text-[3rem] my-8' >افزودن دسته بندی جدید</h2>

            <form className="flex-vr gap-3" onChange={changeHandler} onSubmit={submitHandler}>
                <label htmlFor="name">اسم دسته بندی </label>
                <input className="max-w-[480px] px-4 py-1 rounded-sm text-black" type="text" name="name" id="name" />
                <label htmlFor="slug">نام مسیر</label>
                <input className="max-w-[480px] px-4 py-1 rounded-sm text-black" type="text" name="slug" id="slug" />
                <label htmlFor="name">آیکون</label>
                <input className="max-w-[480px] px-4 py-1 rounded-sm text-black" type="text" name="icon" id="icon" />
                <Button className="max-w-36 mt-4 bg-transparent" variant="outline" >افزودن</Button>
            </form>
        </div>
    );
};

export default page;