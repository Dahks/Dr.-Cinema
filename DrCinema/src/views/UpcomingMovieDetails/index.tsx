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
import { type UpcomingMovieDetailsProps } from "../../routes";
import ShowtimeItem from "../../components/ShowtimeItem";
import styles from "../../styles/styles";
import WebView from "react-native-webview";
import { black, qblack, qwhite, white } from "../../styles/colors";
import { useAppSelector } from "../../redux/hooks";

const UpcomingMovieDetails = ({ navigation }: UpcomingMovieDetailsProps) => {
  const movie = useAppSelector((state) => state.selection.movie);

  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaView style={styles.containerBackground}>
      <ScrollView stickyHeaderIndices={[0, 1]}>
        {movie.trailerUrl ? (
          <View
            style={{
              height: 200,
              ...styles.border,
              position: "absolute",
              width: "100%",
              // top: positionX,
            }}
          >
            <WebView source={{ uri: movie.trailerUrl }} />
          </View>
        ) : (
          <View style={{ alignItems: "center", margin: 20 }}>
            <Txt size="large" bold={true}>
              Engin stikla í boði :(
            </Txt>
          </View>
        )}
        {!movie.trailerUrl && <View style={{ marginTop: 30 }}></View>}

        <View style={{ paddingHorizontal: 15, marginTop: -40, zIndex: 10 }}>
          <View
            style={{
              position: "absolute",
              height: "93%",
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
              </View>
            </View>
          </View>
          <Txt color={"#7d7dff"} style={{ marginBottom: 10, marginTop: 10 }}>
            {movie.genres}{" "}
          </Txt>
          <Txt size="Small" numberOfLines={30} color={qwhite}>
            {movie.plot}
          </Txt>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpcomingMovieDetails;
