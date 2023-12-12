import React from "react";
import { View, StyleSheet } from "react-native";
import Txt from "./Txt";
import { Cinema } from "../models/Cinema";
import { dark } from "../styles/colors";

type Props = {
  cinema: Cinema,
};

const CinemaItem = ({ cinema }: Props) => {
  return (
    <View style={styles.container}>
      <Txt color="#FFF">{`${cinema.name}`}</Txt>
      <Txt color="#FFF">{cinema.phone}</Txt>
      {/* <Txt></Txt> */}
      {/* <Txt></Txt> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 16,
  },
});

export default CinemaItem;
