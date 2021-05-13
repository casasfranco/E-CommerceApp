import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Search";
import ScreenLoading from "../../components/ScreenLoading";
import CarouselImage from "../../components/Product/CarouselImage";
import { getProductApi } from "../../api/product";
import Price from "../../components/Product/Price";
import Quantity from "../../components/Product/Quantity";
import colors from "../../styles/colors";

export default function Product(props) {
  const { route } = props;
  const { params } = route;

  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  console.log(quantity);

  useEffect(() => {
    (async () => {
      const response = await getProductApi(params.idProduct);
      setProduct(response);

      const arrayImages = [response.main_image];

      arrayImages.push(...response.images);
      setImages(arrayImages);
    })();
  }, [params]);

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barstyle="light-content" />
      <Search />
      {!product ? (
        <ScreenLoading text="Cargando producto" size="large" />
      ) : (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{product.title}</Text>
          <CarouselImage images={images} />
          <View style={styles.containerView}>
            <Price
              price={product.price}
              price_with_discount={product.price_with_discount}
              discountFromUnits={product.discount_from_units}
            />
            <Quantity quantity={quantity} setQuantity={setQuantity} />
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    paddingBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
    padding: 10,
  },
  containerView: {
    padding: 10,
  },
});
