import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Search";
import ScreenLoading from "../../components/ScreenLoading";
import { getProductApi } from "../../api/product";
import colors from "../../styles/colors";

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
    <>
      <StatusBar backgroundColor={colors.bgDark} barstyle="light-content" />
      <Search />
      {!product ? (
        <ScreenLoading text="Cargando producto" size="large" />
      ) : (
        <View>
          <Text>Hola</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
