import { ITrack } from './RootObject';

export type IPlayer = {
  currentSongs: ITrack[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: ITrack | null;
  genreListId: string;
};
