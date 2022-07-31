import { StyleSheet, Button, Text, View } from "react-native";
import Timer from "../components/Timer";
import { Config } from "../config/config";

const Exercise = () => {
  return (
    <View style={styles.exerciseBody}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Exercise</Text>
        <Text style={styles.description}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or .
        </Text>
      </View>
      <Timer />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 12,
    marginBottom: 24,
    padding: 16,
  },
  header: { fontSize: 40, color: "rgba(0, 0, 0, 0.87)" },
  description: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.6)",
    lineHeight: 18,
  },
  exerciseBody: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Exercise;
