import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export const AttributesScreen = () => {
  const [values, setValues] = useState({
    strength: "",
    agility: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
  });

  const handleChange = (key: string) => (value: string) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Характеристики</Text>
      <TextInput
        style={styles.input}
        value={values.strength}
        onChangeText={handleChange("strength")}
        placeholder="Сила"
      />
      <TextInput
        style={styles.input}
        value={values.agility}
        onChangeText={handleChange("agility")}
        placeholder="Ловкость"
      />
      <TextInput
        style={styles.input}
        value={values.constitution}
        onChangeText={handleChange("constitution")}
        placeholder="Выносливость"
      />
      <TextInput
        style={styles.input}
        value={values.intelligence}
        onChangeText={handleChange("intelligence")}
        placeholder="Интеллект"
      />
      <TextInput
        style={styles.input}
        value={values.wisdom}
        onChangeText={handleChange("wisdom")}
        placeholder="Мудрость"
      />
      <TextInput
        style={styles.input}
        value={values.charisma}
        onChangeText={handleChange("charisma")}
        placeholder="Харизма"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 24,
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
