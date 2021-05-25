import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { formStyles } from "../../styles";
import colors from "../../styles/colors";

export default function Payment(props) {
  const { products, selectedAddress } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Forma de pago</Text>
      <TextInput label="Nombre de la tarjeta" style={formStyles.input} />
      <TextInput label="Numero de la tarjeta" style={formStyles.input} />
      <View style={styles.containerInputs}>
        <View style={styles.containerMonthYearInputs}>
          <TextInput label="Mes" style={styles.inputDate} />
          <TextInput label="Año" style={styles.inputDate} />
        </View>
        <TextInput label="CVV/CVC" style={styles.inputCVC} />
      </View>

      <Button
        mode="contained"
        contentStyle={styles.btnContent}
        labelStyle={styles.btnText}
      >
        Pagar (TOTAL $)
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 30,
  },
  containerTitle: {
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  containerInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  containerMonthYearInputs: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  inputDate: {
    width: 100,
    marginRight: 10,
  },
  inputCVC: {
    width: "40%",
  },
  btnContent: {
    paddingVertical: 4,
    backgroundColor: colors.primary,
  },
  btnText: {
    fontSize: 16,
  },
});
