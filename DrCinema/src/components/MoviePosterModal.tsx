import React from "react";
import { Modal, TouchableOpacity, View, Image } from "react-native";

interface Props {
  poster: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const MoviePosterModal = ({ poster, visible, setVisible }: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          setVisible(!visible);
        }}
        activeOpacity={1}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "80%", height: "100%", resizeMode: "contain" }}
            source={{ uri: poster }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default MoviePosterModal;
