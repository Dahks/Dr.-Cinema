import { Button, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type CinemaDetailsProps } from "../../routes";
import MovieItem from "../../components/MovieItem";
import styles from "../../styles/styles";

const CinemaDetails = ({ navigation, route }: CinemaDetailsProps) => {
  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaView style={styles.containerBackground}>
      <Txt>Cinema Details</Txt>
      <MovieItem
        title="Hóhóhó"
        year="1969"
        genres="genre1, genre2"
        image="https://kvikmyndir.is/images/poster/16492_500.jpg"
        onPress={() => {
          navigation.navigate("MovieDetails");
        }}
      ></MovieItem>
    </SafeAreaView>
  );
};

export default CinemaDetails;
