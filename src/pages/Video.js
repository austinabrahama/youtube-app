import { useParams } from "react-router-dom";
import { doc, query, onSnapshot } from 'firebase/firestore';
import { db, timestamp } from '../firebase';
import { useState, useEffect } from 'react';
import { MdVerified } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { RiShareForwardLine } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { MdSort } from "react-icons/md";
import { collection, addDoc } from "firebase/firestore";
import Comments from "../components/Comments";

const Video = () => {
  const { id } = useParams();

  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [data, setData] = useState(null);
  const [commentText, setCommentText] = useState("");
  
  useEffect(() => {
    const q = query(doc(db, "videos", id));
    onSnapshot(q, (snapshot) => {
      setData(snapshot.data());
    });

    const queryComments = query(collection(db, "videos", id, "comments"));
    onSnapshot(queryComments, (querySnapshot) => {
      setComments(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id })
        )
      );
    });
  }, [id]);

  const addComment = (e) => {
    e.preventDefault();
    
    let newComment = {
      text: commentText,
      name: "Austin",
      image: "",
      uploaded: timestamp
    };

    addDoc(collection(db, "videos", id, "comments"), newComment);
    setCommentText("");
  };

  return (
    <div className="py-8 px-8 bg-yt-black flex flex-col h-full">

      {/* Video Player */}
      <div className="left flex-1">
        <div className="flex justify-center">
          <iframe src={`https://www.youtube.com/embed/${data?.link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-[750px] h-[600px] flex-1 rounded-xl"></iframe>
        </div>
      </div>

      {/* Video Title */}
      <h2 className="text-yt-white font-bold text-xl pt-3">{data?.name.length > 40 ? data?.name.substring(0, 40) + "..." : data?.name}</h2>

      {/* Channel Info and Actions */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row mt-3 items-center">
          <img className="h-9 w-9 rounded-full" src={data?.logo} alt={data?.channel} />
          <div className="flex flex-col ml-3">
            <h3 className="text-yt-white font-medium text-md pt-1 flex flex-row items-center">
              {data?.channel}
              <span className="p-1"><MdVerified /></span>
            </h3>
            <p className="text-yt-gray font-medium text-xs">{data?.views} subscribers</p>
          </div>
          <button className="bg-yt-white py-2 px-5 rounded-full text-yt-black font-semibold ml-3 h-10 hover:bg-yt-gray">Subscribe</button>
        </div>
        <div className="flex flex-row items-center">
          <div className="mr-4 flex flex-row">
              <button className="h-10 w-20 flex flex-row items-center justify-center bg-yt-light-black hover:bg-yt-light-gray text-yt-white rounded-l-full border-r border-yt-gray"><SlLike className="text-center" size={23} /><span className="ml-2">270</span></button>
              <button className="h-10 w-12 flex flex-row items-center justify-center bg-yt-light-black hover:bg-yt-light-gray text-yt-white rounded-r-full"><SlDislike className="text-center" size={23} /></button>
          </div>
          <div className="mr-4">
              <button className="h-10 w-24 flex flex-row items-center justify-center bg-yt-light-black hover:bg-yt-light-gray text-yt-white rounded-full"><RiShareForwardLine className="text-center" size={23} /><span className="ml-2">Share</span></button>
          </div>
          <div className="mr-4">
              <button className="h-10 w-32 flex flex-row items-center justify-center bg-yt-light-black hover:bg-yt-light-gray text-yt-white rounded-full"><HiDownload className="text-center" size={23} /><span className="ml-2">Download</span></button>
          </div>
          <div className="mr-4">
              <button className="h-10 w-10 flex flex-row items-center justify-center bg-yt-light-black hover:bg-yt-light-gray text-yt-white rounded-full"><HiDotsHorizontal className="text-center" size={23} /></button>
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="flex flex-col text-yt-white bg-yt-light-black rounded-lg p-3 mt-4">
        <p className="font-medium text-sm">{data?.views} views <span className="ml-1">{data?.uploadTime}</span></p>
        <p className="font-medium text-sm mt-2">{data?.description}</p>
      </div>

      {/* Comments Section */}
      <div className="flex flex-row mt-4 text-yt-white">
        <span className="font-bold text-lg">0 Comments</span>
        <span className="ml-8 flex flex-row items-center"><MdSort className="text-center" size={23} /><span className="ml-1">Sort by</span></span>
      </div>

      <div className="flex flex-row mt-3 items-center">
        <div className="h-7 w-7 rounded-full text-yt-white bg-yt-light-green flex items-center justify-center">A</div>
        <form className="w-full ml-3" onSubmit={addComment}>
          <input className="bg-yt-black w-full h-10 border-b border-yt-gray px-2 text-yt-white focus:outline-none" type="text" placeholder="Add a comment..." value={commentText} onChange={(e) => setCommentText(e.target.value)} />
        </form>
      </div>

      <div className="mt-4">
        {
          comments.map((comment, index) => {
            return (
              <Comments key={index} {...comment} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Video