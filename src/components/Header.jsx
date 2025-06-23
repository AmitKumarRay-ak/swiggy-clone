import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    // console.log("hii");
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },

    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup : "New"
    },

    {
      icon: <IoIosHelpCircleOutline />,
      name: "Help",
    },
    {
      icon: <CgProfile />,
      name: "Sign In",
    },
    {
      icon: <IoCartOutline />,
      name: "Cart",
      sup : "(0)"
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>

      <header className="p-2 shadow-xl sticky top-0 z-[9999] bg-white">
        <div className="max-w-[1200px] m-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/swiggy-logo.png" alt="" className="w-full" />
          </div>

          <div className="">
            <span className="font-bold border-b-[3px] border-red-800">
              Piro
            </span>{" "}
            Bhojpur, Bihar, India
            <RxCaretDown
              fontSize={25}
              className="inline font-bold text-[#fc8019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>

          <nav className="hidden md:flex list-none gap-5 ml-auto font- text-[18px]">
            {links.map((link, index) => {
              return (
                <li key={index} className="flex items-center gap-2 hover:text-[#6c69ee] cursor-pointer">
                  {link.icon}
                  {link.name}
                  <sup className="text-yellow-500">{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
