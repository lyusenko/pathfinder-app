import { StyleSheet, Text, View } from "react-native";

export const SpellsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Spells Screen</Text>
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
