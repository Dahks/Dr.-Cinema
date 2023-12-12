import { Button, View, Text, TouchableHighlight } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type CinemasProps } from "../../routes";
import { white } from "../../styles/colors";

const Cinemas = ({ navigation, route }: CinemasProps) => {
  return (
    <View style={{backgroundColor: "#000", display: "flex", flex: 1}}>
      <View>
        <Txt>... Cinemas ...</Txt>
        <Button
          title="Go to CinemaDetails"
          onPress={() => {
            navigation.navigate("CinemaDetails");
          }}
        />
      </View>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Upcoming");
        }}
        style={{ backgroundColor: "#2B2B2B", alignItems: "center", padding: 20, borderRadius: 30, width: "70%", alignSelf: "center", position: "absolute", bottom: 40, borderWidth: 1, borderColor:"#7E8084"}}
      >
        <Text style={{color: white}}>Upcoming Movies</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Cinemas;
