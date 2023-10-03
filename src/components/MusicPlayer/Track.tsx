import React from 'react';

type Props = {
  isPlaying: boolean;
  isActive: boolean;
  activeSong: any;
};

const Track: React.FC<Props> = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div
      className={`${
        isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''
      } hidden sm:block h-16 w-16 mr-4`}
    >
      <img
        // src={activeSong?.images?.coverart }
        src={
          activeSong?.photo_url ||
          'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/54/a5/a6/54a5a64a-6346-2505-7d44-6e453c593d55/651637803238.png/400x400cc.jpg'
        }
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
