import AsyncStorage from "@react-native-async-storage/async-storage";
import { size, map, filter, toNumber } from "lodash";
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

export async function addProductCartApi(
  idProduct,
  quantity,
  price,
  discount_from_units,
  price_with_discount,
  subTotal
) {
  console.log("subTotal: " + subTotal);
  try {
    const cart = await getProductCartApi();
    if (!cart) throw "Error al obtener el carrito"; //Null

    if (size(cart) === 0) {
      cart.push({
        idProduct,
        quantity,
        price,
        discount_from_units,
        price_with_discount,
        subTotal,
      });
    } else {
      let founded = false;

      map(cart, (product) => {
        if (product.idProduct === idProduct) {
          product.quantity += quantity; //Incremento cantidades a las existentes
          founded = true; //Encontre el producto
          if (product.quantity >= product.discount_from_units) {
            product.subTotal = Number(
              product.quantity * product.price_with_discount
            );
          }
          return product;
        }
      });

      if (!founded) {
        cart.push({
          idProduct,
          quantity,
          price,
          discount_from_units,
          price_with_discount,
          subTotal,
        });
      }
    }
    console.log(cart);
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
    console.log(cart);
    map(cart, (product) => {
      if (product.idProduct === idProduct) {
        product.quantity += 1;
        if (product.quantity >= product.discount_from_units) {
          product.subTotal = Number(
            product.quantity * product.price_with_discount
          );
        } else {
          product.subTotal = Number(product.quantity * product.price);
        }
        return true;
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
          product.quantity -= 1;
          if (product.quantity >= product.discount_from_units) {
            product.subTotal = Number(
              product.quantity * product.price_with_discount
            );
          } else {
            product.subTotal = Number(product.quantity * product.price);
          }
          return true;
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

export async function paymentCartApi(auth, tokenStripe, products, address) {
  try {
    const addressShipping = address;
    delete addressShipping.user;
    delete addressShipping.createdAt;

    const url = `${API_URL}/orders`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({
        tokenStripe,
        products,
        idUser: auth.idUser,
        addressShipping,
      }),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteCartApi() {
  try {
    await AsyncStorage.removeItem(CART);
    return true;
  } catch (error) {
    return null;
  }
}
