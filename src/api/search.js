import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL, SEARCH_HISTORY } from "../utils/constants";
import { sortArrayDate } from "../utils/functions";
import { size } from "lodash";

export async function getSearchHistoryApi() {
  //   await AsyncStorage.removeItem(SEARCH_HISTORY);
  try {
    const history = await AsyncStorage.getItem(SEARCH_HISTORY);
    if (!history) return []; //Si es nulo

    return sortArrayDate(JSON.parse(history));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function updateSearchHistoryApi(search) {
  const history = await getSearchHistoryApi();

  if (size(history) > 4) history.pop();
  if (search !== "" && search !== " ") {
    history.push({
      search,
      date: new Date(),
    });
    await AsyncStorage.setItem(SEARCH_HISTORY, JSON.stringify(history));
  }
}
export async function searchProductsApi(search) {
  try {
    const url = `${API_URL}/products?_q=${search}&_limit=60`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
