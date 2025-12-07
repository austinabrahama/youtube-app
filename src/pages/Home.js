import Sidebar from '../components/Sidebar';
import { Categories } from '../static/data';
import { useState, useEffect, useContext } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import Video from '../components/Video';
import { Link } from 'react-router-dom';
import { AppContext } from "../contexts/AppContext";

const Home = () => {
  const { showSidebar } = useContext(AppContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "videos"));
    onSnapshot(q, (querySnapshot) => {
      setVideos(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id })
        )
      );
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className={`h-full xl:h-[calc(100vh-56px)] bg-yt-black pt-3 pl-4 ml-0  ${showSidebar ? 'xl:ml-[206px]' : ''}`}>
        <div className="flex flex-row px-3 overflow-x-scroll scrollbar-none">
          {
            Categories.map((category, index) => {
              return <h2 key={index} className="bg-yt-light-gray text-yt-white cursor-pointer px-3 py-2 mr-3 rounded-lg">{category}</h2>
            })
          }
        </div>

        <div className="grid grid-cols-yt gap-x-4 gap-y-6 pt-8 px-4">
          {
            
            videos.length === 0 ? (<h2 className="h-[86vh] text-yt-white">No videos available</h2>) : (
              videos.map((video) => {
                return (
                  <Link to={`/video/${video.id}`} key={video.id}>
                    <Video key={video.id} {...video} />
                  </Link>
                );
              })
            )
          }
        </div>
      </div>
    </>
  )
}

export default Home