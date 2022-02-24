import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Сила (мод.)</Text>
        <TextInput
          style={styles.input}
          value={values.strength}
          onChangeText={handleChange("strength")}
          placeholder="Сила"
        />
        <Text style={styles.label}>Ловкость (мод.)</Text>
        <TextInput
          style={styles.input}
          value={values.agility}
          onChangeText={handleChange("agility")}
          placeholder="Ловкость"
        />
        <Text style={styles.label}>Выносливость (мод.)</Text>
        <TextInput
          style={styles.input}
          value={values.constitution}
          onChangeText={handleChange("constitution")}
          placeholder="Выносливость"
        />
        <Text style={styles.label}>Интеллект (мод.)</Text>
        <TextInput
          style={styles.input}
          value={values.intelligence}
          onChangeText={handleChange("intelligence")}
          placeholder="Интеллект"
        />
        <Text style={styles.label}>Мудрость (мод.)</Text>
        <TextInput
          style={styles.input}
          value={values.wisdom}
          onChangeText={handleChange("wisdom")}
          placeholder="Мудрость"
        />
        <Text style={styles.label}>Харизма (мод.)</Text>
        <TextInput
          style={styles.input}
          value={values.charisma}
          onChangeText={handleChange("charisma")}
          placeholder="Харизма"
        />
        <Text style={styles.label}>Сила (знач.)</Text>
        <TextInput
          style={styles.input}
          value={values.strength}
          onChangeText={handleChange("strength")}
          placeholder="Сила"
        />
        <Text style={styles.label}>Ловкость (знач.)</Text>
        <TextInput
          style={styles.input}
          value={values.agility}
          onChangeText={handleChange("agility")}
          placeholder="Ловкость"
        />
        <Text style={styles.label}>Выносливость (знач.)</Text>
        <TextInput
          style={styles.input}
          value={values.constitution}
          onChangeText={handleChange("constitution")}
          placeholder="Выносливость"
        />
        <Text style={styles.label}>Интеллект (знач.)</Text>
        <TextInput
          style={styles.input}
          value={values.intelligence}
          onChangeText={handleChange("intelligence")}
          placeholder="Интеллект"
        />
        <Text style={styles.label}>Мудрость (знач.)</Text>
        <TextInput
          style={styles.input}
          value={values.wisdom}
          onChangeText={handleChange("wisdom")}
          placeholder="Мудрость"
        />
        <Text style={styles.label}>Харизма (знач.)</Text>
        <TextInput
          style={styles.input}
          value={values.charisma}
          onChangeText={handleChange("charisma")}
          placeholder="Харизма"
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
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    margin: 12,
    maxHeight: 590,
  },
  input: {
    marginBottom: 24,
    marginHorizontal: 18,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 1,
    width: "40%",
  },
  label: {
    marginBottom: 4,
    paddingLeft: 18,
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 12,
  },
});
