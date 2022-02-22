import AsyncStorage from "@react-native-async-storage/async-storage";

import { Status } from "../types";

const key = "status";

export const writeStatus = async (values: Status) => {
  const valuesJSON = JSON.stringify(values);
  await AsyncStorage.setItem(key, valuesJSON);
};

export const readStatus = async (): Promise<Status> => {
  const valuesJSON = await AsyncStorage.getItem(key);

  return JSON.parse(valuesJSON ?? "{}");
};
