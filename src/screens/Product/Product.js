import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { IconButton } from "react-native-paper";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Search";
import ScreenLoading from "../../components/ScreenLoading";
import CarouselImage from "../../components/Product/CarouselImage";
import { getProductApi } from "../../api/product";
import Price from "../../components/Product/Price";
import Quantity from "../../components/Product/Quantity";
import Buy from "../../components/Product/Buy";
import Favorite from "../../components/Product/Favorite";
import { useNavigation } from "@react-navigation/native";
import colors from "../../styles/colors";

export default function Product(props) {
  const { route } = props;
  const { params } = route;

  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation();

  useEffect(() => {
    setProduct(null);
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
          <IconButton
            icon="arrow-left"
            color="#fff"
            size={25}
            style={styles.btnBack}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.title}>{product.title}</Text>
          <CarouselImage images={images} />
          <View style={styles.containerView}>
            <Price
              price={product.price}
              price_with_discount={product.price_with_discount}
              discountFromUnits={product.discount_from_units}
            />
            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <Buy product={product} quantity={quantity} />
            <Favorite product={product} />
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 100,
  },
  btnBack: {
    backgroundColor: colors.bgDark,
    borderRadius: 5,
    margin: 0,
    marginTop: 10,
    marginLeft: 10,
    width: 55,
    height: 35,
  },
});
