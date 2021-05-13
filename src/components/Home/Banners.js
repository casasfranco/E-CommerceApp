import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getBannerApi } from "../../api/home-banner";
export default function Banners() {
  const [banners, setBanners] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getBannerApi();
      setBanners(response);
    })();
  }, []);

  return (
    <View>
      <Text>Banners...</Text>
    </View>
  );
}
