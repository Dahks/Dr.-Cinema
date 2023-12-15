import { StatusBar, View, TouchableHighlight, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { type CinemasProps } from "../../routes";
import { black, qblack, qwhite, white } from "../../styles/colors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CinemaItem from "../../components/CinemaItem";
import { cinemaSort } from "../../models/Cinema";
import { authenticate } from "../../redux/features/counter/authSlice";
import AuthenticationStatus from "../../components/AuthenticationStatus";
import { useGetCinemasQuery } from "../../services/cinemas";
import { setSelectedCinema } from "../../redux/features/counter/selectionSlice";
import Txt from "../../components/Txt";

const Cinemas = ({ navigation, route }: CinemasProps) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const cinema = useGetCinemasQuery(undefined, {
    skip: !auth.isAuthenticated || !auth.token, // Skip if not authenticated or token is not available
  });

  StatusBar.setBarStyle("light-content", true);

  useEffect(() => {
    void dispatch(authenticate());
    console.log("authentication completed");
  }, []);

  return (
    <View style={{ backgroundColor: black, display: "flex", flex: 1 }}>
      <AuthenticationStatus />
      {cinema.data && (
        <ScrollView
          contentContainerStyle={{ paddingBottom: 110, paddingTop: 20 }}
        >
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
          backgroundColor: qblack,
          alignItems: "center",
          padding: 20,
          borderRadius: 30,
          width: "70%",
          alignSelf: "center",
          position: "absolute",
          bottom: 40,
          borderWidth: 1,
          borderColor: qwhite,
        }}
      >
        <Txt color={white} size="Small">
          Væntanlegar kvikmyndir
        </Txt>
      </TouchableHighlight>
    </View>
  );
};

export default Cinemas;
