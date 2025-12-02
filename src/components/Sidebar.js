import { SideBarItems } from "../static/data";
import { useState } from "react";
import "../App.css";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("Home");

    return (
        <div className="yt-scrollbar bg-yt-black w-65 h-[calc(100vh-56px)] fixed left-0 text-yt-white p-3 overflow-scroll">
            <div className="mb-4">
                {
                    SideBarItems.Top.map((item, index) => {
                        return <div className={`flex items-center h-10 px-3 rounded-xl cursor-pointer hover:bg-yt-light-black ${item.name == activeItem ? "bg-yt-light-gray" : "bg-yt-black"}`} key={index} onClick={() => setActiveItem(item.name)}>
                            <span className="mr-5">{item.icon}</span>
                            <span className="text-sm font-medium">{item.name}</span>
                        </div>
                    })
                    
                }
            </div>
            <hr className="text-yt-light-gray my-2" />
            <div className="mb-4">
                {
                    SideBarItems.Middle.map((item, index) => {
                        return <div className={`flex items-center h-10 px-3 rounded-xl cursor-pointer hover:bg-yt-light-black ${item.name == activeItem ? "bg-yt-light-gray" : "bg-yt-black"}`} key={index} onClick={() => setActiveItem(item.name)}>
                            <span className="mr-5">{item.icon}</span>
                            <span className="text-sm font-medium">{item.name}</span>
                        </div>
                    })
                }
            </div>
            <hr className="text-yt-light-gray my-2" />
            <div className="mb-4">
                {
                    SideBarItems.Bottom.map((item, index) => {
                        return <div className={`flex items-center h-10 px-3 rounded-xl cursor-pointer hover:bg-yt-light-black ${item.name == activeItem ? "bg-yt-light-gray" : "bg-yt-black"}`} key={index} onClick={() => setActiveItem(item.name)}>
                            <span className="mr-5">{item.icon}</span>
                            <span className="text-sm font-medium">{item.name}</span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar