import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import "../css/HomeDetailYoutube.css";
const HomeDetailYoutube = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [payload, loading] = useAxios({
    url: "http://localhost:6120/api/intro/",
  });
  useEffect(() => {
    if (payload) {
      const youtubeData = payload.replace(
        "https://youtu.be/",
        "https://www.youtube.com/embed/"
      );
      setYoutubeUrl(youtubeData);
    }
  }, [payload]);

  return (
    <div className="home-youtube">
      <iframe className="home-youtube-content" src={youtubeUrl} />
    </div>
  );
};

export default HomeDetailYoutube;
