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

export const enum ProfileKey {
  CharacterName = "characterName",
  Level = "level",
  HeroismPoints = "heroismPoints",
  Experience = "experience",
  Ancestry = "ancestry",
  Class = "class",
  Size = "size",
  Ideology = "ideology",
  Descriptors = "descriptors",
  Deity = "deity",
  WeaponSkills = "weaponSkills",
  Languages = "languages",
}

export type Profile = {
  [ProfileKey.CharacterName]: string;
  [ProfileKey.Level]: string;
  [ProfileKey.HeroismPoints]: string;
  [ProfileKey.Experience]: string;
  [ProfileKey.Ancestry]: string;
  [ProfileKey.Class]: string;
  [ProfileKey.Size]: string;
  [ProfileKey.Ideology]: string;
  [ProfileKey.Descriptors]: string;
  [ProfileKey.Deity]: string;
  [ProfileKey.WeaponSkills]: string;
  [ProfileKey.Languages]: string;
};

export const enum AttributesKey {
  Strength = "strength",
  Agility = "agility",
  Constitution = "constitution",
  Intelligence = "intelligence",
  Wisdom = "wisdom",
  Charisma = "charisma",
  StrengthValue = "strengthValue",
  AgilityValue = "agilityValue",
  ConstitutionValue = "constitutionValue",
  IntelligenceValue = "intelligenceValue",
  WisdomValue = "wisdomValue",
  CharismaValue = "charismaValue",
}

export type Attributes = {
  [AttributesKey.Strength]: string;
  [AttributesKey.Agility]: string;
  [AttributesKey.Constitution]: string;
  [AttributesKey.Intelligence]: string;
  [AttributesKey.Wisdom]: string;
  [AttributesKey.Charisma]: string;
  [AttributesKey.StrengthValue]: string;
  [AttributesKey.AgilityValue]: string;
  [AttributesKey.ConstitutionValue]: string;
  [AttributesKey.IntelligenceValue]: string;
  [AttributesKey.WisdomValue]: string;
  [AttributesKey.CharismaValue]: string;
};
