import {
  View,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Txt from "../../components/Txt";
import { type MovieDetailsProps } from "../../routes";
import ShowtimeItem from "../../components/ShowtimeItem";
import styles from "../../styles/styles";
import WebView from "react-native-webview";
import { black, qblack, qwhite, white } from "../../styles/colors";
import { type Movie } from "../../models/Movie";
import { useAppSelector } from "../../redux/hooks";

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  const movie = useAppSelector((state) => state.selection.movie);
  const cinema: Cinema = useAppSelector((state) => state.selection.cinema);
  const showtimes = movie.showtimes.find(
    (c) => c.cinemaId === cinema.id
  ).schedules;
  let showtimeNumber = 0;

  const [expandedPlot, setExpandedPlot] = useState(false);

  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaView style={styles.containerBackground}>
      <ScrollView stickyHeaderIndices={[0, 1]}>
        {movie.trailer ? (
          <View
            style={{
              height: 200,
              ...styles.border,
              position: "absolute",
              width: "100%",
              // top: positionX,
            }}
          >
            <WebView source={{ uri: movie.trailer }} />
          </View>
        ) : (
          <View style={{ alignItems: "center", margin: 20 }}>
            <Txt size="large" bold={true}>
              Engin stikla í boði :(
            </Txt>
          </View>
        )}
        {!movie.trailer && <View style={{ marginTop: 30 }}></View>}

        <View style={{ paddingHorizontal: 15, marginTop: -40, zIndex: 10 }}>
          <View
            style={{
              position: "absolute",
              height: "80%",
              width: "130%",
              top: 30,
              backgroundColor: black,
              alignSelf: "center",
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <View pointerEvents="none">
              <Image
                style={{
                  width: 100,
                  height: 150,
                  borderRadius: 3,
                  marginLeft: -5,
                  borderWidth: 0.2,
                  borderColor: white,
                }}
                source={{
                  uri: movie.poster,
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                paddingTop: 10,
                marginHorizontal: 10,
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
          <Txt color={"#7d7dff"} style={{ marginBottom: 10, marginTop: 10 }}>
            {movie.genres}{" "}
          </Txt>
          <TouchableWithoutFeedback
            onPress={() => {
              setExpandedPlot(!expandedPlot);
            }}
          >
            <View>
              <Txt
                size="Small"
                numberOfLines={expandedPlot ? 100 : 2}
                color={qwhite}
              >
                {movie.plot}
              </Txt>
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              alignItems: "center",
              marginTop: 15,
              backgroundColor: black,
              paddingBottom: 10,
              width: "130%",
              alignSelf: "center",
            }}
          >
            <Txt size="Large">Sýningartímar</Txt>
          </View>
        </View>
        <View>
          {showtimes.map((showtime) => (
            <ShowtimeItem
              key={showtimeNumber++}
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
