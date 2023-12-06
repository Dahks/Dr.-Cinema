import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/Home";
import ContactDetails from "../views/ContactDetails";
import { darkest, white } from "../styles/colors";

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
      <Stack.Screen name="ContactDetails" component={ContactDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
