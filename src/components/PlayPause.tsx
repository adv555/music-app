import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { ISong } from '../types/song';

type Props = {
  isPlaying: boolean;
  activeSong: ISong | null;
  song: ISong;
  handlePause: () => void;
  handlePlay: () => void;
};

const PlayPause: React.FC<Props> = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) =>
  isPlaying && activeSong?.key === song.key ? (
    <FaPauseCircle
      size={35}
      onClick={handlePause}
      className="text-gray-300 text-5xl cursor-pointer"
    />
  ) : (
    <FaPlayCircle
      size={35}
      onClick={handlePlay}
      className="text-white text-5xl cursor-pointer"
    />
  );

export default PlayPause;
