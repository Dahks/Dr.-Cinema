import {
  Button,
  StatusBar,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { type UpcomingProps } from "../../routes";
import styles from "../../styles/styles";
import UpcomingMovieItem from "../../components/UpcomingMovieItem";
import { useGetUpcomingMoviesQuery } from "../../services/movies";
import { sortUpcomingMovies, type UpcomingMovie } from "../../models/Movie";

const Upcoming = ({ navigation, route }: UpcomingProps) => {
  StatusBar.setBarStyle("light-content", true);
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const { data, isLoading, error } = useGetUpcomingMoviesQuery(undefined, {
    skip: !auth.isAuthenticated || !auth.token, // Skip if not authenticated or token is not available
  });

  const renderUpComingMovies = () => {
    return data?.map((movie: UpcomingMovie) => (
      <UpcomingMovieItem
        key={movie.id}
        upcomingMovie={movie}
        onPress={() => {
          navigation?.navigate("MovieDetails");
        }}
      />
    ));
  };

  return (
    <SafeAreaView style={styles.containerBackground}>
      {isLoading ? (
        <Txt>Loading upcoming movies...</Txt>
      ) : error ? (
        <Txt>Error occurred</Txt>
      ) : (
        <ScrollView>{renderUpComingMovies()}</ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Upcoming;
