import { Button, View } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type MovieDetailsProps } from "../../routes";
import ShowtimeItem from "../../components/ShowtimeItem";

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  return (
    <View>
      <Txt> Movie Details </Txt>
      <ShowtimeItem
        time="20:00"
        purchaseUrl="http://kvikmyndahusio.azurewebsites.net/websales/show/794472/"
      ></ShowtimeItem>
    </View>
  );
};

export default MovieDetails;
