import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { size } from "lodash";
import useAuth from "../../hooks/useAuth";
import { isFavoriteApi } from "../../api/favorite";

export default function Favorite(props) {
  const { product } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const { auth } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(auth, product._id);
      if (size(response) === 0) setIsFavorite(false);
      else setIsFavorite(true);
    })();
  }, [product]);

  const addFavorite = () => {
    console.log("Producto añadido a la lista de favoritos");
    console.log(product.title);
    console.log(product._id);
  };

  return (
    <View style={{ zIndex: 1 }}>
      <Button
        mode="contained"
        contentStyle={
          isFavorite
            ? styles.btnDeleteFavoritesContent
            : styles.btnAddFavoritesContent
        }
        labelStyle={styles.btnLabel}
        style={styles.btn}
        onPress={addFavorite}
      >
        {isFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btnAddFavoritesContent: {
    backgroundColor: "#057b00",
    paddingVertical: 5,
  },
  btnDeleteFavoritesContent: {
    backgroundColor: "#c40000",
    paddingVertical: 5,
  },
  btnLabel: {
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
  },
});
