import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { formStyles } from "../../styles";

export default function ChangeUsername() {
  return (
    <View style={styles.content}>
      <TextInput label="Nombre de usuario" style={formStyles.input} />
      <Button mode="contained" style={formStyles.btnSucces}>
        Cambiar nombre de usuario
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
});
