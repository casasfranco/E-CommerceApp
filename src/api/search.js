import AsyncStorage from "@react-native-async-storage/async-storage";
import { SEARCH_HISTORY } from "../utils/constants";

export async function getSearchHistoryApi() {
  return [];
}

export async function updateSearchHistoryApi(search) {
  const history = await getSearchHistoryApi();

  history.push({
    search,
    date: new Date(),
  });

  await AsyncStorage.setItem(SEARCH_HISTORY, JSON.stringify(history));
}
