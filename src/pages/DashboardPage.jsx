import { NavLink } from "react-router-dom";
import ShipsPage from "./ShipsPage";
// import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Layout from "./layout";
import Product from "./Product";
import { Outlet } from 'react-router-dom'
import Sidebar from "./Sidebar";

export default function DashboardPage (){
  return (
  
     <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      
      <Sidebar/>
      <div >
        

     <div>{<Outlet/>}</div>
      </div>

     </div>
     
  
  



  );
}