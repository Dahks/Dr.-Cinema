import React from "react";
import { NavigationContainer, type RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  type StackNavigationProp,
} from "@react-navigation/stack";

import Cinemas from "../views/Cinemas";
import CinemaDetails from "../views/CinemaDetails";
import MovieDetails from "../views/MovieDetails";
import Upcoming from "../views/Upcoming";

import { black, white } from "../styles/colors";
import type { Cinema } from "../models/Cinema";
import type { Movie, UpcomingMovie } from "../models/Movie";
import UpcomingMovieDetails from "../views/UpcomingMovieDetails";

// eslint-disable-next-line
type RootStackParamList = {
  Cinemas: undefined,
  CinemaDetails: { cinema: Cinema },
  MovieDetails: { movie: Movie },
  UpcomingMovieDetails: { upcomingMovie: UpcomingMovie },
  Upcoming: undefined,
};

type CinemasNavigationProp = StackNavigationProp<RootStackParamList, "Cinemas">;
type CinemasRouteProp = RouteProp<RootStackParamList, "Cinemas">;

// eslint-disable-next-line
export type CinemasProps = {
  navigation: CinemasNavigationProp,
  route: CinemasRouteProp,
};

type CinemaDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CinemaDetails",
>;
type CinemaDetailsRouteProp = RouteProp<RootStackParamList, "CinemaDetails">;
// eslint-disable-next-line
export type CinemaDetailsProps = {
  navigation: CinemaDetailsNavigationProp,
  route: CinemaDetailsRouteProp,
};

type MovieDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MovieDetails",
>;
type MovieDetailsRouteProp = RouteProp<RootStackParamList, "MovieDetails">;

// eslint-disable-next-line
export type MovieDetailsProps = {
  navigation: MovieDetailsNavigationProp,
  route: MovieDetailsRouteProp,
};

type UpcomingMovieDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UpcomingMovieDetails",
>;
type UpcomingMovieDetailsRouteProp = RouteProp<
  RootStackParamList,
  "UpcomingMovieDetails",
>;

// eslint-disable-next-line
export type UpcomingMovieDetailsProps = {
  navigation: UpcomingMovieDetailsNavigationProp,
  route: UpcomingMovieDetailsRouteProp,
};

type UpcomingNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Upcoming",
>;
type UpcomingRouteProp = RouteProp<RootStackParamList, "Upcoming">;

// eslint-disable-next-line
export type UpcomingProps = {
  navigation: UpcomingNavigationProp,
  route: UpcomingRouteProp,
};

const Stack = createStackNavigator();

const Routes = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Cinemas"
      screenOptions={
        {
          // headerTransparent: true,
          // headerShadowVisible: true,
        }
      }
    >
      <Stack.Screen
        name="Cinemas"
        component={Cinemas}
        options={{
          title: "Kvikmyndahús",
          headerStyle: {
            backgroundColor: black,
          },
          headerTitleStyle: { fontSize: 32 },
          headerTitleAlign: "center",
          headerTintColor: white,
        }}
      />
      <Stack.Screen
        name="CinemaDetails"
        component={CinemaDetails}
        options={{
          title: "TODO NAFN BIÓ",
          headerStyle: {
            backgroundColor: black,
          },
          headerTitleStyle: { fontSize: 32 },
          headerTitleAlign: "center",
          headerTintColor: white,
        }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          title: "TODO NAFN A MYND",
          headerStyle: {
            backgroundColor: black,
          },
          headerTitleStyle: { fontSize: 32 },
          headerTitleAlign: "center",
          headerTintColor: white,
        }}
      />
      <Stack.Screen
        name="UpcomingMovieDetails"
        component={UpcomingMovieDetails}
        options={{
          title: "TODO NAFN A MYND",
          headerStyle: {
            backgroundColor: black,
          },
          headerTitleStyle: { fontSize: 32 },
          headerTitleAlign: "center",
          headerTintColor: white,
        }}
      />
      <Stack.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          title: "Væntanlegar",
          headerStyle: {
            backgroundColor: black,
          },
          headerTitleStyle: { fontSize: 32 },
          headerTitleAlign: "center",
          headerTintColor: white,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
