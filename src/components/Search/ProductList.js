import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, IconButton } from "react-native-paper";
import { map } from "lodash";
import { API_URL } from "../../utils/constants";
import colors from "../../styles/colors";

export default function ProductList(props) {
  const { products } = props;
  const navigation = useNavigation();

  const calcPercent = (price, save) => {
    return ((save * 100) / price).toFixed(2);
  };

  const goToProduct = (id) => {
    navigation.push("product", { idProduct: id });
    console.log("Cargar producto --> " + id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <IconButton
        icon="arrow-left"
        color="#fff"
        size={25}
        style={styles.btnBack}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.title}>RESULTADOS</Text>
      {map(products, (product) => (
        <TouchableWithoutFeedback
          key={product._id}
          onPress={() => {
            goToProduct(product._id);
          }}
        >
          <View style={styles.product}>
            <View style={styles.containerImage}>
              <Image
                style={styles.image}
                source={{ uri: `${API_URL}${product.main_image.url}` }}
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={3} ellipsizeMode="tail">
                {product.title}
              </Text>
              <View style={styles.prices}>
                <Text>Llevando {product.discount_from_units} ud. o más: </Text>
                <Text style={styles.currentPrice}>
                  $ {product.price_with_discount}
                </Text>
                {product.price_with_discount && (
                  <Text style={styles.oldPrice}>${product.price}</Text>
                )}
              </View>
              <Button style={styles.btn} color={colors.primary}>
                Ver producto
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 5,
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  containerImage: {
    backgroundColor: "#fff",
    // paddingHorizontal: 4,
    // borderWidth: 1,
    borderRadius: 15,
    shadowColor: "black",
    borderColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    width: "40%",
    height: 245,
  },
  image: {
    height: "100%",
    // resizeMode: "stretch",
    borderRadius: 15,
    resizeMode: "contain",
  },
  info: {
    padding: 10,
    width: "60%",
  },
  name: {
    fontSize: 16,
  },
  prices: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  currentPrice: {
    fontSize: 16,
  },
  oldPrice: {
    marginLeft: 7,
    fontSize: 14,
    color: "#747474",
    textDecorationLine: "line-through",
  },
  btn: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
  },
  btnBack: {
    backgroundColor: colors.bgDark,
    borderRadius: 5,
    margin: 0,
    marginBottom: 10,
    marginLeft: 10,
    width: 55,
    height: 35,
  },
});
