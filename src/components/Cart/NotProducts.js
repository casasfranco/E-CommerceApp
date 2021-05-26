import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { API_URL } from "../../utils/constants";

export default function NotProducts() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No tienes productos en el carrito.</Text>

      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{ uri: `${API_URL}/uploads/logo.png` }}
        />
      </View>

      <Text style={styles.brand}>Mercasas Market.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
  brand: {
    color: "#333",
    letterSpacing: 1,
    textShadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    fontSize: 25,
    fontFamily: "Avenir",
  },
  containerImage: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    shadowColor: "black",
    borderColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  image: {
    height: "100%",
    resizeMode: "contain",
  },
});
