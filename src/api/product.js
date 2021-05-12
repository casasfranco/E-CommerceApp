import { API_URL, API_URL_MERCASAS } from "../utils/constants";

// export async function getProductsApi() {
//   try {
//     const url = `${API_URL_MERCASAS}/product`;
//     const params = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     console.log(url);
//     console.log(params);
//     const response = await fetch(url, params);
//     console.log(response);
//     const result = await response.json();
//     if (result.ok) return result.data;
//     //return result;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

export async function getLastProductsApi(limit = 30) {
  try {
    const url = `${API_URL}/products?_limit=${limit}&_sort=createdAt:DESC`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function getProductApi(idProduct) {
  try {
    const url = `${API_URL}/products/${idProduct}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
