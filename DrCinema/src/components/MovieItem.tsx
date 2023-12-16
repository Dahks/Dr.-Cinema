import { View, Image } from "react-native";
import React from "react";
import Txt from "./Txt";
import { qwhite, white } from "../styles/colors";
import ListItem from "./ListItem";
import type { Movie } from "../models/Movie";

interface Props {
  movie: Movie;
  onPress: any;
}

const MovieItem = ({ movie, onPress }: Props) => {
  return (
    <ListItem onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            height: 80,
            width: 60,
            marginRight: 5,
            borderRadius: 7,
            marginLeft: -5,
            borderWidth: 0.2,
            borderColor: white,
          }}
          source={{
            uri: movie.poster,
          }}
          resizeMode="contain"
        ></Image>
        <View style={{ flexShrink: 1 }}>
          <Txt size="Large">{movie.title}</Txt>
          <Txt size="Small" color={qwhite} style={{ marginBottom: 5 }}>
            {`${movie.year}`}
          </Txt>
          <Txt size="Small" color={qwhite}>
            {movie.genres}
          </Txt>
        </View>
      </View>
    </ListItem>
  );
};

export default MovieItem;
