import { StyleSheet, View } from "react-native";
import React from "react";
import Txt from "./Txt";
import { grey, qblack, white } from "../styles/colors";



const ListItem = ({children}) => {
  return (
    <View style={ItemListStyles.container}>
        <Txt color={white}>Lol</Txt>
        {children}
    </View>
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
    padding: 8
  },
});
