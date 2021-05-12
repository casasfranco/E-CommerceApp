import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, ScrollViewComponent } from "react-native";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Search";
import ScreenLoading from "../../components/ScreenLoading";
import CarouselImage from "../../components/Product/CarouselImage";
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
    })();
  }, [params]);

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barstyle="light-content" />
      <Search />
      {!product ? (
        <ScreenLoading text="Cargando producto" size="large" />
      ) : (
        <ScrollView style={styles.container} >
            <Text style={styles.title} >{product.title}</Text>
          <CarouselImage images={product.images} />
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingBottom: 50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    }
});
