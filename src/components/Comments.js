import { BiLike, BiDislike } from "react-icons/bi";

const Comments = ({name, text, uploaded}) => {
  return (
    <div className="flex flex-row mt-3">
        <div className="h-7 w-7 rounded-full text-yt-white bg-yt-light-green flex items-center justify-center">A</div>
        <div className="ml-3">
            <h3 className="text-yt-white font-medium text-md">{name} <span className="text-yt-gray text-sm ml-2">{new Date(uploaded.toDate()).toString().slice(0, 25)}</span></h3>
            <p className="text-yt-white font-medium text-sm mt-1">{text}</p>
            <div className="flex items-center py-3 text-yt-white">
                <div className="flex flex-row items-center">
                    <BiLike className="cursor-pointer" size={16} />
                    <span className="ml-2">21</span>
                </div>
                <BiDislike className="cursor-pointer ml-4" size={16} />
                <span className="cursor-pointer font-semibold text-xs ml-6">Reply</span>
            </div>
        </div>
    </div>
  )
}

export default Comments