import { StyleSheet, Text, View } from "react-native";

export const AbilitiesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Abilities Screen</Text>
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
