import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from '@react-navigation/native'
import { map } from "lodash";
import { API_URL } from "../../utils/constants";

export default function ListProduct(props) {
  const { products } = props;
  const navigation = useNavigation();


  const goToProduct = (id) => {
      navigation.push('product', {idProduct: id});
  }


  return (
    <View style={styles.container}>
      {map(products, (product) => (
        <TouchableWithoutFeedback
          key={product._id}
          onPress={() => {
            goToProduct(product._id);
          }}
        >
          <View style={styles.containerProduct}>
            <View style={styles.product}>
              <Image
                style={styles.image}
                source={{ uri: `${API_URL}${product.main_image.url}` }}
              />
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {product.title}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    //   margin: -3
  },
  containerProduct: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 3,
    marginBottom: 10,
    marginLeft: 6,
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: "black",
    borderColor: "#ddd",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  product: {
    padding: 5,
  },
  image: {
    height: 150,
    resizeMode: "contain",
  },
  name: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
  },
});
