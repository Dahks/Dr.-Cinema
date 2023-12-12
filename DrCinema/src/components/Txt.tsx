import React from "react";
import { Text } from "react-native";
import { white } from "./../styles/colors";

interface Props {
  children: any;
  style?: any;
  size?: string;
  color?: string;
  bold?: boolean;
  numberOfLines?: number;
}

const Txt = ({
  children,
  style = {},
  size,
  color,
  bold = false,
  numberOfLines = 1,
  ...other
}: Props) => {
  let styleSize: number;
  switch (size) {
    case "Huge":
      styleSize = 30;
      break;
    case "Large":
      styleSize = 24;
      break;
    case "Small":
      styleSize = 16;
      break;
    case "Tiny":
      styleSize = 10;
      break;

    default:
      styleSize = 20;
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        fontSize: styleSize,
        fontWeight: bold ? "bold" : "normal",
        color: color ?? white,
        ...style,
      }}
      {...other}
    >
      {children}
    </Text>
  );
};

export default Txt;
