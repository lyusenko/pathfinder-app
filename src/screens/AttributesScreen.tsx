import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "../components/Input";
import { useAttributes } from "../hooks";

export const AttributesScreen = () => {
  const [values, setValues] = useAttributes();

  const handleEndEditing = (key: string) => async (e: any) => {
    setValues({ ...values, [key]: e.nativeEvent.text });
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {/* <View style={styles.wrapper}> */}
      <Input
        style={styles.input}
        label="Сила (мод.)"
        defaultValue={values.strength}
        onEndEditing={handleEndEditing("strength")}
        placeholder="Сила (мод.)"
      />
      <Input
        style={styles.input}
        label="Сила (знач.)"
        defaultValue={values.strengthValue}
        onEndEditing={handleEndEditing("strengthValue")}
        placeholder="Сила"
      />
      <Input
        style={styles.input}
        label="Ловкость (мод.)"
        defaultValue={values.agility}
        onEndEditing={handleEndEditing("agility")}
        placeholder="Ловкость (мод.)"
      />
      <Input
        style={styles.input}
        label="Ловкость (знач.)"
        defaultValue={values.agilityValue}
        onEndEditing={handleEndEditing("agilityValue")}
        placeholder="Ловкость"
      />
      <Input
        style={styles.input}
        label="Выносливость (мод.)"
        defaultValue={values.constitution}
        onEndEditing={handleEndEditing("constitution")}
        placeholder="Выносливость"
      />
      <Input
        style={styles.input}
        label="Выносливость (знач.)"
        defaultValue={values.constitutionValue}
        Value
        onEndEditing={handleEndEditing("constitutionValue")}
        placeholder="Выносливость"
      />
      <Input
        style={styles.input}
        label="Интеллект (мод.)"
        defaultValue={values.intelligence}
        onEndEditing={handleEndEditing("intelligence")}
        placeholder="Интеллект"
      />
      <Input
        style={styles.input}
        label="Интеллект (знач.)"
        defaultValue={values.intelligenceValue}
        onEndEditing={handleEndEditing("intelligenceValue")}
        placeholder="Интеллект"
      />
      <Input
        style={styles.input}
        label="Мудрость (мод.)"
        defaultValue={values.wisdom}
        onEndEditing={handleEndEditing("wisdom")}
        placeholder="Мудрость"
      />
      <Input
        style={styles.input}
        label="Мудрость (знач.)"
        defaultValue={values.wisdomValue}
        onEndEditing={handleEndEditing("wisdomValue")}
        placeholder="Мудрость"
      />
      <Input
        style={styles.input}
        label="Харизма (мод.)"
        defaultValue={values.charisma}
        onEndEditing={handleEndEditing("charisma")}
        placeholder="Харизма"
      />
      <Input
        style={styles.input}
        label="Харизма (знач.)"
        defaultValue={values.charismaValue}
        onEndEditing={handleEndEditing("charismaValue")}
        placeholder="Харизма"
      />
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 12,
    width: "100%",
  },
  input: {
    width: "50%",
  },
});
