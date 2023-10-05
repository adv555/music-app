import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from 'react-icons/bs';
import { ITrack } from '../../types/RootObject';

type Props = {
  isPlaying: boolean;
  repeat: boolean;
  setRepeat: React.Dispatch<React.SetStateAction<boolean>>;
  shuffle: boolean;
  setShuffle: React.Dispatch<React.SetStateAction<boolean>>;
  currentSongs: ITrack[] | null;
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
};

const Controls: React.FC<Props> = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
      <BsArrowRepeat
        title="Repeat song"
        size={20}
        color={repeat ? 'red' : 'white'}
        onClick={() => setRepeat((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
      {currentSongs?.length && (
        <MdSkipPrevious
          title="Previous song"
          size={30}
          color="#FFF"
          className="cursor-pointer"
          onClick={handlePrevSong}
        />
      )}
      {isPlaying ? (
        <BsFillPauseFill
          title="Pause song"
          size={45}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      ) : (
        <BsFillPlayFill
          title="Play song"
          size={45}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      )}
      {currentSongs?.length && (
        <MdSkipNext
          title="Next song"
          size={30}
          color="#FFF"
          className="cursor-pointer"
          onClick={handleNextSong}
        />
      )}
      <BsShuffle
        title="Shuffle songs"
        size={20}
        color={shuffle ? 'red' : 'white'}
        onClick={() => setShuffle((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
    </div>
  );
};

export default Controls;
