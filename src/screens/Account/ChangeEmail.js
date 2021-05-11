import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import colors from "../../styles/colors";
import { formStyles } from "../../styles/";

export default function ChangeEmail() {
  return (
    <View style={styles.container}>
      <TextInput 
      label="Email"
      style={formStyles.input}
      />
      <Button mode='contained' style={formStyles.btnSucces} >
          Cambiar email
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding:20
    }
});
