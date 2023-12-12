import { Button, View, StatusBar, SafeAreaView, Linking } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type CinemaDetailsProps } from "../../routes";
import MovieItem from "../../components/MovieItem";
import styles from "../../styles/styles";
import { qwhite } from "../../styles/colors";

// TODO REDUX
const cinema = {
  id: 1,
  name: "Smárabíó",
  "address\t": "Smáralind",
  city: "201 Kópavogur",
  phone: "564-0000",
  website: "www.smarabio.is",
  description:
    "Smárabíó er eitt fullkomnasta kvikmyndahús landsins.<br><br>\n\nBíóið er með 5 sali og tekur rúmlega 1.000 manns í sæti..\n<br><br><b>\n",
  google_map: "",
};

const CinemaDetails = ({ navigation, route }: CinemaDetailsProps) => {
  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaView style={styles.containerBackground}>
      <View style={{ alignItems: "center" }}>
        <Txt size="Huge" bold={true}>
          {cinema.name}
        </Txt>
        <Txt
          color={qwhite}
          onPress={() => {
            Linking.openURL("https://" + cinema.website).catch((err) => {
              console.error("An error occurred", err);
            });
          }}
          style={{ textDecorationLine: "underline" }}
        >
          {cinema.website}
        </Txt>
      </View>
      <View style={{ margin: 20 }}>
        <Txt size="Small" numberOfLines={10} color={qwhite}>
          {cinema.description}
        </Txt>
        <Txt color={qwhite} style={{ marginBottom: 10 }}>
          {cinema["address\t"]}, {cinema.city}
        </Txt>
        <Txt color={qwhite}>{cinema.phone}</Txt>
      </View>

      <MovieItem
        title="Hóhóhó"
        year="1969"
        genres="genre1, genre2"
        image="https://kvikmyndir.is/images/poster/16492_500.jpg"
        onPress={() => {
          navigation.navigate("MovieDetails");
        }}
      ></MovieItem>
    </SafeAreaView>
  );
};

export default CinemaDetails;
