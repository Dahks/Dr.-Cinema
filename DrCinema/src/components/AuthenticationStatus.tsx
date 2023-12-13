import React from "react";
import { View } from "react-native";
import { useAppSelector } from "../redux/hooks";
import Txt from "./Txt";

const AuthenticationStatus = () => {
  const auth = useAppSelector((state) => state.auth);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4,
      }}
    >
      <View
        style={{
          backgroundColor: auth.isAuthenticated
            ? "#00ff00"
            : auth.isLoading
              ? "#eeee44"
              : "#ff0000",
          width: 10,
          height: 10,
          borderRadius: 10,
          margin: 4,
        }}
      ></View>
      <Txt size="Tiny">
        {auth.isAuthenticated
          ? "Authenticated"
          : auth.isLoading
            ? "Loading"
            : "Not authenticated"}
      </Txt>
    </View>
  );
};

export default AuthenticationStatus;
