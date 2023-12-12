import React from "react";
import { Text } from "react-native";

interface Props {
  color?: string;
  children: string;
}

const Txt = ({ color = "#000", children }: Props) => {
  return <Text style={{ color: color }}>{children}</Text>;
};

export default Txt;
