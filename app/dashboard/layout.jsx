
import SideBar from "@/module//SideBar";
import { AuthProvider } from "@/context//authContext";


function DashboardLayout({ children }) {

  return (
    <AuthProvider>
      <main className="bg-gray-900 w-full h-screen flex flex-row ">
        <SideBar />
        <div className="p-5">
          {children}
        </div>
        <script src="https://github.com/babakhani/PersianDate/blob/master/dist/persian-date.min.js"></script>
      </main>
    </AuthProvider>
  );
}

export default DashboardLayout;
