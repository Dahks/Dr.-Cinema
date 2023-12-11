import { Button, View } from "react-native";
import React, { useState } from "react";
import Txt from "../../components/Txt";
import { type HomeProps } from "../../routes";
import styles from "../../styles/styles";

const Home = ({ navigation, route }: HomeProps) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <View>
      <Txt>Home screen</Txt>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{ width: 80, backgroundColor: "#222232", borderRadius: 12 }}
        >
          <Button
            color={"#fff"}
            title={`${counter}`}
            onPress={() => {
              setCounter(counter + 1);
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
