import {
  Button,
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
  ScrollView,
  FlatList,
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
import { toCinema } from "../../models/Cinema";
import type { APICinema, Cinema } from "../../models/Cinema";
import ListItem from "../../components/ListItem";
import { useGetCinemasQuery } from "../../services/cinemasApi";

const Cinemas = ({ navigation, route }: CinemasProps) => {
  const [cinemas, setCinemas] = useState<Cinema[]>([]);

  // const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  const { data, isLoading, error } = useGetCinemasQuery();
  console.log(data);

  StatusBar.setBarStyle("light-content", true);

  // useEffect(() => {
  //   fetch("https://api.kvikmyndir.is/theaters", {
  //     method: "GET",
  //     headers: {
  //       "x-access-token":
  //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1NzZkMTJmYzQwNzkzMzZiYzAyNTIzOSIsImlhdCI6MTcwMjMzODc0MSwiZXhwIjoxNzAyNDI1MTQxfQ.5ZzOJ8pJZnFNq8K5E1S5PsFlOEbQ99wiLZhIlKWwRyA",
  //     },
  //   })
  //     .then(async (response) => {
  //       if (!response.ok) throw Error("response is not ok");
  //       return response.json();
  //     })
  //     .then((data: APICinema[]) => {
  //       console.log("data: ", data);
  //       setCinemas(data.map((d) => toCinema(d)));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <SafeAreaView style={{ backgroundColor: black, display: "flex", flex: 1 }}>
      {/* <View>
        <Text style={{ color: white }}>{`${counter}`}</Text>
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
              title={"increment"}
              onPress={() => {
                dispatch(incrementCounter());
              }}
            />
          </View>
          <View
            style={{ width: 120, backgroundColor: "#222232", borderRadius: 12 }}
          >
            <Button
              color={"#fff"}
              title={"decrement"}
              onPress={() => {
                dispatch(decremenetCounter());
              }}
            />
          </View>
        </View>
      </View> */}
      {/* <ScrollView>
        {cinemas.map((c) => (
          <CinemaItem
            key={c.id}
            onPress={() => {
              navigation.navigate("CinemaDetails");
            }}
            cinema={c}
          />
        ))} */}
      <FlatList
        data={data}
        keyExtractor={(cinema) => cinema.name}
        renderItem={({ item }) => (
          <CinemaItem
            onPress={() => {
              navigation.navigate("CinemaDetails");
            }}
            cinema={item}
          />
        )}
      ></FlatList>
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
        <Text style={{ color: white }}>Upcoming Movies</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default Cinemas;
