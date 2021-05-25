import React from "react";
import { View, Text } from "react-native";
import { map } from "lodash";

export default function AddressList(props) {
  const { addresses } = props;
  return (
    <View>
      <Text>Address List</Text>
      {map(addresses, (address) => (
        <Text>{address.title}</Text>
      ))}
    </View>
  );
}
