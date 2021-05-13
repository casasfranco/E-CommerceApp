import { Animated } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

export const AnimatedIcon = Animated.createAnimatedComponent(AwesomeIcon); //Creo un componente (icon) que permite ser animado

const animVal = new Animated.Value(0); //Constante para guardar la configuracion de la animacion para luego ejecutar

export const inputAnimationWidth = animVal.interpolate({
  //Sirve para animar el ancho del inputo

  inputRange: [0, 1],
  outputRange: ["100%", "90%"],
});

export const inputAnimation = {
  trnasform: [
    {
      translateX: animVal.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0],
      }),
    },
  ],
};