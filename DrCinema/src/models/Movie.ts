export interface Movie {
  id: number;
  title: string;
  duration: number;
  genres: string; // maybe cleaner to have string[]
  plot: string;
  poster: string;
  trailer: string | null;
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

export interface UpcomingMovie {
  id: number;
  title: string;
  // actors_abridged: any[];
  // alternativeTitles: string;
  // directors_abridged: any[];
  genres: string; // maybe cleaner to have string[]
  // ids: JSON;
  // omdb: any[];
  plot: string;
  poster: string;
  releaseDate: string;
  trailerUrl: string;
  year: string;
}
export interface APIUpcomingMovie {
  _id: string;
  id: number;
  title: string;
  actors_abridged: any[];
  alternativeTitles: string;
  directors_abridged: any[];
  genres: any[];
  ids: JSON;
  omdb: any[];
  plot: string;
  poster: string;
  "release-dateIS": string;
  trailers: any[];
  year: string;
}

export const toMovie = (apiMovie: APIMovie) => {
  const movie: Movie = {
    id: apiMovie.id,
    title: apiMovie.title,
    duration: apiMovie.durationMinutes,
    genres: apiMovie.genres.map((genre) => genre.Name).join(", "),
    plot: apiMovie.plot,
    poster: apiMovie.poster,
    trailer: apiMovie.trailers[0]?.results[0]?.url,
    showtimes: apiMovie.showtimes,
  };

  return movie;
};

export const toUpcomingMovie = (
  apiUpcomingMovie: APIUpcomingMovie
): UpcomingMovie => {
  const upcomingMovie: UpcomingMovie = {
    id: apiUpcomingMovie.id,
    title: apiUpcomingMovie.title,
    genres: apiUpcomingMovie.genres.map((genre) => genre.Name).join(", "),
    releaseDate: apiUpcomingMovie["release-dateIS"],
    plot: apiUpcomingMovie.plot,
    poster: apiUpcomingMovie.poster,
    trailerUrl: apiUpcomingMovie.trailers[0]?.results[0]?.url,
    year: apiUpcomingMovie.year,
  };

  return upcomingMovie;
};

export const sortUpcomingMovies = (a: UpcomingMovie, b: UpcomingMovie) => {
  return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
};
