import { Link, useNavigate } from "react-router-dom";
import logo from "../resources/images/logo-with-name-white.png";
import React, { useState } from "react";
import CustomContainer from "./CustomContainer";
import { NavList } from "../resources/contents/NavigationList";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [moreListVisibility, setMoreListVisibility] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const navigate = useNavigate();

  const onClickHome = async (e) => {
    e.preventDefault();
    onClickItems();
    navigate("/");
  };

  const onClickItems = () => {
    setShowNavBar(false);
  };

  const onClickNavMenu = () => {
    setShowNavBar((prev) => !prev);
  };

  const NavItem = ({ className }) => {
    return (
      <div className={className}>
        <Link
          className="underline-offset-[6px] hover:underline"
          to="/give"
          onClick={onClickItems}
        >
          Give
        </Link>
        <Link
          className="underline-offset-[6px] hover:underline"
          to="/services"
          onClick={onClickItems}
        >
          Services
        </Link>
        <Link
          className="underline-offset-[6px] hover:underline"
          to="/events"
          onClick={onClickItems}
        >
          Events
        </Link>
        <Link
          className="underline-offset-[6px] hover:underline"
          to="/vision"
          onClick={onClickItems}
        >
          Vision
        </Link>
        <div
          className="relative flex cursor-pointer flex-col"
          onMouseOver={() => setMoreListVisibility(true)}
          onMouseLeave={() => setMoreListVisibility(false)}
        >
          <div className="mt-[12px] flex items-center gap-2">
            <span className="underline-offset-[6px] hover:underline">More</span>
            <div className={`${moreListVisibility ? "rotate-180" : "none"}`}>
              <span>
                <svg
                  class="item-content__icon"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="h-3" />
          <div
            className={`duration-2000 absolute right-0 flex w-auto flex-col gap-4 text-nowrap rounded-md bg-black bg-opacity-90 px-6 py-5 transition ${moreListVisibility ? "top-[44px] opacity-100" : "top-[-1000px] opacity-0"}`}
          >
            {NavList?.map((item, i) => {
              return (
                <div key={i}>
                  <Link
                    className="underline-offset-[6px] hover:underline"
                    to={item?.to}
                    onClick={onClickItems}
                  >
                    {item?.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <CustomContainer className={"!h-auto"}>
      <nav className="relative z-[10] flex justify-between p-6 text-white">
        <div
          className={`absolute left-0 top-0 h-[600px] w-full overflow-hidden bg-black opacity-90 transition-[max-height] duration-500 ease-in-out ${
            showNavBar ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <NavItem className="mx-9 mt-[100px] flex flex-col items-end gap-[36px]" />
        </div>
        <div className="flex items-center">
          <img
            className="z-[11] w-[290px] cursor-pointer md:w-[380px]"
            src={logo}
            alt="Logo"
            onClick={onClickHome}
          />
        </div>
        <div
          className="relative z-[11] mx-8 flex cursor-pointer items-center md:hidden"
          onClick={onClickNavMenu}
        >
          <FaBars
            className={`absolute h-[30px] w-[30px] transition-opacity duration-200 ${
              showNavBar ? "scale-50 opacity-0" : "scale-100 opacity-100"
            }`}
          />
          <FaTimes
            className={`absolute h-[30px] w-[30px] transition-opacity duration-200 ${
              showNavBar ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          />
        </div>
        <div className="hidden md:flex">
          <NavItem className="flex items-center gap-[36px]" />
        </div>
      </nav>
    </CustomContainer>
  );
}
export default Navbar;
