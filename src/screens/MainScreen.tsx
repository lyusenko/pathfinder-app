import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "../components/Input";
import { useStatus } from "../hooks";
import { StatusKey } from "../types";

export const MainScreen = () => {
  const [values, setValues] = useStatus();

  const handleEndEditing = (key: string) => async (e: any) => {
    setValues({ ...values, [key]: e.nativeEvent.text });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Input
        label="Внимание"
        defaultValue={values.attentiveness}
        onEndEditing={handleEndEditing(StatusKey.Attentiveness)}
        placeholder="Внимание"
      />
      <Input
        label="Здоровье"
        defaultValue={values.healthPoints}
        onEndEditing={handleEndEditing(StatusKey.HealthPoints)}
        placeholder="Здоровье"
      />
      <Input
        label="Испытания"
        defaultValue={values.battle}
        onEndEditing={handleEndEditing(StatusKey.Battle)}
        placeholder="Испытания"
      />
      <Input
        label="Класс брони"
        defaultValue={values.armorClass}
        onEndEditing={handleEndEditing(StatusKey.ArmorClass)}
        placeholder="Класс брони"
      />
      <Input
        label="Скорость"
        defaultValue={values.speed}
        onEndEditing={handleEndEditing(StatusKey.Speed)}
        placeholder="Скорость"
      />
      <Input
        label="Удары в ближнем бою"
        defaultValue={values.meleeStrikes}
        onEndEditing={handleEndEditing(StatusKey.MeleeStrikes)}
        placeholder="Удары в ближнем бою"
      />
      <Input
        label="Дистанционные удары"
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
  label: {
    marginBottom: 4,
    paddingLeft: 18,
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 12,
  },
});
