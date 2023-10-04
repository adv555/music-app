import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { ITrack } from '../types/RootObject';

type Props = {
  isPlaying: boolean;
  activeSong: ITrack | null;
  song: ITrack;
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
