import { Button, View, Text, TouchableHighlight } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type CinemasProps } from "../../routes";
import { white } from "../../styles/colors";

import {
  decremenetCounter,
  incrementCounter,
} from "../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CinemaItem from "../../components/CinemaItem";

const Cinemas = ({ navigation, route }: CinemasProps) => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  return (
    <View style={{ backgroundColor: "#000", display: "flex", flex: 1 }}>
      <View>
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
        <Button
          title="Go to CinemaDetails"
          onPress={() => {
            navigation.navigate("CinemaDetails");
          }}
        />
      </View>
      <CinemaItem
        name="Cinema"
        website="cinema.com.co.uk.is"
        onPress={() => {
          navigation.navigate("CinemaDetails");
        }}
      ></CinemaItem>
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
    </View>
  );
};

export default Cinemas;
