import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
import { black, qwhite } from "../styles/colors";
import PopUpModal from "./PopUpModal";
import Txt from "./Txt";
import WebView from "react-native-webview";

interface Props {
  visible: boolean;
}

const UpcomingDetails = ({ visible }: Props) => {
  return (
    <View>
      <PopUpModal visible={visible}>
        <View style={{ alignItems: "center" }}>
          <Txt size="Huge" numberOfLines={2}>
            TITLE
          </Txt>
          <Txt color={qwhite}>RELEASE DATE</Txt>
          <View style={{ height: 200, width: "100%" }}>
            <WebView
              source={{
                uri: "https://www.youtube.com/embed/EiKXJ-ObtGk?rel=0",
              }}
            />
          </View>
        </View>
      </PopUpModal>
    </View>
  );
};

export default UpcomingDetails;
