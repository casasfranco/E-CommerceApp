import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { formStyles } from "../../styles";

export default function ChangePassword() {
  return (
    <View style={styles.container}>
      <TextInput label="Nueva contraseña" style={formStyles.input} />
      <TextInput label="Repetir nueva contraseña" style={formStyles.input} />
      <Button mode="contained" style={formStyles.btnSucces}>
        Cambiar contraseña
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
