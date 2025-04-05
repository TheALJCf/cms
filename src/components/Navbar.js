import { Link, useNavigate } from "react-router-dom";
import logo from '../resources/images/logo-with-name-white.png';
import React, { useState } from 'react';
import CustomContainer from "./CustomContainer";
import { NavList } from "../resources/contents/NavigationList";

function Navbar() {
  const [moreListVisibility, setMoreListVisibility] = useState(false);
  const navigate = useNavigate();

  const onClickHome = async (e) => {
    e.preventDefault();
    navigate('/');
  };
  
  return (
    <CustomContainer className={'!h-auto'}>
      <nav className="text-white  flex justify-between z-[10] p-6">
        <div className="flex items-center">
          <img className="cursor-pointer" src={logo} alt="Logo" width="380" height="25" onClick={onClickHome}/>
        </div>
        <div className="flex gap-[36px] items-center">
          <Link className="hover:underline underline-offset-[6px]" to="/give">Give</Link>
          <Link className="hover:underline underline-offset-[6px]" to="/services">Services</Link>
          <Link className="hover:underline underline-offset-[6px]" to="/events">Events</Link>
          <Link className="hover:underline underline-offset-[6px]" to="/vision">Vision</Link>
          <div className="flex flex-col cursor-pointer relative" onMouseOver={()=>setMoreListVisibility(true)} onMouseLeave={()=>setMoreListVisibility(false)}>
            <div className="flex items-center gap-2 mt-[12px]">
              <span className="hover:underline underline-offset-[6px]" >More</span>
              <div className={`${moreListVisibility ? "rotate-180" : "none"}`}>
                <span>
                  <svg class="item-content__icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z" fill="currentColor"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="h-3"/>
            <div className={`flex flex-col gap-4 bg-black bg-opacity-90 rounded-md px-6 py-5 absolute right-0 w-auto text-nowrap transition duration-2000 ${moreListVisibility ? 'opacity-100 top-[44px]' : 'opacity-0 top-[-1000px]'}`}>
              {
                NavList?.map((item, i) => {
                  return(<Link className="hover:underline underline-offset-[6px]" to={item?.to}>{item?.title}</Link>)
                })
              }
            </div>
          </div>
        </div>
      
      </nav>
    </CustomContainer>
  );
}
export default Navbar;