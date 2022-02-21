import { StyleSheet, Text, View } from "react-native";

export const SkillsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Skills Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
