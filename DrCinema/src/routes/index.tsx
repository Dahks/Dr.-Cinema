import React from "react";
import { NavigationContainer, type RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  type StackNavigationProp,
} from "@react-navigation/stack";

import Home from "../views/Home";
import OtherWindow from "../views/OtherWindow";
import { darkest, white } from "../styles/colors";

// eslint-disable-next-line
type RootStackParamList = {
  Home: undefined,
  OtherWindow: undefined, // Add parameters here if any
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

// eslint-disable-next-line
export type HomeProps = {
  navigation: HomeScreenNavigationProp,
  route: HomeScreenRouteProp,
};

type OtherWindowNavigationProp = StackNavigationProp<
  RootStackParamList,
  "OtherWindow"
>;

type OtherWindowRouteProp = RouteProp<RootStackParamList, "OtherWindow">;

// eslint-disable-next-line
export type OtherWindowProps = {
  navigation: OtherWindowNavigationProp,
  route: OtherWindowRouteProp,
};

const Stack = createStackNavigator();

const Routes = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: darkest,
          },
          headerTintColor: white,
        }}
      />
      <Stack.Screen name="OtherWindow" component={OtherWindow} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
