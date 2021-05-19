import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { size } from "lodash";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Search/";
import ScreenLoading from "../../components/ScreenLoading";
import { searchProductsApi } from "../../api/search";
import ResultNotFound from "../../components/Search/ResultNotFound";
import colors from "../../styles/colors";

export default function SearchScreen(props) {
  const { route } = props;
  const { params } = route;

  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      setProducts(null);
      const response = await searchProductsApi(params.search);
      setProducts(response);
    })();
  }, [params.search]);

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      <Search currentSearch={params.search} />
      {!products ? (
        <ScreenLoading text="Buscando productos" />
      ) : size(products) === 0 ? (
        <ResultNotFound search={params.search} />
      ) : (
        <Text>Lista de productos</Text>
      )}
    </>
  );
}
