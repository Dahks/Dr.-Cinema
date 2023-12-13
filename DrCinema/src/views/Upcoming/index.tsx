import { Button, StatusBar, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Txt from "../../components/Txt";
import {
  incrementByAmount,
  resetCounter,
} from "../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { type UpcomingProps } from "../../routes";
import styles from "../../styles/styles";
import UpcomingMovieItem from "../../components/UpcomingMovieItem";
import UpcomingDetails from "../../components/UpcomingDetails";

const Upcoming = ({ navigation, route }: UpcomingProps) => {
  StatusBar.setBarStyle("light-content", true);
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  const [overlayVisible, setOverlayVisible] = useState(false);
  return (
    <SafeAreaView style={styles.containerBackground}>
      <UpcomingDetails
        visible={overlayVisible}
        overlayVisibility={() => {
          setOverlayVisible(false);
        }}
      ></UpcomingDetails>
      <View style={{ alignItems: "center" }}>
        <Txt size="Huge" bold={true}>
          Upcoming movies
        </Txt>
      </View>
      <Txt>{`${counter}`}</Txt>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: 8,
        }}
      >
        <View
          style={{ width: 120, backgroundColor: "#222232", borderRadius: 12 }}
        >
          <Button
            color={"#fff"}
            title={"reset"}
            onPress={() => {
              dispatch(resetCounter());
            }}
          />
        </View>
        <View
          style={{ width: 120, backgroundColor: "#222232", borderRadius: 12 }}
        >
          <Button
            color={"#fff"}
            title={"increment by 5"}
            onPress={() => {
              dispatch(incrementByAmount(5));
            }}
          />
        </View>
      </View>
      <UpcomingMovieItem
        title="Hóhóhó 2"
        releaseDate="69. janúar 1969"
        image="https://kvikmyndir.is/images/poster/16492_500.jpg"
        onPress={() => {
          setOverlayVisible(true);
        }}
      ></UpcomingMovieItem>
    </SafeAreaView>
  );
};

export default Upcoming;
