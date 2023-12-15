export interface Movie {
  id: number;
  title: string;
  duration: number;
  genres: string; // maybe cleaner to have string[]
  plot: string;
  poster: string;
  trailer: string | null;
  showtimes: Showtime[];
  year: string;
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
  showtimes: APIShowtime[];
  trailers: any[];
  year: string;
}

export interface UpcomingMovie {
  id: number;
  title: string;
  genres: string; // maybe cleaner to have string[]
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

export interface Showtime {
  cinemaId: number;
  schedules: Schedule[];
}

export interface Schedule {
  time: string;
  purchaseUrl: string;
}

interface APIShowtime {
  cinema: { id: number, name: string };
  cinema_name: string;
  schedule: Array<{ time: string, purchase_url: string, info: string }>;
}

const toShowtime = (apiShowtimes: APIShowtime[]): Showtime[] => {
  const showtimes: Showtime[] = apiShowtimes.map((apiShowtime) => {
    const showtime: Showtime = {
      cinemaId: apiShowtime.cinema.id,
      schedules: apiShowtime.schedule.map((sch): Schedule => {
        return { time: sch.time, purchaseUrl: sch.purchase_url };
      }),
    };

    return showtime;
  });
  return showtimes;
};

export const releaseDateSort = (a: UpcomingMovie, b: UpcomingMovie) => {
  const dateA = new Date(a.releaseDate).getTime();
  const dateB = new Date(b.releaseDate).getTime();

  return dateA - dateB;
};

export const toMovie = (apiMovie: APIMovie) => {
  const movie: Movie = {
    id: apiMovie.id,
    title: apiMovie.title,
    duration: apiMovie.durationMinutes,
    genres: apiMovie.genres.map((genre) => genre.Name).join(", "),
    plot: apiMovie.plot,
    poster: apiMovie.poster,
    trailer: apiMovie.trailers[0]?.results[0]?.url,
    showtimes: toShowtime(apiMovie.showtimes),
    year: apiMovie.year,
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
