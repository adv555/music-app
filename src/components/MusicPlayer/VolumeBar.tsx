import React from 'react';
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs';

type Props = {
  value: number;
  min: number | string;
  max: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setVolume: (volume: number) => void;
};

const VolumeBar: React.FC<Props> = ({
  value,
  min,
  max,
  onChange,
  setVolume,
}) => (
  <div className="hidden lg:flex flex-1 items-center justify-end">
    {value <= 1 && value > 0.5 && (
      <BsFillVolumeUpFill
        title="Mute"
        size={25}
        color="#FFF"
        onClick={() => setVolume(0)}
      />
    )}
    {value <= 0.5 && value > 0 && (
      <BsVolumeDownFill
        title="Mute"
        size={25}
        color="#FFF"
        onClick={() => setVolume(0)}
      />
    )}
    {value === 0 && (
      <BsFillVolumeMuteFill
        title="Unmute"
        size={25}
        color="#FFF"
        onClick={() => setVolume(1)}
      />
    )}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
    />
  </div>
);

export default VolumeBar;
