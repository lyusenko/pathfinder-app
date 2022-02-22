import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const ProfileScreen = () => {
  const [values, setValues] = useState({
    characterName: "",
    level: "",
    heroismPoints: "",
    experience: "",
    ancestry: "",
    class: "",
    size: "",
    ideology: "",
    descriptors: "",
    deity: "",
    weaponSkills: "",
    languages: "",
  });

  const handleChange = (key: string) => (value: string) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={values.characterName}
          onChangeText={handleChange("characterName")}
          placeholder="Имя персонажа"
        />
        <TextInput
          style={styles.input}
          value={values.level}
          onChangeText={handleChange("level")}
          placeholder="Уровень персонажа"
        />
        <TextInput
          style={styles.input}
          value={values.heroismPoints}
          onChangeText={handleChange("heroismPoints")}
          placeholder="Пункты героизма"
        />
        <TextInput
          style={styles.input}
          value={values.experience}
          onChangeText={handleChange("experience")}
          placeholder="Опыт"
        />
        <TextInput
          style={styles.input}
          value={values.ancestry}
          onChangeText={handleChange("ancestry")}
          placeholder="Народ и родословная"
        />
        <TextInput
          style={styles.input}
          value={values.class}
          onChangeText={handleChange("class")}
          placeholder="Класс"
        />
        <TextInput
          style={styles.input}
          value={values.size}
          onChangeText={handleChange("size")}
          placeholder="Размер"
        />
        <TextInput
          style={styles.input}
          value={values.ideology}
          onChangeText={handleChange("ideology")}
          placeholder="Мировоззрение"
        />
        <TextInput
          style={styles.input}
          value={values.descriptors}
          onChangeText={handleChange("descriptors")}
          placeholder="Дескрипторы"
        />
        <TextInput
          style={styles.input}
          value={values.deity}
          onChangeText={handleChange("deity")}
          placeholder="Божество"
        />
        <TextInput
          style={styles.input}
          value={values.weaponSkills}
          onChangeText={handleChange("weaponSkills")}
          placeholder="Умения в оружии"
        />
        <TextInput
          style={styles.input}
          value={values.languages}
          onChangeText={handleChange("languages")}
          placeholder="Языки"
        />
      </View>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
    width: "90%",
  },
});
