import React from "react";
import { View, Text } from "react-native";

export default function Product(props) {
  const { product } = props;
  return (
    <View>
      <Text>
        {product.title} - {product.quantity}
      </Text>
    </View>
  );
}
