import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Button } from "react-native-paper";
import { map } from "lodash";
import colors from "../../styles/colors";

export default function AddressList(props) {
  const { addresses } = props;
  return (
    <View style={styles.container}>
      {map(addresses, (address) => (
        <View key={address._id} style={styles.address}>
          <Text style={styles.title}>{address.title}</Text>
          <Text>{address.name_lastname}</Text>
          <Text>{address.address}</Text>
          <View style={styles.blockLine}>
            <Text>{address.city}, </Text>
            <Text>{address.postal_code}</Text>
          </View>
          <Text>{address.country}</Text>
          <Text>Número de teléfono: {address.phone}</Text>
          <View style={styles.action}>
            <Button mode="contained" color={colors.primary}>
              Editar
            </Button>
            <Button mode="contained" color={colors.danger}>
              Eliminar
            </Button>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  address: {
    borderWidth: 0.9,
    borderRadius: 5,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
  blockLine: {
    flexDirection: "row",
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});