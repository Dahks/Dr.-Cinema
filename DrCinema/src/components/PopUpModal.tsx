import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { black } from "../styles/colors";

interface Props {
  visible: boolean;
  children: any;
}

const PopUpModal = ({ visible, children }: Props) => (
  <Modal transparent={true} visible={visible} animationType="fade">
    <View style={styles.PopUpModalContainer}>
      <View style={styles.PopUpModalContent}>{children}</View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  PopUpModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  PopUpModalContent: {
    width: "95%",
    padding: 20,
    backgroundColor: black,
    borderRadius: 10,
  },
});
export default PopUpModal;
