import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getProductApi } from "../../api/product";

export default function Product(props) {
  const { route } = props;
  const { params } = route;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getProductApi(params.idProduct);
      setProduct(response);
      console.log(response);
    })();
  }, [params]);

  return (
    <View>
      <Text>{params.idProduct}</Text>
    </View>
  );
}
