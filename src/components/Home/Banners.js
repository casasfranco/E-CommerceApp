import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { size } from "lodash";
import { getBannerApi } from "../../api/home-banner";
import { API_URL } from "../../utils/constants";

const width = Dimensions.get("window").width;
const height = 160;

export default function Banners() {
  const [banners, setBanners] = useState();

  useEffect(() => {
    (async () => {
      const response = await getBannerApi();
      setBanners(response);
    })();
  }, []);

  if (!banners) return null;

  const renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => console.log("ir a producto")}>
        <Image
          style={styles.carousel}
          source={{ uri: `${API_URL}${item.banner.url}` }}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout={"default"}
        data={banners}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  carousel: {
    width: width,
    height: height,
  },
});
