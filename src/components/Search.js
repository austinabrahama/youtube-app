import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdMic } from "react-icons/md";
import { LuArrowLeft } from "react-icons/lu";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Search = () => {
    const { toggleSearchBar } = useContext(AppContext);

  return (
    <div className="flex flex-row">
        <button className="h-10 w-16 flex items-center justify-center cursor-pointer text-yt-white block xl:hidden" onClick={() => toggleSearchBar(false)}>
            <LuArrowLeft className="text-center" size={23} />
        </button>
        <div className="flex flex-row items-center justify-center ml-10 ">
            <input
                className="h-10 w-full bg-yt-black border border-yt-light-black rounded-l-full px-4 text-yt-white focus:outline-none" type="text" placeholder="Search"
            />
            <button className="h-10 w-16 bg-yt-light-black rounded-r-full flex items-center justify-center hover:bg-yt-light-gray cursor-pointer text-yt-white">
                <HiMagnifyingGlass className="text-center" size={23} />
            </button>
        </div>

        <div className="h-10 w-10 bg-yt-light-black rounded-full flex items-center justify-center hover:bg-yt-light-gray cursor-pointer text-yt-white ml-4">
            <MdMic className="text-center" size={23} />
        </div>
    </div>
  )
}

export default Search