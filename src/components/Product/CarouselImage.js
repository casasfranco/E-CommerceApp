import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { API_URL } from "../../utils/constants";
import Carousel from "react-native-snap-carousel";

export default function CarouselImage(props) {
  const { images } = props;

  console.log(images);

  const renderItem = ({ item }) => {
      console.log(`${API_URL}${item.url}`);
    return (
      <Image
        style={styles.carousel}
        source={{ uri: `${API_URL}${item.url}` }}
      />
    );
  };

  return (
    <>
      <Carousel
        layout={"default"}
        data={images}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width: 300,
    height: 600,
    resizeMode: "contain",
  },
});
