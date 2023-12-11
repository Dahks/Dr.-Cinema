import { Button, View } from "react-native";
import React, { useState } from "react";
import Txt from "../../components/Txt";
import { type HomeProps } from "../../routes";
import styles from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  decremenetCounter,
  incrementCounter,
} from "../../redux/features/counter/counterSlice";

const Home = ({ navigation, route }: HomeProps) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <View>
      <Txt>Home screen</Txt>
      <Txt>{counter}</Txt>
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
        title="Go to Other Window"
        onPress={() => {
          navigation.navigate("OtherWindow");
        }}
      />
    </View>
  );
};

export default Home;
