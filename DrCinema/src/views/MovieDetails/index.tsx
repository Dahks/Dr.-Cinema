import {
  Button,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type MovieDetailsProps } from "../../routes";
import ShowtimeItem from "../../components/ShowtimeItem";
import styles from "../../styles/styles";
import WebView from "react-native-webview";
import { black, qblack, qwhite } from "../../styles/colors";
import { type Movie } from "../../models/Movie";
import { useAppSelector } from "../../redux/hooks";

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  const movie = useAppSelector((state) => state.selection.movie);
  const cinema: Cinema = useAppSelector((state) => state.selection.cinema);
  const showtimes = movie.showtimes.find(
    (c) => c.cinemaId === cinema.id
  ).schedules;

  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaView style={styles.containerBackground}>
      {movie.trailer ? (
        <View
          style={{
            height: 200,
            ...styles.border,
            position: "absolute",
            width: "100%",
          }}
        >
          <WebView source={{ uri: movie.trailer }} />
        </View>
      ) : (
        <Txt size="Small">Enginn stikla í boði</Txt>
      )}
      <ScrollView
        stickyHeaderIndices={[1]}
        style={{ marginTop: movie.trailer ? 120 : 0 }}
      >
        {movie.trailer && <View style={{ marginTop: 80 }}></View>}
        <View style={{ padding: 15, paddingTop: 5, backgroundColor: black }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 100, height: 150 }}
              source={{
                uri: movie.poster,
              }}
              resizeMode="contain"
            ></Image>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                margin: 10,
                marginTop: 0,
              }}
            >
              <Txt size="Huge" numberOfLines={2}>
                {movie.title}
              </Txt>
              <View style={{ flexDirection: "row" }}>
                <Txt color={qwhite} style={{ marginRight: 75 }}>
                  {movie.year}
                </Txt>
                <Txt color={qwhite}>{movie.duration} mínútur</Txt>
              </View>
            </View>
          </View>
          <Txt color={qwhite}>{movie.genres}</Txt>
          <Txt size="Small" numberOfLines={10} color={qwhite}>
            {movie.plot}
          </Txt>
          <View style={{ alignItems: "center", marginTop: 15 }}>
            <Txt size="Large">Sýningartímar</Txt>
          </View>
        </View>
        <View>
          {showtimes.map((showtime) => (
            <ShowtimeItem
              // TODO: figure out key :)
              time={showtime.time}
              purchaseUrl={showtime.purchaseUrl}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;
