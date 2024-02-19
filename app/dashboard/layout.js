"use client";

import SideBar from "@/module//SideBar";
import { userToken } from "@/utils/cookie";
import { getProfile } from "@/services/user";
import useSWR from "swr";

function DashboardLayout({ children }) {
  // const fetcher = (url) => axios.get(url).then((res) => res.data);
  console.log(userToken);
  const { data, error } = useSWR(
    "https://api.developmart.ir/product",
    getProfile
  );
  return (
    <main className="bg-gray-900 w-full h-screen flex flex-row ">
      <SideBar />
      {children}
    </main>
  );
}

export default DashboardLayout;
