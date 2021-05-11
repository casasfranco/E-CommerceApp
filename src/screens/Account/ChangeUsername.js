import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import { formStyles } from "../../styles";

export default function ChangeUsername() {
  const [loading, setLoading] = useState(false);
  const { auth } = useAuth();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token);
        //Si posee username en bd los seteo al formulario como default
        if (response.username) {
          await formik.setFieldValue("username", response.username);
        }
      })();
    }, [])
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true); //Start loading
      try {
        await updateUserApi(auth, formData);
        navigation.goBack();
      } catch (error) {
        Toast.show("Error al actualizar los datos.", {
          position: Toast.positions.CENTER,
        });
        setLoading(false); //Stop loading
      }
    },
  });

  return (
    <View style={styles.content}>
      <TextInput
        label="Nombre de usuario"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("username", text)}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <Button
        mode="contained"
        style={formStyles.btnSucces}
        onPress={formik.handleSubmit}
        loading={loading}
      >
        Cambiar nombre de usuario
      </Button>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required(true),
  };
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
});
