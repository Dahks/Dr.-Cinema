import { Button, View } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type CinemaDetailsProps } from "../../routes";

const CinemaDetails = ({ navigation, route }: CinemaDetailsProps) => {
  return (
    <View>
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
    </View>
  );
};

export default CinemaDetails;
