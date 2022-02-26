import { useEffect, useState } from "react";
import { Attributes } from "../types";
import { AttributesKey } from "../types";
import { readAttributes, writeAttributes } from "../utils";

export const useAttributes = () => {
  const [values, setValues] = useState<Attributes>({
    [AttributesKey.Strength]: "",
    [AttributesKey.Agility]: "",
    [AttributesKey.Constitution]: "",
    [AttributesKey.Intelligence]: "",
    [AttributesKey.Wisdom]: "",
    [AttributesKey.Charisma]: "",
    [AttributesKey.StrengthValue]: "",
    [AttributesKey.AgilityValue]: "",
    [AttributesKey.ConstitutionValue]: "",
    [AttributesKey.IntelligenceValue]: "",
    [AttributesKey.WisdomValue]: "",
    [AttributesKey.CharismaValue]: "",
  });

  const getInitialState = async () => {
    const v = await readAttributes();
    setValues(v);
  };

  useEffect(() => {
    getInitialState();
  }, []);

  useEffect(() => {
    writeAttributes(values);
  }, [values]);

  return [values, setValues] as const;
};
