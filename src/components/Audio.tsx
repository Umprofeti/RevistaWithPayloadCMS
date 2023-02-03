import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {AudioProps} from '../types/types';

export const AudioTag = ({ Source, Name }: AudioProps) => {
  const [play, setPlay] = useState(true);

  const PlayButton = () => {
    if (typeof window !== "undefined") {
      const audio:any = document.getElementById(Name);
      audio.play();
    }
  };

  const PauseBottom = () => {
    if (typeof window !== "undefined") {
      const audio:any = document.getElementById(Name);
      audio.pause();
    }
  };

  const Replay = () => {
    if (typeof window !== "undefined") {
      const audio:any = document.getElementById(Name);
      audio.load();
      setPlay(true);
      PauseBottom();
    }
  };

  return (
    <div>
      <audio className="Audio" id={Name}>
        <source src={Source} type="audio/mpeg" />
      </audio>
      <div className="relative left-[80%] top-[9vw] flex w-[15%] flex-row justify-center rounded-md bg-black align-middle text-[1.5rem] text-white shadow-xl md:left-[85%] md:w-[10%] xl:text-[2.5rem]">
        <a
          className="replay transition-all hover:scale-125 hover:cursor-pointer"
          onClick={() => {
            Replay();
          }}
        >
          <i className="bi bi-skip-start"></i>
        </a>
        <a
          className="Control transition-all hover:scale-125 hover:cursor-pointer"
          onClick={() => {
            setPlay(!play);
            play ? PlayButton() : PauseBottom();
          }}
        >
          {play ? (
            <i className="bi bi-play"></i>
          ) : (
            <i className="bi bi-pause-fill"></i>
          )}
        </a>
      </div>
    </div>
  );
};
