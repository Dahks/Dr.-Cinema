import { Button, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type MovieDetailsProps } from "../../routes";
import styles from "../../styles/styles";

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaView style={styles.containerBackground}>
      <Txt> Movie Details </Txt>
      <Button
        title="Go to Cinema details"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default MovieDetails;
