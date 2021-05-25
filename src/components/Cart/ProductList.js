import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { map } from "lodash";
import ScreenLoading from "../../components/ScreenLoading";
import Product from "../Cart/Product";
import { getProductApi } from "../../api/product";

export default function ProductList(props) {
  const { cart, products, setProducts, setReloadCart } = props;

  useEffect(() => {
    (async () => {
      setProducts(null);
      const productTemp = [];
      for await (const product of cart) {
        const response = await getProductApi(product.idProduct);
        response.quantity = product.quantity;
        productTemp.push(response);
      }
      setProducts(productTemp);
    })();
  }, [cart]);

  return (
    <View>
      <Text style={styles.title}>Productos: </Text>
      {!products ? (
        <ScreenLoading text="Cargando carrito" />
      ) : (
        map(products, (product) => (
          <Product
            key={product._id}
            product={product}
            setReloadCart={setReloadCart}
          />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
