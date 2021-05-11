import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getMeApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import { formStyles } from "../../styles";

export default function ChangeName() {
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token);
        //Si posee nombre y apellido en bd los seteo al formulario como default
        if (response.name && response.lastname) {
          await formik.setFieldValue("name", response.name);
          await formik.setFieldValue("lastname", response.lastname);
        }
      })();
    }, [])
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => {
      console.log("Formulario enviado");
      console.log(formValue);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        label="Nombre"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("name", text)}
        value={formik.values.name}
        error={formik.errors.name}
      />
      <TextInput
        label="Apellidos"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("lastname", text)}
        value={formik.values.lastname}
        error={formik.errors.lastname}
      />
      <Button
        mode="contained"
        style={formStyles.btnSucces}
        onPress={formik.handleSubmit}
      >
        Cambiar nombre y apellidos
      </Button>
    </View>
  );
}

function initialValues() {
  return {
    name: "",
    lastname: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
