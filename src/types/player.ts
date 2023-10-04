/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISong } from './song';

export type IPlayer = {
  currentSongs: ISong[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: any;
  genreListId: string;
};
