import React from 'react';

const TopArtists: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <h2 className="font-bold text-3xl text-white text-left">
            Top Artists
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 animate-slideup2">
        <h3 className="flex flex-col text-center text-4xl text-gray-300 font-bold mb-8 animate-pulse">
          Coming Soon!
        </h3>
      </div>
    </>
  );
};

export default TopArtists;
