import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import RegisterForm from "../components/Auth/RegisterForm";

import logo from "../../assets/logo-grande.png";
import { layoutStyle } from "../styles";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(false); //Only for know what form will be open

  const changeForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <View style={layoutStyle.container}>
      <Image style={styles.logo} source={logo} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {showLogin ? (
          <Text>FormLogin</Text>
        ) : (
          <RegisterForm changeForm={changeForm} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 130,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
