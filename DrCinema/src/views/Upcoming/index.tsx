import { Button, View } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type UpcomingProps } from "../../routes";

const Upcoming = ({ navigation, route }: UpcomingProps) => {
  return (
    <View>
      <Txt>... Upcoming movies ...</Txt>
      <Button
        title="Back to Cinemas"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Upcoming;
