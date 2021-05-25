import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { map } from "lodash";
import ScreenLoading from "../ScreenLoading";
import colors from "../../styles/colors";

export default function AddressList(props) {
  const { addresses } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Dirección de envío</Text>

      {!addresses && <ScreenLoading text="Cargando direcciones"  />}

      {map(addresses, (address) => (
        <TouchableWithoutFeedback
          key={address._id}
          onPress={() => console.log("Direccion seleccionada")}
        >
          <View style={styles.address}>
            <Text style={styles.title}>{address.title}</Text>
            <Text>{address.name_lastname}</Text>
            <Text>{address.address}</Text>
            <View style={styles.blockLine}>
              <Text>{address.city},</Text>
              <Text>{address.postal_code}</Text>
            </View>
            <Text>{address.country}</Text>
            <Text>Nº de teléfono: {address.phone}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  containerTitle: {
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    borderWidth: 0.9,
    borderRadius: 5,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
  blockLine: {
    flexDirection: "row",
  },
});
