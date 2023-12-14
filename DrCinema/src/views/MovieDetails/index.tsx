import { Button, View, WebView, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type MovieDetailsProps } from "../../routes";
import styles from "../../styles/styles";

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  StatusBar.setBarStyle("light-content", true);
  return (
    <SafeAreaView style={styles.containerBackground}>
      <View
        style={{
          height: 200,
          // position: "absolute",
          width: "100%",
          // zIndex: 10,
        }}
      >
        <WebView
          source={{ uri: "https://www.youtube.com/embed/EiKXJ-ObtGk?rel=0" }}
        />
      </View>
      <ScrollView
        stickyHeaderIndices={[1]}
        style={{
          marginTop: -200,
          position: "relative",
          zIndex: 30,
          pointerEvents: "box-none",
        }}
      >
        <View style={{ padding: 60, zIndex: 0, pointerEvents: "none" }}></View>
        {/* Animation can handle this OK; TODO if time https://stackoverflow.com/questions/46439001/clickable-background-underneath-a-scrollview-react-native */}
        <View
          style={{
            padding: 15,
            paddingTop: 5,
            pointerEvents: "box-none",
          }}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: black,
              bottom: 0,
              height: "93%",
              width: "120%",
              pointerEvents: "box-none",
            }}
          ></View>
          <View style={{ flexDirection: "row", pointerEvents: "none" }}>
            <Image
              style={{
                width: 100,
                height: 150,
                zIndex: 30,
              }}
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
              <View style={{ flexDirection: "row", backgroundColor: black }}>
                <Txt color={qwhite} style={{ marginRight: 75 }}>
                  {movie.year}
                </Txt>
                <Txt color={qwhite}>{movie.omdb[0].Runtime}</Txt>
              </View>
            </View>
          </View>
          <Txt color={qwhite}>
            {movie.genres[0].Name}, {movie.genres[1].Name}
          </Txt>
          <Txt size="Small" numberOfLines={10} color={qwhite}>
            {movie.plot}
          </Txt>
          <View style={{ alignItems: "center", marginTop: 15 }}>
            <Txt size="Large">Showtimes in Smárabíó</Txt>
          </View>
        </View>
        <ShowtimeItem
          time="20:00"
          purchaseUrl="http://kvikmyndahusio.azurewebsites.net/websales/show/794472/"
        ></ShowtimeItem>
        <ShowtimeItem
          time="20:00"
          purchaseUrl="http://kvikmyndahusio.azurewebsites.net/websales/show/794472/"
        ></ShowtimeItem>
        <ShowtimeItem
          time="20:00"
          purchaseUrl="http://kvikmyndahusio.azurewebsites.net/websales/show/794472/"
        ></ShowtimeItem>
        <ShowtimeItem
          time="20:00"
          purchaseUrl="http://kvikmyndahusio.azurewebsites.net/websales/show/794472/"
        ></ShowtimeItem>
        <ShowtimeItem
          time="20:00"
          purchaseUrl="http://kvikmyndahusio.azurewebsites.net/websales/show/794472/"
        ></ShowtimeItem>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;
