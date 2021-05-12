import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getLastProductsApi } from "../../api/product";

export default function NewProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLastProductsApi(2);
      setProducts(response);
    })();
  }, []);

  return (
    <View>
      <Text>Hola mundo</Text>
    </View>
  );
}
