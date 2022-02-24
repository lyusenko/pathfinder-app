import { useEffect, useState } from "react";
import { Profile } from "../types";
import { ProfileKey } from "../types";
import { readProfile, writeProfile } from "../utils";

export const useProfile = () => {
  const [values, setValues] = useState<Profile>({
    [ProfileKey.CharacterName]: "",
    [ProfileKey.Level]: "",
    [ProfileKey.HeroismPoints]: "",
    [ProfileKey.Experience]: "",
    [ProfileKey.Ancestry]: "",
    [ProfileKey.Class]: "",
    [ProfileKey.Size]: "",
    [ProfileKey.Ideology]: "",
    [ProfileKey.Descriptors]: "",
    [ProfileKey.Deity]: "",
    [ProfileKey.WeaponSkills]: "",
    [ProfileKey.Languages]: "",
  });

  const getInitialState = async () => {
    const v = await readProfile();
    setValues(v);
  };

  useEffect(() => {
    getInitialState();
  }, []);

  useEffect(() => {
    writeProfile(values);
  }, [values]);

  return [values, setValues] as const;
};
