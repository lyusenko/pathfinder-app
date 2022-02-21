import { StyleSheet, Text, View } from "react-native";

export const EquipmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Equipment Screen</Text>
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
