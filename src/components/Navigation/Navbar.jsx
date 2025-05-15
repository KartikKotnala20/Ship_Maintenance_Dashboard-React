// import { Bell } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";

// export default function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <nav className="w-full bg-white shadow sticky top-0 z-50">
//       <div className="max-w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           {/* Left Section: Search */}
//           <div className="flex-shrink-0">
//             <div className="flex items-center group overflow-hidden rounded-full transition-all duration-300 w-10 sm:w-64 shadow-sm border border-gray-200 px-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 width="20"
//                 height="20"
//                 className="fill-gray-500"
//               >
//                 <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
//               </svg>
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="hidden sm:block bg-transparent w-full px-3 py-1 text-sm text-gray-700 outline-none"
//               />
//             </div>
//           </div>

//           {/* Right Section: Notification + Profile */}
//           <div className="flex items-center space-x-4">
//             {/* Notification */}
//             <button
//               onClick={() => navigate("/dashboard/notifications")}
//               className="relative hover:text-blue-600 transition-colors"
//             >
//               <Bell className="w-6 h-6" />
//               <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white" />
//             </button>
          
//             {/* Profile */}
//             <div className="flex items-center space-x-2">
//               <FaUserCircle className="text-gray-600 text-2xl" />
//               <span className="hidden sm:block text-gray-700 font-medium text-sm">John Doe</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// import { Bell } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("currentUser");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <nav className="w-full bg-white shadow sticky top-0 z-50">
//       <div className="max-w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Left: Search */}
//           <div className="flex-shrink-0">
//             <div className="flex items-center group overflow-hidden rounded-full transition-all duration-300 w-10 sm:w-64 shadow-sm border border-gray-200 px-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 width="20"
//                 height="20"
//                 className="fill-gray-500"
//               >
//                 <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
//               </svg>
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="hidden sm:block bg-transparent w-full px-3 py-1 text-sm text-gray-700 outline-none"
//               />
//             </div>
//           </div>

//           {/* Right: Notification + Profile */}
//           <div className="flex items-center space-x-6">
//             {/* Notification */}
//             <button
//               onClick={() => navigate("/dashboard/notifications")}
//               className="relative hover:text-blue-600 transition-colors"
//             >
//               <Bell className="w-6 h-6" />
//               <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white" />
//             </button>

//             {/* Profile */}
//             {user && (
//               <div className="flex flex-col items-center">
//                 <FaUserCircle className="text-gray-600 text-3xl" />
//                 <span className="text-xs font-medium text-gray-700 mt-1">
//                   {user.role}
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { SESSION_KEY } from "../../utils/localStorageUtils"; // import the constant for better consistency

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(SESSION_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Search */}
          <div className="flex-shrink-0">
            <div className="flex items-center group overflow-hidden rounded-full transition-all duration-300 w-10 sm:w-64 shadow-sm border border-gray-200 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="fill-gray-500"
              >
                <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="hidden sm:block bg-transparent w-full px-3 py-1 text-sm text-gray-700 outline-none"
              />
            </div>
          </div>

          {/* Right: Notification + Profile */}
          <div className="flex items-center space-x-6">
            {/* Notification */}
            <button
              onClick={() => navigate("/dashboard/notifications")}
              className="relative hover:text-blue-600 transition-colors"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white" />
            </button>

            {/* Profile */}
            {user && (
              <div className="flex flex-col items-center">
                <FaUserCircle className="text-gray-600 text-3xl" />
                <span className="text-xs font-medium text-gray-700 mt-1">
                  {user.role}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}