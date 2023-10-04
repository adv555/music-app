import React, { useRef, useEffect } from 'react';
import { ITrack } from '../../types/RootObject';

type Props = {
  activeSong: ITrack | null;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
  onLoadedData: (e: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
  repeat: boolean;
  currentIndex?: number;
};

const Player: React.FC<Props> = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef<HTMLAudioElement>(null);
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (!ref.current) return;

    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    if (!ref.current) return;

    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions && activeSong.hub.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
