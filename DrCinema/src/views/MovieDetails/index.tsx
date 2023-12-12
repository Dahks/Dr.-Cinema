import { Button, View } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type MovieDetailsProps } from "../../routes";

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  return (
    <View>
      <Txt> Movie Details </Txt>
      <Button
        title="Go to Cinema details"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default MovieDetails;
