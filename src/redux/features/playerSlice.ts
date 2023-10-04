import { createSlice } from '@reduxjs/toolkit';
import { IPlayer } from '../../types/player';

const initialState: IPlayer = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {
    apple_music_url: '',
    artist_id: '',
    key: 0,
    photo_url: null,
    ringtone: '',
    sections: [],
    shazam_url: '',
    spotify_uri: null,
    spotify_uri_query: null,
    spotify_url: null,
    subtitle: '',
    title: '',
    youtube_link: null,
  },
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      // if (action.payload?.data?.tracks?.hits) {
      //   state.currentSongs = action.payload.data.tracks.hits;
      // } else if (action.payload?.data?.properties) {
      //   state.currentSongs = action.payload?.data?.tracks;
      // } else {
      //   state.currentSongs = action.payload.data;
      // }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      // if (state.currentSongs[action.payload]?.track) {
      //   state.activeSong = state.currentSongs[action.payload]?.track;
      // } else {
      //   state.activeSong = state.currentSongs[action.payload];
      // }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      // if (state.currentSongs[action.payload]?.track) {
      //   state.activeSong = state.currentSongs[action.payload]?.track;
      // } else {
      //   state.activeSong = state.currentSongs[action.payload];
      // }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
