import { StyleSheet } from "react-native";
import { baccent, black, dark, darkest, white } from "./colors";

export default StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: baccent,
    borderStyle: "solid",
  },
  containerBackground: {
    backgroundColor: black,
    display: "flex",
    flex: 1,
  },
});
