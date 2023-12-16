import { View, Linking } from "react-native";
import React from "react";
import Txt from "./Txt";
import ListItem from "./ListItem";

interface Props {
  time: string;
  purchaseUrl: any;
}

const ShowtimeItem = ({ time, purchaseUrl }: Props) => {
  return (
    <ListItem
      onPress={() => {
        Linking.openURL(purchaseUrl).catch((err) => {
          console.error("An error occurred", err);
        });
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Txt style={{ fontSize: 50 }}>{time}</Txt>
      </View>
    </ListItem>
  );
};

export default ShowtimeItem;
