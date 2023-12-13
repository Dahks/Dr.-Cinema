export interface Movie {
  id: number;
  title: string;
  duration: number;
  genres: string;
  plot: string;
  poster: string;
  trailer: string;
  showtimes: any[];
}

export interface APIMovie {
  _id: string;
  id: number;
  title: string;
  actors_abridged: any[];
  alternativeTitles: string;
  certificates: JSON;
  certificateIS: string;
  certificateImg: string;
  directors_abridged: any[];
  durationMinutes: number;
  genres: any[];
  ids: JSON;
  omdb: any[];
  plot: string;
  poster: string;
  ratings: JSON;
  showtimes: any[];
  trailers: any[];
}

export const toMovie = (apiMovie: APIMovie) => {
  const movie: Movie = {
    id: apiMovie.id,
    title: apiMovie.title,
    duration: apiMovie.durationMinutes,
    genres: apiMovie.genres.map((genre) => genre.Name).join(", "),
    plot: apiMovie.plot,
    poster: apiMovie.poster,
    trailer: apiMovie.trailers[0].results[0].url,
    showtimes: apiMovie.showtimes,
  };

  return movie;
};
