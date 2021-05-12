import React from "react";
import { View, Text } from "react-native";

export default function Product(props) {
  const { route } = props;
  const { params } = route;
  return (
    <View>
      <Text>{params.idProduct}</Text>
    </View>
  );
}
