import { StyleSheet } from "react-native";
import { black } from "./colors";

export default StyleSheet.create({
  // mainly used for UI debugging
  border: {
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  containerBackground: {
    backgroundColor: black,
    display: "flex",
    flex: 1,
  },
});
