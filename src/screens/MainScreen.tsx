import { useState } from "react";
import { StyleSheet, TextInput, View, Text, SectionList } from "react-native";

export const MainScreen = () => {
  const [values, setValues] = useState({
    attentiveness: "",
    healthPoints: "",
    battle: "",
    armorClass: "",
    speed: "",
    meleeStrikes: "",
    rangedStrikes: "",
  });

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

  const handleChange = (key: string) => (value: string) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Основные показатели</Text>
      <TextInput
        style={styles.input}
        value={values.attentiveness}
        onChangeText={handleChange("attentiveness")}
        placeholder="Внимание"
      />
      <TextInput
        style={styles.input}
        value={values.healthPoints}
        onChangeText={handleChange("healthPoints")}
        placeholder="Здоровье"
      />
      <TextInput
        style={styles.input}
        value={values.battle}
        onChangeText={handleChange("battle")}
        placeholder="Испытания"
      />
      <TextInput
        style={styles.input}
        value={values.armorClass}
        onChangeText={handleChange("armorClass")}
        placeholder="Класс брони"
      />
      <TextInput
        style={styles.input}
        value={values.speed}
        onChangeText={handleChange("speed")}
        placeholder="Скорость"
      />
      <TextInput
        style={styles.input}
        value={values.meleeStrikes}
        onChangeText={handleChange("meleeStrikes")}
        placeholder="Удары в ближнем бою"
      />
      <TextInput
        style={styles.input}
        value={values.rangedStrikes}
        onChangeText={handleChange("rangedStrikes")}
        placeholder="Дистанционные удары"
      />
    </View>
  );
};
