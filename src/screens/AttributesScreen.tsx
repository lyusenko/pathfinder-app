import { StyleSheet, Text, View } from "react-native";

export const AttributesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Attributes Screen</Text>
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
