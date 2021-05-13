import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Price(props) {
  const { price, price_with_discount, discountFromUnits } = props;

  const calcPrice = (price, price_with_discount) => {
    if (!price_with_discount) return price;
  };

  const calcPercent = (price, save) => {
    return ((save * 100) / price).toFixed(2);
  };

  const selectPrice = (quantity) => {
    if (quantity >= discountFromUnits) return <Text>Precio por mayor</Text>;
  };

  return (
    <View>
      {price_with_discount ? (
        <>
          <View style={styles.containerData}>
            <Text style={styles.dataText}>Precio: </Text>
            <Text style={[styles.dataValue, styles.oldPrice]}>$ {price}</Text>
          </View>
          <View style={styles.containerData}>
            <Text style={styles.dataText}>Llevando 3 ud. o más: </Text>
            <Text style={[styles.dataValue, styles.currentPrice]}>
              $ {price_with_discount}
            </Text>
          </View>
        </>
      ) : (
        <View style={styles.containerData}>
          <Text style={styles.dataText}>Llevando 3 ud. o más: </Text>
          <Text style={[styles.dataValue, styles.currentPrice]}>
            $ {price_with_discount}
          </Text>
        </View>
      )}

      {price_with_discount && (
        <View style={styles.containerData}>
          <Text style={styles.dataText}>Ahorras: </Text>
          <Text style={[styles.dataValue, styles.saving]}>
            $ {price - price_with_discount} (
            {calcPercent(price, price - price_with_discount)}%)
          </Text>
        </View>
      )}
      {/* Prueba  */}
      <View style={styles.containerData}>{selectPrice(2)}</View>
      {/* Fin prueba */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerData: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  dataText: {
    width: "50%",
    fontSize: 18,
    color: "#747474",
    textAlign: "right",
  },
  dataValue: {
    width: "50%",
    fontSize: 18,
    paddingLeft: 5,
  },
  oldPrice: {
    textDecorationLine: "line-through",
  },
  currentPrice: {
    fontSize: 23,
    color: "#bc0e0d",
  },
  saving: {
    color: "#bc0e0d",
  },
});
