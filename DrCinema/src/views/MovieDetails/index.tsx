import { Button, View, StatusBar, SafeAreaView, Image } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type MovieDetailsProps } from "../../routes";
import ShowtimeItem from "../../components/ShowtimeItem";
import styles from "../../styles/styles";
import WebView from "react-native-webview";
import { qwhite } from "../../styles/colors";

const movie = {
  _id: "634523b716aa346753e0cf63",
  id: 14411,
  ids: {
    imdb: "7322224",
    rotten: "",
    tmdb: "497828",
  },
  title: "Triangle of Sadness",
  poster: "https://kvikmyndir.is/images/poster/14411_500.jpg",
  alternativeTitles: "",
  year: "2022",
  "release-dateIS": "2022-10-13",
  genres: [
    {
      ID: 2,
      Name: "Gamanmynd",
      "NameEN\t": "Comedy",
    },
    {
      ID: 4,
      Name: "Drama",
      "NameEN\t": "Drama",
    },
  ],
  actors_abridged: [
    {
      name: "Harris Dickinson",
    },
    {
      name: "Charlbi Dean",
    },
  ],
  directors_abridged: [
    {
      name: "Ruben Östlund",
    },
  ],
  trailers: [
    {
      id: 497828,
      results: [
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "TRIANGLE OF SADNESS - Clip",
          key: "AEMlZoIFHJw",
          site: "YouTube",
          size: 1080,
          type: "Clip",
          official: true,
          published_at: "2022-10-03T23:05:01.000Z",
          id: "633c77e85ab81a0079bf06a7",
          url: "https://www.youtube.com/embed/AEMlZoIFHJw?rel=0",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Official Trailer",
          key: "VDvfFIZQIuQ",
          site: "YouTube",
          size: 1080,
          type: "Trailer",
          official: true,
          published_at: "2022-08-09T16:00:18.000Z",
          id: "62f2958685b105007df15dc3",
          url: "https://www.youtube.com/embed/VDvfFIZQIuQ?rel=0",
        },
      ],
    },
  ],
  omdb: [
    {
      Title: "Triangle of Sadness",
      Year: "2022",
      Rated: "N/A",
      Released: "28 Sep 2022",
      Runtime: "147 min",
      Genre: "Comedy, Drama",
      Director: "Ruben Östlund",
      Writer: "Ruben Östlund",
      Actors: "Thobias Thorwid, Harris Dickinson, Charlbi Dean",
      Plot: "A cruise for the super-rich sinks thus leaving survivors, including a fashion model celebrity couple, trapped on an island.",
      Language: "English",
      Country: "Sweden, France, United Kingdom, Germany, Turkey, Greece",
      Awards: "2 wins & 2 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDRiZjc0ZDMtMjhlYi00ZjAzLTg0MDQtZDI2NGEyYTBlN2M2XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.8/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "73%",
        },
        {
          Source: "Metacritic",
          Value: "68/100",
        },
      ],
      Metascore: "68",
      imdbRating: "7.8",
      imdbVotes: "956",
      imdbID: "tt7322224",
      Type: "movie",
      tomatoMeter: "N/A",
      tomatoImage: "N/A",
      tomatoRating: "N/A",
      tomatoReviews: "N/A",
      tomatoFresh: "N/A",
      tomatoRotten: "N/A",
      tomatoConsensus: "N/A",
      tomatoUserMeter: "N/A",
      tomatoUserRating: "N/A",
      tomatoUserReviews: "N/A",
      tomatoURL: "https://www.rottentomatoes.com/m/triangle_of_sadness",
      DVD: "N/A",
      BoxOffice: "N/A",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
  ],
  plot: "Við fylgjumst með hinum ofurríku, þegar ungt par á uppleið í módel bransanum fær tækifæri til að dvelja á skemmtiferðaskipi þar sem dýr föt, yfirgengilegir málsverðir og stéttaskipting ræður ríkjum. En þegar skipið strandar og skipverjar flýja upp á eyju, þá breytist allt …",
};

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaView style={styles.containerBackground}>
      <View style={{ height: 200 }}>
        <WebView
          source={{ uri: "https://www.youtube.com/embed/EiKXJ-ObtGk?rel=0" }}
        />
      </View>
      <View style={{ flexDirection: "row", minHeight: 200 }}>
        <Image
          style={{ width: 100 }}
          source={{
            uri: movie.poster,
          }}
          resizeMode="contain"
        ></Image>
        <View>
          <Txt size="Huge">{movie.title}</Txt>
          <Txt color={qwhite}>{movie.year}</Txt>
          <Txt color={qwhite}>{movie.omdb[0].Runtime}</Txt>
        </View>
      </View>
      <Txt color={qwhite}>
        {movie.genres[0].Name}, {movie.genres[1].Name}
      </Txt>
      <Txt size="Small" numberOfLines={10} color={qwhite}>
        {movie.plot}
      </Txt>
      <Txt size="Large">Showtimes in Smárabíó</Txt>
      <ShowtimeItem
        time="20:00"
        purchaseUrl="http://kvikmyndahusio.azurewebsites.net/websales/show/794472/"
      ></ShowtimeItem>
    </SafeAreaView>
  );
};

export default MovieDetails;
