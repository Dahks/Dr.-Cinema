import {
  Button,
  StatusBar,
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Txt from "../../components/Txt";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { type UpcomingProps } from "../../routes";
import styles from "../../styles/styles";
import UpcomingMovieItem from "../../components/UpcomingMovieItem";
import { useGetUpcomingMoviesQuery } from "../../services/movies";
import {
  releaseDateSort,
  sortUpcomingMovies,
  type UpcomingMovie,
} from "../../models/Movie";
import { setSelectedMovie } from "../../redux/features/selectionSlice";
import { qblack, grey, white } from "../../styles/colors";

const Upcoming = ({ navigation, route }: UpcomingProps) => {
  StatusBar.setBarStyle("light-content", true);
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const { data, isLoading, error } = useGetUpcomingMoviesQuery(undefined, {
    skip: !auth.isAuthenticated || !auth.token, // Skip if not authenticated or token is not available
  });

  const [search, setSearch] = useState<string>("");
  const [searchItems, setSearchItems] = useState<UpcomingMovie[]>(data ?? []);

  useEffect(() => {
    if (searchItems.length === 0) setSearchItems(data ?? []);
  }, [data]);

  const filterItems = () => {
    const formattedQuery = search.toLowerCase();
    const filteredData = data?.filter((upcomingMovie) => {
      return upcomingMovie.title.toLowerCase().includes(formattedQuery);
    });
    setSearchItems(filteredData ?? []);
  };

  useEffect(() => {
    filterItems();
  }, [search]);

  const renderUpComingMovies = () => {
    return searchItems
      ?.slice()
      .sort(releaseDateSort)
      .map((movie: UpcomingMovie) => (
        <UpcomingMovieItem
          key={movie.id}
          upcomingMovie={movie}
          onPress={() => {
            dispatch(setSelectedMovie(movie));
            navigation?.navigate("UpcomingMovieDetails");
          }}
        />
      ));
  };

  return (
    <View style={styles.containerBackground}>
      {isLoading ? (
        <View style={upcomingStyles.loadingContainer}>
          <ActivityIndicator size="large" color={"#7d7dff"} />
          <Txt>Hleður væntanlegum myndum...</Txt>
        </View>
      ) : error ? (
        <Txt>Villa</Txt>
      ) : (
        <>
          <View
            style={{
              backgroundColor: qblack,
              borderColor: grey,
              borderWidth: 2,
              borderStyle: "solid",
              borderRadius: 4,
              margin: 8,
              paddingHorizontal: 8,
              paddingVertical: 4,
            }}
          >
            <TextInput
              style={{ color: white, fontSize: 18 }}
              placeholder="Leita..."
              value={search}
              onChangeText={(text) => {
                setSearch(text);
              }}
            />
          </View>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 80 }}
            showsHorizontalScrollIndicator={false}
          >
            {renderUpComingMovies()}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Upcoming;

const upcomingStyles = StyleSheet.create({
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
});
