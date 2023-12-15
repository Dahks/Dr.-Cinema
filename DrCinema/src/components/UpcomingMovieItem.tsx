import { View, Image } from "react-native";
import React from "react";
import Txt from "./Txt";
import { qwhite } from "../styles/colors";
import ListItem from "./ListItem";
import { type UpcomingMovie } from "../models/Movie";
import format from "date-fns/format";
import { is } from "date-fns/locale";
interface Props {
  upcomingMovie: UpcomingMovie;
  onPress: any;
}

const formatDate = (movieReleaseDate: string) => {
  const releaseDate = new Date(movieReleaseDate);
  const today = new Date();
  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  let prefix = "";
  if (releaseDate.getTime() > startOfToday.getTime()) prefix = "Kemur út ";
  else if (releaseDate.getTime() < startOfToday.getTime()) prefix = "Kom út ";
  return (
    prefix +
    format(releaseDate, "do MMMM yyyy", {
      locale: is,
    })
  );
};

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
            {`${formatDate(upcomingMovie.releaseDate)}`}
          </Txt>
        </View>
      </View>
    </ListItem>
  );
};

export default UpcomingMovieItem;
