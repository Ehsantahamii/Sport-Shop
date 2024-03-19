
import SideBar from "@/module//SideBar";
import { AuthProvider } from "@/context//authContext";


function DashboardLayout({ children }) {

  return (
    <AuthProvider>
      <main className=" w-full max-w-full  h-screen max-h-[550px] my-12 mx-auto flex flex-row justify-center gap-8 ">
        <SideBar />
        <div className=" w-[85%] lg:w-2/3 mx-auto p-5 overflow-y-auto card-shadow">
          {children}
        </div>
        <script src="https://github.com/babakhani/PersianDate/blob/master/dist/persian-date.min.js"></script>
      </main>
    </AuthProvider>
  );
}

export default DashboardLayout;
