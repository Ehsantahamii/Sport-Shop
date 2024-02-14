"use client";

import SideBar from "@/module//SideBar";
import { getCookie } from "@/utils/cookie";
import { getProfile } from "@/services/user";

function DashboardLayout({ children }) {
  
  return (
    <main className="bg-gray-900 w-full h-screen flex flex-row ">
      <SideBar />
      {children}
    </main>
  );
}

export default DashboardLayout;
