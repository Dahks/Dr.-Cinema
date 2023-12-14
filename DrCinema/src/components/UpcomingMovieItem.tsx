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
            borderRadius: 4,
          }}
          source={{
            uri: upcomingMovie.poster,
          }}
          resizeMode="contain"
        ></Image>
        <View style={{ flexShrink: 1 }}>
          {/* <Txt size="Large">{upcomingMovie.title}</Txt> */}
          {/* <MarqueeText // from react-native-marquee
            style={{ fontSize: 30, color: "#fff" }}
            speed={0.5}
            marqueeOnStart={true}
            loop={true}
            consecutive={true}
            delay={0}
          >
            {upcomingMovie.title}
          </MarqueeText> */}
          {upcomingMovie.title.length > 25 ? (
            // <AutoScroll> // from react-native-auto-scroll
            <Txt>{upcomingMovie.title}</Txt>
          ) : (
            // </AutoScroll>
            <Txt size="Large">{upcomingMovie.title}</Txt>
          )}
          <Txt size="Small" color={qwhite}>
            {`Release: ${new Date(upcomingMovie.releaseDate).toDateString()}`}
          </Txt>
        </View>
      </View>
    </ListItem>
  );
};

export default UpcomingMovieItem;
