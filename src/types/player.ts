import { ISong } from './song';

export type IPlayer = {
  currentSongs: ISong[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: any;
  genreListId: string;
};
