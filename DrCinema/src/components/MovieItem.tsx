import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Txt from "./Txt";
import { qwhite } from "../styles/colors";
import ListItem from "./ListItem";

interface Props {
  title: string;
  year: string;
  genres: string;
  image: string;
  onPress: any;
}

const MovieItem = ({ title, year, genres, image, onPress }: Props) => {
  return (
    <ListItem onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          style={{ height: 80, width: 60 }}
          source={{
            uri: image,
          }}
          resizeMode="contain"
        ></Image>
        <View>
          <Txt size="Large">{title}</Txt>
          <Txt size="Small" color={qwhite}>
            {year}
          </Txt>
          <Txt size="Small" color={qwhite}>
            {genres}
          </Txt>
        </View>
      </View>
    </ListItem>
  );
};

export default MovieItem;
