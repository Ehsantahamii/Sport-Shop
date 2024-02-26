"use client"
import Image from "next/image";
import Link from "next/link";
import { TiHeartOutline } from "react-icons/ti";
import { MdPerson } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Searchbar_1 from "../module/searchBar/Searchbar_1";
import { useContext } from "react";
import AuthContext from "@/context//authContext";

const Header = () => {
  const { user } = useContext(AuthContext)
  // console.log(user);
  return (
    <header className="w-full mt-[1.5rem]  flex-hz justify-between">
      <div className="w-1/3">
        <Image
          src="/images/logo.svg"
          width={160}
          height={50}
          loading="lazy"
        />
      </div>
      <div className="w-2/3 flex-hz justify-end gap-5">
        <Searchbar_1 />
        <Link href={"/dashboard"} className="w-[3.12rem] h-[3.12rem] rounded-[1rem] bg-[#fff3f0] hover:bg-[#ffe7e1] flex justify-center items-center">
          <TiHeartOutline className="m-auto text-[1.5rem] text-[#ff8a66]" />
        </Link>

        {user ? (
          <Link href={"/dashboard"} className="flex-hz card-shadow gap-1 px-3 rounded-[1rem] py-2 text-[1rem] hover:bg-[#2d365d] hover:text-white" >
            <MdPerson className="text-[2rem]" />
            پنل کاربری
            <IoIosArrowBack />
          </Link>

        ) :
          (
            <Link href={"/login"} className="flex-hz card-shadow gap-1 px-3 rounded-[1rem] py-2 text-[1rem] hover:bg-[#2d365d] hover:text-white" >
              <MdPerson className="text-[2rem]" />
              ورود/ثبت نام
              <IoIosArrowBack />
            </Link>

          )}


      </div>
    </header>
  );
};

export default Header;
