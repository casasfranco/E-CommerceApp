import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { formStyles } from "../../styles";

export default function ChangeName() {
  return (
    <View style={styles.container}>
      <TextInput label="Nombre" style={formStyles.input} />
      <TextInput label="Apellidos" style={formStyles.input} />
      <Button
        mode="contained"
        style={formStyles.btnSucces}
        onPress={() => console.log("Formulario enviado")}
      >
        Cambiar nombre y apellidos
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
