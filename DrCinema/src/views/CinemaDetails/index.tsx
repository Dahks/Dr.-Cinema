import { Button, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type CinemaDetailsProps } from "../../routes";
import styles from "../../styles/styles";

const CinemaDetails = ({ navigation, route }: CinemaDetailsProps) => {
  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaView style={styles.containerBackground}>
      <Txt>Cinema Details</Txt>
      <Button
        title="Go to Movie Details"
        onPress={() => {
          navigation.navigate("MovieDetails");
        }}
      />
      <Button
        title="Go back to Home"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default CinemaDetails;
