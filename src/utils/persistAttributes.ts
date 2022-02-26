import AsyncStorage from "@react-native-async-storage/async-storage";

import { Attributes } from "../types";

const key = "attributes";

export const writeAttributes = async (values: Attributes) => {
  const valuesJSON = JSON.stringify(values);
  await AsyncStorage.setItem(key, valuesJSON);
};

export const readAttributes = async (): Promise<Attributes> => {
  const valuesJSON = await AsyncStorage.getItem(key);

  return JSON.parse(valuesJSON ?? "{}");
};
