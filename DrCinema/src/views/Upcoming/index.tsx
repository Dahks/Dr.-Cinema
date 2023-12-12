import { Button, StatusBar, View, SafeAreaView } from "react-native";
import React from "react";
import Txt from "../../components/Txt";
import {
  incrementByAmount,
  resetCounter,
} from "../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { type UpcomingProps } from "../../routes";
import styles from "../../styles/styles";

const Upcoming = ({ navigation, route }: UpcomingProps) => {
  StatusBar.setBarStyle("light-content", true);
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  return (
    <SafeAreaView style={styles.containerBackground}>
      <Txt>... Upcoming movies ...</Txt>
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
        title="Back to Cinemas"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default Upcoming;
