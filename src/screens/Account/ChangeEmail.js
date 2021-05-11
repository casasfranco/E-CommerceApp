import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { getMeApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import colors from "../../styles/colors";
import { formStyles } from "../../styles/";

export default function ChangeEmail() {
  const { auth } = useAuth(); //Token de user

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token);
        await formik.setFieldValue("email", response.email);
      })();
    }, [])
  );

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
        label="Email"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Button
        mode="contained"
        style={formStyles.btnSucces}
        onPress={formik.handleSubmit}
      >
        Cambiar email
      </Button>
    </View>
  );
}

function initialValues() {
  return {
    email: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
