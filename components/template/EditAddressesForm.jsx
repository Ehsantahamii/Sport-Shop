"use client"
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import SubmitBtn from "../module/submitBtn";
import { toast } from "react-toastify";
import { createAddress } from "@/actions/profile";

const EditAddressesForm = ({ addresses, provinces, cities }) => {
    const [citiesFilter, setCitiesFilter] = useState([]);

    const [stateCreate, formActionCreate] = useFormState(createAddress, {});
    useEffect(() => {
        toast(stateCreate?.message, { type: `${stateCreate.status}` });
    });

    function changeProvince(e) {
        setCitiesFilter(cities.filter(city => city.province_id == e.target.value));
    }

    return (
        <form className="flex flex-col" action={formActionCreate}>
            <div className="w-[96%] mx-auto my-4 flex justify-start flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <label htmlFor="">عنوان</label>
                    <br />
                    <input className="w-3/4 border-2 rounded-md my-2 text-[1rem] px-4 py-1" type="text" name="title" />
                </div>
                <div className="w-full md:w-1/2">
                    <label htmlFor="">شماره تماس</label>
                    <br />
                    <input className="w-3/4 border-2 rounded-md my-2 text-[1rem] px-4 py-1" type="text" name="cellphone" />
                </div>
            </div>
            <div className="w-[96%] mx-auto my-4 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <label htmlFor="">کد پستی</label>
                    <br />
                    <input className="w-3/4 border-2 rounded-md my-2 text-[1rem] px-2 py-1" type="text" name="postal_code" />
                </div>
                <div className="w-full md:w-1/2">
                    <label htmlFor="">استان</label>
                    <br />
                    <select name="province_id" className="w-3/4 border-2 rounded-md my-2 text-[1rem] px-2 py-1" type="text" onChange={changeProvince} >
                        {
                            provinces.map(province => (
                                <option key={province.id} value={province.id}>{province.name}</option>
                            ))
                        }
                    </select>
                    <br />
                    <label htmlFor="">شهر</label>
                    <br />
                    <select name="city_id" className="w-3/4 border-2 rounded-md my-2 text-[1rem] px-2 py-1" type="text" >
                        {
                            citiesFilter.map(city =>
                            (
                                <option key={city.id} value={city.id}>{city.name}</option>
                            ))}
                    </select>
                </div>
            </div>
            <div className="w-[96%] mx-auto my-4">
                <label htmlFor="">آدرس</label>
                <br />
                <textarea className="w-[96%] h-40 border-2 rounded-md my-2 text-[1rem] px-2 py-4" type="text" name="address" />
            </div>
            <div className="w-[96%] mx-auto my-4">
                <SubmitBtn style="bg-blue-600 mt-2 py-2 px-4 text-white max-w-[160px] rounded-md" title="ایجاد" />
            </div>
        </form>
    );
};

export default EditAddressesForm;