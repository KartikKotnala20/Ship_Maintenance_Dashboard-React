
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../components/Navigation/Navbar";

export default function DashboardPage() {
  return (
    <div className="flex relative flex-row bg-neutral-100 overflow-hidden">
      <Sidebar />

      <div className="w-[85%] h-screen ml-[15%] flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
