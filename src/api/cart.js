import AsyncStorage from "@react-native-async-storage/async-storage";
import { size, map, filter } from "lodash";
import { API_URL, CART } from "../utils/constants";

export async function getProductCartApi() {
  //   await AsyncStorage.removeItem(CART);
  try {
    const cart = await AsyncStorage.getItem(CART);
    if (!cart) return [];
    return JSON.parse(cart);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addProductCartApi(idProduct, quantity) {
  try {
    const cart = await getProductCartApi();
    if (!cart) throw "Error al obtener el carrito"; //Null

    if (size(cart) === 0) {
      cart.push({
        idProduct,
        quantity,
      });
    } else {
      let founded = false;

      map(cart, (product) => {
        if (product.idProduct === idProduct) {
          product.quantity += quantity; //Incremento cantidades a las existentes
          founded = true; //Encontre el producto
          return product;
        }
      });

      if (!founded) {
        cart.push({
          idProduct,
          quantity,
        });
      }
    }
    await AsyncStorage.setItem(CART, JSON.stringify(cart));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function deleteProductCartApi(idProduct) {
  try {
    const cart = await getProductCartApi();
    const newCart = filter(cart, (product) => {
      return product.idProduct !== idProduct;
    });
    await AsyncStorage.setItem(CART, JSON.stringify(newCart));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function increaseProductCartApi(idProduct) {
  try {
    const cart = await getProductCartApi();

    map(cart, (product) => {
      if (product.idProduct === idProduct) {
        return (product.quantity += 1);
      }
    });

    await AsyncStorage.setItem(CART, JSON.stringify(cart));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function decreaseProductCartApi(idProduct) {
  let isDelete = false;

  try {
    const cart = await getProductCartApi();

    map(cart, (product) => {
      if (product.idProduct === idProduct) {
        if (product.quantity === 1) {
          isDelete = true;
          return null;
        } else {
          return (product.quantity -= 1);
        }
      }
    });

    if (isDelete) {
      await deleteProductCartApi(idProduct);
    } else {
      await AsyncStorage.setItem(CART, JSON.stringify(cart));
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
