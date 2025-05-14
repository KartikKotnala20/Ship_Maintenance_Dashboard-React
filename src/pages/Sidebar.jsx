import React, { useState, useEffect } from "react";
import { GiShipBow } from "react-icons/gi";
import { DASHBOARD_SIDEBAR_LINKS } from "./Navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import classNames from "classnames";

const LinkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    if (isMobile) setIsOpen(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      {/* Hamburger Menu (mobile only) */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <button onClick={toggleSidebar}>
            <HiMenu className="text-black text-3xl" />
          </button>
        </div>
      )}

      {/* Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-[#183B4E] bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={classNames(
          "bg-[#183B4E] fixed top-0 left-0 h-full z-50 w-[70%] md:w-[15%] p-3 pb-0 transition-transform duration-300",
          {
            "-translate-x-full": isMobile && !isOpen,
            "translate-x-0": isOpen || !isMobile,
          }
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-1 py-3">
          <GiShipBow fontSize={50} color="cyan" />
          <span className="text-neutral-100 text-[15px] pt-3">
            Ship Maintenance
          </span>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-8 flex flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink
              key={item.key}
              item={item}
              currentPath={location.pathname}
              onClick={closeSidebar}
            />
          ))}
        </div>

        {/* Logout */}
        <div className="mt-32 ">
          <button
            className="flex items-center cursor-pointer text-neutral-400 gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:text-white active:bg-neutral-600 rounded-sm text-xl"
            onClick={() => {
              handleLogout();
              closeSidebar();
            }}
          >
            <BiLogOutCircle className="text-2xl text-white" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

function SidebarLink({ item, currentPath, onClick }) {
  return (
    <Link
      to={item.path}
      onClick={onClick}
      className={classNames(
        currentPath === item.path ? "bg-neutral-700 text-white" : "text-neutral-400",
        LinkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default Sidebar;
