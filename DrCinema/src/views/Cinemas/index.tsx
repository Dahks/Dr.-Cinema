import {
  Button,
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
  ScrollView,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
import Txt from "../../components/Txt";
import { type CinemasProps } from "../../routes";
import { black, white } from "../../styles/colors";

import {
  decremenetCounter,
  incrementCounter,
} from "../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CinemaItem from "../../components/CinemaItem";
import { cinemaSort, toCinema } from "../../models/Cinema";
import type { APICinema, Cinema } from "../../models/Cinema";
import ListItem from "../../components/ListItem";
// import {
//   getCinemasFromAPI,
//   setCinemas,
// } from "../../redux/features/counter/cinemaSlice";
import { authenticate } from "../../redux/features/counter/authSlice";
import AuthenticationStatus from "../../components/AuthenticationStatus";
import { useGetCinemasQuery } from "../../services/cinemas";
import { setSelectedCinema } from "../../redux/features/counter/selectionSlice";

const Cinemas = ({ navigation, route }: CinemasProps) => {
  // const [cinemas, setCinemas] = useState<Cinema[]>([]);

  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  // const cinema = useAppSelector((state) => state.cinema);
  const auth = useAppSelector((state) => state.auth);

  const cinema = useGetCinemasQuery(undefined, {
    skip: !auth.isAuthenticated || !auth.token, // Skip if not authenticated or token is not available
  });

  StatusBar.setBarStyle("light-content", true);

  useEffect(() => {
    void dispatch(authenticate());
    console.log("authentication completed");
  }, []);

  // useEffect(() => {
  //   if (auth.isAuthenticated && auth.token)
  //     void dispatch(getCinemasFromAPI(auth.token));
  // }, [auth.isAuthenticated]);

  return (
    <SafeAreaView style={{ backgroundColor: black, display: "flex", flex: 1 }}>
      <AuthenticationStatus />
      {cinema.data && (
        <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
          {cinema.data
            .slice()
            .sort(cinemaSort)
            .map((c) => (
              <CinemaItem
                key={c.id}
                onPress={() => {
                  dispatch(setSelectedCinema(c));
                  navigation.navigate("CinemaDetails");
                }}
                cinema={c}
              />
            ))}
        </ScrollView>
      )}
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Upcoming");
        }}
        style={{
          backgroundColor: "#2B2B2B",
          alignItems: "center",
          padding: 20,
          borderRadius: 30,
          width: "70%",
          alignSelf: "center",
          position: "absolute",
          bottom: 40,
          borderWidth: 1,
          borderColor: "#7E8084",
        }}
      >
        <Text style={{ color: white }}>Væntanlegar kvikmyndir</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default Cinemas;
