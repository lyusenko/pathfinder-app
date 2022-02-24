import { Text, TextInput, StyleSheet, View } from "react-native";

export const Input = (props: any) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
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
  label: {
    marginBottom: 4,
    paddingLeft: 18,
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 12,
  },
});
