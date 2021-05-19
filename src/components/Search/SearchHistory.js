import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { getSearchHistoryApi } from "../../api/search";
import colors from "../../styles/colors";

export default function SearchHistory(props) {
  const { showHistory, containerHeight } = props;
  const [history, setHistory] = useState(null);

  useEffect(() => {
    if (showHistory) {
      (async () => {
        const response = await getSearchHistoryApi();
        console.log(response);
      })();
    }
  }, [showHistory]);

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
