import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Txt from "./Txt";
import { qwhite } from "../styles/colors";
import ListItem from "./ListItem";

interface Props {
  title: string;
  releaseDate: string;
  image: string;
  onPress: any;
}

const UpcomingMovieItem = ({ title, releaseDate, image, onPress }: Props) => {
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
            {releaseDate}
          </Txt>
        </View>
      </View>
    </ListItem>
  );
};

export default UpcomingMovieItem;
