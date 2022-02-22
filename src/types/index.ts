export const enum StatusKey {
  ArmorClass = "armorClass",
  Attentiveness = "attentiveness",
  Battle = "battle",
  HealthPoints = "healthPoints",
  MeleeStrikes = "meleeStrikes",
  RangedStrikes = "rangedStrikes",
  Speed = "speed",
}

export type Status = {
  [StatusKey.ArmorClass]: string;
  [StatusKey.Attentiveness]: string;
  [StatusKey.Battle]: string;
  [StatusKey.HealthPoints]: string;
  [StatusKey.MeleeStrikes]: string;
  [StatusKey.RangedStrikes]: string;
  [StatusKey.Speed]: string;
};
