import { Button, View } from "react-native";
import React, { useState } from "react";

import { type HomeProps } from "../../routes";
import Txt from "../../components/Txt";
import styles from "../../styles/styles";
import {
  decremenetCounter,
  incrementCounter,
} from "../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Home = ({ navigation, route }: HomeProps) => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <View>
      <Txt>Home screen</Txt>
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
