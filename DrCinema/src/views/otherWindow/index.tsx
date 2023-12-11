import { Button, View } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type OtherWindowProps } from "../../routes";
import {
  incrementByAmount,
  resetCounter,
} from "../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const OtherWindow = ({ navigation, route }: OtherWindowProps) => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  return (
    <View>
      <Txt>Other window</Txt>
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
      <Button
        title="Go back to Home"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default OtherWindow;
