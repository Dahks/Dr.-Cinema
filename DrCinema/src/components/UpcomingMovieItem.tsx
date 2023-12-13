import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Txt from "./Txt";
import { qwhite } from "../styles/colors";
import ListItem from "./ListItem";
import { type UpcomingMovie } from "../models/Movie";
import styles from "../styles/styles";
import MarqueeText from "./MarqueeText";

interface Props {
  upcomingMovie: UpcomingMovie;
  onPress: any;
}

const UpcomingMovieItem = ({ upcomingMovie, onPress }: Props) => {
  return (
    <ListItem onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          // ...styles.border,
        }}
      >
        <Image
          style={{
            height: 80,
            width: 60,
            borderRadius: 4,
          }}
          source={{
            uri: upcomingMovie.poster,
          }}
          resizeMode="contain"
        ></Image>
        <View>
          <Txt size="Large">{upcomingMovie.title}</Txt>
          <Txt size="Small" color={qwhite}>
            {`Release: ${upcomingMovie.releaseDate.toDateString()}`}
          </Txt>
        </View>
      </View>
    </ListItem>
  );
};

export default UpcomingMovieItem;
