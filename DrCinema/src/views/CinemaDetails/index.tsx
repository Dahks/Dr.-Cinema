import {
  View,
  StatusBar,
  SafeAreaView,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type CinemaDetailsProps } from "../../routes";
import MovieItem from "../../components/MovieItem";
import styles from "../../styles/styles";
import { qwhite } from "../../styles/colors";
import { useGetMoviesQuery } from "../../services/movies";
import { useAppSelector } from "../../redux/hooks";
import type { Movie } from "../../models/Movie";

const CinemaDetails = ({ navigation, route }: CinemaDetailsProps) => {
  const cinema = route.params.cinema;

  const auth = useAppSelector((state) => state.auth);
  const movies = useGetMoviesQuery(undefined, {
    skip: !auth.isAuthenticated || !auth.token,
  });

  StatusBar.setBarStyle("light-content", true);

  const screeningMovies: Movie[] =
    movies.data?.filter((movie) =>
      movie.showtimes.some((s) => s.cinemaId === cinema.id)
    ) ?? [];

  return (
    <SafeAreaView style={styles.containerBackground}>
      <View style={{ alignItems: "center" }}>
        <Txt
          color={qwhite}
          onPress={() => {
            Linking.openURL(`https://${cinema.websiteUrl}`).catch((err) => {
              console.error("An error occurred", err);
            });
          }}
          style={{ textDecorationLine: "underline" }}
        >
          {cinema.websiteUrl}
        </Txt>
      </View>
      <View style={{ margin: 20 }}>
        <Txt size="Small" numberOfLines={10} color={qwhite}>
          {cinema.description}
        </Txt>
        <Txt color={qwhite} style={{ marginBottom: 10 }}>
          {cinema.address}
        </Txt>
        <Txt color={qwhite}>{cinema.phone}</Txt>
      </View>

      {movies.isLoading ? (
        <Txt>{"Loading today's screenings..."}</Txt>
      ) : screeningMovies.length !== 0 ? (
        <>
          <Txt size="Large">Movies screening today</Txt>
          <ScrollView>
            {screeningMovies.map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                onPress={() => {
                  navigation.navigate("MovieDetails", { movie });
                }}
              />
            ))}
          </ScrollView>
        </>
      ) : (
        <Txt>No movies screening today</Txt>
      )}
    </SafeAreaView>
  );
};

export default CinemaDetails;
