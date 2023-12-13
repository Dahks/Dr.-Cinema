import React, { useState } from "react";
import { View, StyleSheet, Modal, TouchableHighlight } from "react-native";
import { black, qwhite, white } from "../styles/colors";
import Txt from "./Txt";
import WebView from "react-native-webview";
import PopUpModal from "./PopUpModal";

interface Props {
  visible: boolean;
  overlayVisibility: any;
}

const UpcomingDetails = ({ visible, overlayVisibility }: Props) => {
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
          <TouchableHighlight
            onPress={overlayVisibility}
            style={{
              backgroundColor: "#2B2B2B",
              alignItems: "center",
              padding: 10,
              borderRadius: 30,
              marginTop: 10,
              width: "40%",
              alignSelf: "center",
              borderWidth: 1,
              borderColor: "#7E8084",
            }}
          >
            <Txt>Close</Txt>
          </TouchableHighlight>
        </View>
      </PopUpModal>
    </View>
  );
};

export default UpcomingDetails;
