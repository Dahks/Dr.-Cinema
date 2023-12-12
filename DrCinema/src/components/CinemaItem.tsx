import { StyleSheet, View } from "react-native";
import React from "react";
import Txt from "./Txt";
import { qwhite } from "../styles/colors";
import ListItem from "./ListItem";

interface Props {
  name: string;
  website: string;
  onPress: any;
}

const CinemaItem = ({ name, website, onPress }: Props) => {
  return (
    <ListItem onPress={onPress}>
      <Txt size="Huge">{name}</Txt>
      <Txt size="Small" color={qwhite}>
        {website}
      </Txt>
    </ListItem>
  );
};

export default CinemaItem;
