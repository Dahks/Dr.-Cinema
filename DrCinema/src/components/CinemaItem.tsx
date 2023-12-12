import { StyleSheet, View } from "react-native";
import React from "react";
import Txt from "./Txt";
import { qwhite } from "../styles/colors";
import ListItem from "./ListItem";
import type { Cinema } from "../models/Cinema";

interface Props {
  onPress: any;
  cinema: Cinema;
}

const CinemaItem = ({ onPress, cinema }: Props) => {
  return (
    <ListItem onPress={onPress}>
      <Txt size="Huge">{cinema.name}</Txt>
      <Txt size="Small" color={qwhite}>
        {cinema.websiteUrl}
      </Txt>
    </ListItem>
  );
};

export default CinemaItem;
