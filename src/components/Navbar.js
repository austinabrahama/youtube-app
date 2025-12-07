import { HiOutlineBars3, HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa";
import logo from "url:../assets/logo-black.png";
import { MdMic } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { PiUserCircle } from "react-icons/pi";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Search from "./Search";

let Navbar = () => {
    const { toggleSidebar, toggleSearchBar, showSearchBar } = useContext(AppContext);

    return (
        <>
            {
                showSearchBar ? 
                <div className="bg-yt-black h-14 flex items-center pl-5 pr-5 justify-between w-full z-10">
                    <Search />
                </div> : <div className="bg-yt-black h-14 flex items-center pl-5 pr-5 justify-between w-full z-10">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex items-center justify-center">
                            <div className="text-yt-white p-2 w-10 text-2xl text-center hover:bg-yt-light-gray rounded-full cursor-pointer mr-2" onClick={toggleSidebar}>
                                <HiOutlineBars3 size={25} />
                            </div>
                            <div className="py-5 w-28 pr-3">
                                <img className="h-10 cursor-pointer" src={logo} alt="youtube-logo" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-1">
                            <div className="hidden xl:block">
                                <Search />
                            </div>
                            <div className="flex items-center ml-1 xl:ml-10 w-[100%] block xl:hidden">
                                <button className="h-10 w-10 bg-yt-light-black rounded-full flex items-center justify-center hover:bg-yt-light-gray cursor-pointer text-yt-white" onClick={() => toggleSearchBar(true)}>
                                    <HiMagnifyingGlass className="text-center" size={23} />
                                </button>
                                <div className="h-10 w-10 bg-yt-light-black rounded-full flex items-center justify-center hover:bg-yt-light-gray cursor-pointer text-yt-white ml-4">
                                    <MdMic className="text-center" size={23} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-row items-center">
                                <div className="ml-4 mr-4">
                                    <button className="h-10 w-24 flex flex-row items-center justify-center bg-yt-light-black hover:bg-yt-light-gray text-yt-white rounded-full"><BsPlusLg className="text-center" size={23} /><span className="ml-1">Create</span></button>
                                </div>
                                <div className="mr-2 h-10 w-10 text-yt-white hover:bg-yt-light-gray rounded-full flex items-center justify-center">
                                    <FaRegBell className="text-center" size={23} />
                                </div>
                                <div className="mr-2 h-10 w-22 rounded-full text-yt-white border border-yt-light-black flex items-center justify-center hidden"><PiUserCircle className="text-center" size={23} /><span className="ml-1">Sign in</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </>
    );
};

export default Navbar;