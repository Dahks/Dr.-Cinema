import { Button, View } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type HomeProps } from "../../routes";

const Home = ({ navigation, route }: HomeProps) => {
  return (
    <View>
      <Txt>Home screen</Txt>
      <Button
        title="Go to Other Window"
        onPress={() => {
          navigation.navigate("OtherWindow");
        }}
      />
    </View>
  );
};

export default Home;
