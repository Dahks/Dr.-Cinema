import { Button, View } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type CinemaDetailsProps } from "../../routes";
import MovieItem from "../../components/MovieItem";

const CinemaDetails = ({ navigation, route }: CinemaDetailsProps) => {
  return (
    <View>
      <Txt>Cinema Details</Txt>
      <Button
        title="Go back to Home"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <MovieItem
        title="Hóhóhó"
        year="1969"
        genres="genre1, genre2"
        image="https://kvikmyndir.is/images/poster/16492_500.jpg"
        onPress={() => {
          navigation.navigate("MovieDetails");
        }}
      ></MovieItem>
    </View>
  );
};

export default CinemaDetails;
