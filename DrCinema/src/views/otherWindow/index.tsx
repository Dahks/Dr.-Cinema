import { Button, View } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import { type OtherWindowProps } from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import { resetCounter } from "../../redux/features/counter/counterSlice";

const OtherWindow = ({ navigation, route }: OtherWindowProps) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  return (
    <View>
      <Txt>Other window</Txt>
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
            title={"reset"}
            onPress={() => {
              dispatch(resetCounter());
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
