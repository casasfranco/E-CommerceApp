import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { API_URL } from "../../utils/constants";
import Carousel from "react-native-snap-carousel";

const width = (Dimensions.get('window').width);
const height = 500;

export default function CarouselImage(props) {
  const { images } = props;

  const renderItem = ({ item }) => {
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
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width,
    height,
    resizeMode: "contain",
  },
});
