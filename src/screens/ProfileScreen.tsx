import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "../components/Input";
import { useProfile } from "../hooks";
import { ProfileKey } from "../types";

export const ProfileScreen = () => {
  const [values, setValues] = useProfile();

  const handleEndEditing = (key: string) => async (e: any) => {
    setValues({ ...values, [key]: e.nativeEvent.text });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Input
        label="Имя персонажа"
        defaultValue={values.characterName}
        onEndEditing={handleEndEditing(ProfileKey.CharacterName)}
        placeholder="Имя персонажа"
      />
      <Input
        label="Уровень"
        defaultValue={values.level}
        onEndEditing={handleEndEditing(ProfileKey.Level)}
        placeholder="Уровень"
      />
      <Input
        label="Пункты героизма"
        defaultValue={values.heroismPoints}
        onEndEditing={handleEndEditing(ProfileKey.HeroismPoints)}
        placeholder="Пункты героизма"
      />
      <Input
        label="Опыт"
        defaultValue={values.experience}
        onEndEditing={handleEndEditing(ProfileKey.Experience)}
        placeholder="Опыт"
      />
      <Input
        label="Народ и родословная"
        defaultValue={values.ancestry}
        onEndEditing={handleEndEditing(ProfileKey.Ancestry)}
        placeholder="Народ и родословная"
      />
      <Input
        label="Класс"
        defaultValue={values.class}
        onEndEditing={handleEndEditing(ProfileKey.Class)}
        placeholder="Класс"
      />
      <Input
        label="Размер"
        defaultValue={values.size}
        onEndEditing={handleEndEditing(ProfileKey.Size)}
        placeholder="Размер"
      />
      <Input
        label="Мировоззрение"
        defaultValue={values.ideology}
        onEndEditing={handleEndEditing(ProfileKey.Ideology)}
        placeholder="Мировоззрение"
      />
      <Input
        label="Дескрипторы"
        defaultValue={values.descriptors}
        onEndEditing={handleEndEditing(ProfileKey.Descriptors)}
        placeholder="Дескрипторы"
      />
      <Input
        label="Божество"
        defaultValue={values.deity}
        onEndEditing={handleEndEditing(ProfileKey.Deity)}
        placeholder="Божество"
      />
      <Input
        label="Умения в оружии"
        defaultValue={values.weaponSkills}
        onEndEditing={handleEndEditing(ProfileKey.WeaponSkills)}
        placeholder="Умения в оружии"
      />
      <Input
        label="Языки"
        defaultValue={values.languages}
        onEndEditing={handleEndEditing(ProfileKey.Languages)}
        placeholder="Языки"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 24,
  },
  scrollView: {
    marginTop: 12,
    marginBottom: 12,
  },
  container: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
