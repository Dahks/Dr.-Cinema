import { StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import { grey, qblack, white } from "../styles/colors";

interface Props {
  children: any;
  onPress: any;
}

const ListItem = ({ children, onPress }: Props) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={ItemListStyles.container}>{children}</View>
    </TouchableHighlight>
  );
};

export default ListItem;

const ItemListStyles = StyleSheet.create({
  container: {
    backgroundColor: qblack,
    borderColor: grey,
    borderWidth: 3,
    borderRadius: 15,
    height: 100,
    margin: 15,
    padding: 10,
  },
});
