import { StyleSheet, Text, View } from "react-native";

export const NotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Notes Screen</Text>
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
