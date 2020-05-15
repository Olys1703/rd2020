export interface Movie {
  popularity: number;
  vote_count: number;
  video: any;
  poster_path: string;
  id: number;
  adult: any;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  release_year?: number;
  genres?: { id: number; name: string }[];
  cast?: Cast[];
  crew?: Crew[];
  director?: string;
  [key: string]: any;
}

export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string | undefined;
}
export interface Crew {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: string | undefined;
}
