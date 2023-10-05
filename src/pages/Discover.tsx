import React from 'react';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/servises/shazamCore';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { genres } from '../assets/constants';
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover: React.FC = () => {
  const dispatch = useAppDispatch(); // eslint-disable-line
  const { isPlaying, activeSong, genreListId } = useAppSelector(
    (state) => state.player,
  );

  //  const { data, isFetching, error } = useGetSongsByGenreQuery(
  //    genreListId || 'POP',
  //  );
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log('🚀 ~ file: Discover.tsx:19 ~ Discover ~ data:', data);

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-8">
        {data?.tracks.map((track, i: number) => (
          <SongCard
            key={track.key}
            song={track}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data.tracks}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
