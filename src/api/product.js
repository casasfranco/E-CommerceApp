import { API_URL_MERCASAS } from "../utils/constants";


export async function getProductsApi() {
    try {
      const url = `${API_URL_MERCASAS}/product`;
      const params = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(url);
      console.log(params);
      const response = await fetch(url, params);
      console.log(response);
      const result = await response.json();
      if(result.ok) return result.data;
      //return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }