import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const ProfileScreen = () => {
  const [values, setValues] = useState({ characterName: "", level: "" });

  const handleChange = (key) => (value) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={values.characterName}
        onChangeText={handleChange("characterName")}
      />
      <TextInput
        style={styles.input}
        value={values.level}
        onChangeText={handleChange("level")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: "100%",
  },
});
