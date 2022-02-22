import { useEffect, useState } from "react";
import { Status } from "../types";

import { readStatus, writeStatus } from "../utils";

export const useStatus = () => {
  const [values, setValues] = useState<Status>({
    attentiveness: "",
    healthPoints: "",
    battle: "",
    armorClass: "",
    speed: "",
    meleeStrikes: "",
    rangedStrikes: "",
  });

  const getInitialState = async () => {
    const v = await readStatus();
    setValues(v);
  };

  useEffect(() => {
    getInitialState();
  }, []);

  useEffect(() => {
    writeStatus(values);
  }, [values]);

  return [values, setValues] as const;
};
