import { StyleSheet, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { useStatus } from "../hooks";
import { StatusKey } from "../types";

export const MainScreen = () => {
  const [values, setValues] = useStatus();

  const handleEndEditing = (key: string) => async (e: any) => {
    setValues({ ...values, [key]: e.nativeEvent.text });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        defaultValue={values.attentiveness}
        onEndEditing={handleEndEditing(StatusKey.Attentiveness)}
        placeholder="Внимание"
      />
      <TextInput
        style={styles.input}
        defaultValue={values.healthPoints}
        onEndEditing={handleEndEditing(StatusKey.HealthPoints)}
        placeholder="Здоровье"
      />
      <TextInput
        style={styles.input}
        defaultValue={values.battle}
        onEndEditing={handleEndEditing(StatusKey.Battle)}
        placeholder="Испытания"
      />
      <TextInput
        style={styles.input}
        defaultValue={values.armorClass}
        onEndEditing={handleEndEditing(StatusKey.ArmorClass)}
        placeholder="Класс брони"
      />
      <TextInput
        style={styles.input}
        defaultValue={values.speed}
        onEndEditing={handleEndEditing(StatusKey.Speed)}
        placeholder="Скорость"
      />
      <TextInput
        style={styles.input}
        defaultValue={values.meleeStrikes}
        onEndEditing={handleEndEditing(StatusKey.MeleeStrikes)}
        placeholder="Удары в ближнем бою"
      />
      <TextInput
        style={styles.input}
        defaultValue={values.rangedStrikes}
        onEndEditing={handleEndEditing(StatusKey.RangedStrikes)}
        placeholder="Дистанционные удары"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    width: "100%",
    elevation: 1,
  },
});
