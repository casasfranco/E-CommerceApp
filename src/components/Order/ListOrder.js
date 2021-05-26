import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { map } from "lodash";

export default function ListOrder(props) {
  const { orders } = props;
  return (
    <View style={styles.container}>
      {map(orders, (order) => (
        <Text key={order._id}>ORDER .....</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
  },
});
