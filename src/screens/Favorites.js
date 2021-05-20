import React from "react";
import { StyleSheet, View, Text } from "react-native";
import StatusBar from "../components/StatusBar";
import Search from "../components/Search";
import colors from "../styles/colors";

export default function Favorites() {
  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      <Search />
      <View style={styles.container}>
        <Text>Estamos en la favorites</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
