import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";

import { formStyles } from "../../styles";

export default function ChangePassword() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log("Formulario enviado");
      console.log(formData);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        label="Nueva contraseña"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
        secureTextEntry
      />
      <TextInput
        label="Repetir nueva contraseña"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
        secureTextEntry
      />
      <Button
        mode="contained"
        style={formStyles.btnSucces}
        onPress={formik.handleSubmit}
      >
        Cambiar contraseña
      </Button>
    </View>
  );
}

function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

function validationSchema() {
  return {
    password: Yup.string().min(4, true).required(true),
    repeatPassword: Yup.string()
      .min(4, true)
      .required(true)
      .oneOf([Yup.ref("password")], true), //Compare with the password to be the same
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
