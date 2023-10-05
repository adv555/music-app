import React from 'react';
import { useParams } from 'react-router-dom';

const ArtistDetails: React.FC = () => {
  const { artistId } = useParams();
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
          Coming Soon!
        </h1>
        <h2 className="text-white text-lg mb-2">Artist Details Page</h2>
        <p className="text-white text-lg mb-8">Artist ID: {artistId}</p>
      </div>
    </div>
  );
};

export default ArtistDetails;
