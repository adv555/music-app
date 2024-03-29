// import React from 'react';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import {
  ArtistDetails,
  TopArtists,
  // AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
  NotFound,
} from './pages';
import { useAppSelector } from './redux/hooks';

const App: React.FC = () => {
  const { activeSong } = useAppSelector((state) => state.player);

  return (
    <div className="relative flex bg-black">
      <Sidebar />
      {/* <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]"> */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-accent">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              {/* <Route path="/around-you" element={<AroundYou />} /> */}
              <Route path="/artists/:artistId" element={<ArtistDetails />} />
              <Route path="/songs/:songId" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-player backdrop-blur-lg rounded-t-3xl z-10 transition-all">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
