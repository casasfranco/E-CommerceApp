import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../../styles/colors";

export default function SearchHistory(props) {
  const { showHistory, containerHeight } = props;
  return (
    <View
      style={[
        showHistory ? styles.history : styles.hidden,
        { top: containerHeight },
      ]}
    >
      <Text>Historial de busquedas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hidden: {
    display: "none",
  },
  history: {
    position: "absolute",
    backgroundColor: "#f00",
    // backgroundColor: colors.bgLight,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
