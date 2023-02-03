import ReactPlayer from "react-player/lazy";
import { useState, useEffect } from "react";
import {YoutubeEmededProps} from '../types/types'



export const YoutubeEmeded = ({ Url }:YoutubeEmededProps) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    setHasWindow(true);
  }, []);

  return (
    <>
      <div className="block md:hidden">
        {hasWindow && (
          <ReactPlayer controls={true} url={Url} width="100%" height="300px" />
        )}
      </div>
      <div className="hidden md:block">
        {hasWindow && (
          <ReactPlayer url={Url} controls={true} width="100%" height="600px" />
        )}
      </div>
    </>
  );
};