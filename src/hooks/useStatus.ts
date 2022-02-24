import { useEffect, useState } from "react";
import { Status } from "../types";
import { StatusKey } from "../types";
import { readStatus, writeStatus } from "../utils";

export const useStatus = () => {
  const [values, setValues] = useState<Status>({
    [StatusKey.ArmorClass]: "",
    [StatusKey.Attentiveness]: "",
    [StatusKey.Battle]: "",
    [StatusKey.HealthPoints]: "",
    [StatusKey.MeleeStrikes]: "",
    [StatusKey.RangedStrikes]: "",
    [StatusKey.Speed]: "",
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
