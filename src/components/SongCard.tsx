import React from 'react';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { ISong } from '../types/song';
import { useAppDispatch } from '../redux/hooks';

// {
//     "apple_music_url": "https://music.apple.com/gb/album/paint-the-town-red/1704921687",
//     "artist_id": "42",
//     "key": 673557639,
//     "photo_url": null,
//     "ringtone": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/cd/87/0b/cd870b5f-c356-f761-e176-c45aba37eab1/mzaf_17565732451070337798.plus.aac.ep.m4a",
//     "sections": [],
//     "shazam_url": "https://www.shazam.com/track/42",
//     "spotify_uri": null,
//     "spotify_uri_query": null,
//     "spotify_url": null,
//     "subtitle": "Doja Cat",
//     "title": "Paint The Town Red",
//     "youtube_link": null
//   },

type Props = {
  song: ISong;
  isPlaying: boolean;
  activeSong: ISong | null;
  data: ISong[];
  i: number;
};

const SongCard: React.FC<Props> = ({
  song,
  isPlaying,
  activeSong,
  data,
  i,
}) => {
  const dispatch = useAppDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        {/* <img src={song.images?.coverart} alt="song_img" /> */}
        <img
          src={
            song.photo_url ||
            'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/54/a5/a6/54a5a64a-6346-2505-7d44-6e453c593d55/651637803238.png/400x400cc.jpg'
          }
          alt="song_img"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm text-gray-300 truncate mt-1">
          <Link
            to={song.artist_id ? `/artist/${song?.artist_id}` : '/top-artists'}
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
