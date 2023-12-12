import { Button, View } from "react-native";
import React, { useEffect, useState } from "react";
import Txt from "../../components/Txt";
import { type HomeProps } from "../../routes";
import { APICinema, Cinema, toCinema } from "../../models/Cinema";
import CinemaItem from "../../components/CinemaItem";

const Home = ({ navigation, route }: HomeProps) => {
  const [cinemas, setCinemas] = useState<Cinema[]>([]);

  useEffect(() => {
    fetch("https://api.kvikmyndir.is/theaters", {
      method: "GET",
      headers: {
        "x-access-token": `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1NzZkMTJmYzQwNzkzMzZiYzAyNTIzOSIsImlhdCI6MTcwMjMzODc0MSwiZXhwIjoxNzAyNDI1MTQxfQ.5ZzOJ8pJZnFNq8K5E1S5PsFlOEbQ99wiLZhIlKWwRyA`,
      },
    })
      .then((response) => {
        if (!response.ok) throw Error("response is not ok");
        return response.json();
      })
      .then((data: APICinema[]) => {
        console.log("data: ", data);
        setCinemas(data.map((d) => toCinema(d)));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderCinemas = () => {
    return cinemas.map((c) => <CinemaItem cinema={c} />);
  };

  return (
    <View>
      <Txt>Home screen</Txt>
      <Button
        title="Go to Other Window"
        onPress={() => {
          navigation.navigate("OtherWindow");
        }}
      />
      <View style={{ gap: 4 }}>{renderCinemas()}</View>
    </View>
  );
};

export default Home;
