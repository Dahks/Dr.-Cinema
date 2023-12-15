import { View, Image } from "react-native";
import React from "react";
import Txt from "./Txt";
import { qwhite } from "../styles/colors";
import ListItem from "./ListItem";
import { type UpcomingMovie } from "../models/Movie";
// import MarqueeText from "react-native-marquee";
// import AutoScroll from "@homielab/react-native-auto-scroll";
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
        }}
      >
        <Image
          style={{
            height: 80,
            width: 60,
            marginRight: 5,
            borderRadius: 7,
            marginLeft: -5,
          }}
          source={{
            uri: upcomingMovie.poster,
          }}
          resizeMode="contain"
        ></Image>
        <View style={{ flexShrink: 1 }}>
          {upcomingMovie.title.length > 25 ? (
            <Txt numberOfLines={2}>{upcomingMovie.title}</Txt>
          ) : (
            <Txt size="Large">{upcomingMovie.title}</Txt>
          )}
          <Txt size="Small" color={qwhite}>
            {`${new Date(upcomingMovie.releaseDate).toDateString()}`}
          </Txt>
        </View>
      </View>
    </ListItem>
  );
};

export default UpcomingMovieItem;
