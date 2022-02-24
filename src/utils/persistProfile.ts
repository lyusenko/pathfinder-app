import AsyncStorage from "@react-native-async-storage/async-storage";

import { Profile } from "../types";

const key = "profile";

export const writeProfile = async (values: Profile) => {
  const valuesJSON = JSON.stringify(values);
  await AsyncStorage.setItem(key, valuesJSON);
};

export const readProfile = async (): Promise<Profile> => {
  const valuesJSON = await AsyncStorage.getItem(key);

  return JSON.parse(valuesJSON ?? "{}");
};
