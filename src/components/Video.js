import { MdVerified } from "react-icons/md";

const Video = ({channel, description, duration, id, link, logo, name, subscribers, thumbnail, uploadTime, views}) => {
  return (
    <div className="flex flex-col max-w-[260px] cursor-pointer">
        <div className="relative w-full">
            <img className="w-full h-full overflow-hidden rounded-2xl" src={thumbnail} alt={name} />
            <p className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 rounded font-medium">{duration}</p>
        </div>
        <div className="flex flex-row mt-3">
            <img className="h-9 w-9 rounded-full" src={logo} alt={channel} />
            <div className="flex flex-col ml-2">
                <h2 className="text-yt-white font-medium pt-1">{name.length > 40 ? name.substring(0, 40) + "..." : name}</h2>
                <h3 className="text-yt-gray font-medium text-xs pt-1 flex flex-row items-center">
                  {channel}
                  <span className="p-1"><MdVerified /></span>
                </h3>
                <p className="text-yt-gray font-medium text-xs">{views} • {uploadTime}</p>
            </div>
        </div>
    </div>
  )
}

export default Video