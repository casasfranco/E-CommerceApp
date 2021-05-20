import { API_URL } from "../utils/constants";

export async function isFavoriteApi(auth, idProduct) {
  try {
    const url = `${API_URL}/favorites?user=${auth.idUser}&product=${idProduct}`;
    const params = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
