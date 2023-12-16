import {
  View,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Txt from "../../components/Txt";
import { type UpcomingMovieDetailsProps } from "../../routes";
import styles from "../../styles/styles";
import WebView from "react-native-webview";
import { black, qwhite, white } from "../../styles/colors";
import { useAppSelector } from "../../redux/hooks";
import type { UpcomingMovie } from "../../models/Movie";
import MoviePosterModal from "../../components/MoviePosterModal";

const UpcomingMovieDetails = ({ navigation }: UpcomingMovieDetailsProps) => {
  // This is super ugly (... as UpcomingMovie), mapping the type of movie, which could be Movie | UpcomingMovie | undefined, to strictly be UpcomingMovie.
  // however, there is no clean way of doing this by having a selectionSlice.
  // The best solution here is to input the upcoming movie as a prop into this component,
  // which ensures that an UpcomingMovie object is being passed into this component

  const movie = useAppSelector(
    (state) => state.selection.movie
  ) as UpcomingMovie;
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  StatusBar.setBarStyle("light-content", true);

  return (
    <SafeAreaView style={styles.containerBackground}>
      <MoviePosterModal
        visible={modalVisible}
        setVisible={setModalVisible}
        poster={movie.poster}
      />
      <ScrollView stickyHeaderIndices={[0, 1]}>
        {movie.trailerUrl ? (
          <View
            style={{
              height: 200,
              ...styles.border,
              position: "absolute",
              width: "100%",
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
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
            >
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
            </TouchableOpacity>
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
