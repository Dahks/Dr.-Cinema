import { StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import { grey, qblack, white } from "../styles/colors";

interface Props {
  children: any;
  onPress: any;
}

const ListItem = ({ children, onPress }: Props) => {
  return (
    <TouchableHighlight onPress={onPress} style={ItemListStyles.container}>
      <View>{children}</View>
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
    marginHorizontal: 15,
    marginVertical: 6,
    padding: 10,
  },
});
