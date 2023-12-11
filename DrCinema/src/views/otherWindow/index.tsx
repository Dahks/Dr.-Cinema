import { Button, View } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type OtherWindowProps } from "../../routes";

const OtherWindow = ({ navigation, route }: OtherWindowProps) => {
  return (
    <View>
      <Txt>Other window</Txt>
      <Button
        title="Go back to Home"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default OtherWindow;
