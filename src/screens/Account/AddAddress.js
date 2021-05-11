import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { formStyles } from "../../styles";

export default function AddAddress() {
  return (
    <KeyboardAwareScrollView extraScrollHeight={25}>
      <View style={styles.container}>
        <Text style={styles.title}>Nueva dirección</Text>
        <TextInput label="Title" style={formStyles.input} />
        <TextInput label="Nombre y apellidos" style={formStyles.input} />
        <TextInput label="Dirección" style={formStyles.input} />
        <TextInput label="Código postal" style={formStyles.input} />
        <TextInput label="Ciudad" style={formStyles.input} />
        <TextInput label="Telefono" style={formStyles.input} />
        <Button
          mode="contained"
          style={[formStyles.btnSucces, styles.btnSucces]}
        >
          {" "}
          Crear dirección
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
  },
  btnSucces: {
    marginBottom: 20,
  },
});
