import React from "react";
import { Text } from "react-native";

interface Props {
  children: string;
}

const Txt = ({ children }: Props) => {
  return <Text>{children}</Text>;
};

export default Txt;
