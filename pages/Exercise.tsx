import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { DateModel } from "../models/Date";
import { ExerciseModel } from "../models/Exercise";
import { getExercise, saveExercise } from "../services/Exercise";
import Timer from "../components/Timer";

const Exercise = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    getExercise().then((exercise: ExerciseModel) => {
      setIsCompleted(DateModel.compareDates(exercise.date));
    });
  });

  const handleExerciseCompleted = async (): Promise<void> => {
    saveExercise({ date: new Date().toISOString(), isCompleted: true });
  };

  const onExerciseTimerUpdate = (n: number) => {
    if (!n && !isCompleted) {
      handleExerciseCompleted();
    }
  };

  return (
    <View style={styles.exerciseBody}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Exercise</Text>
        <Text style={styles.description}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or .
        </Text>
      </View>
      <Timer
        onUpdate={onExerciseTimerUpdate}
        duration={36}
        isCompleted={isCompleted}
      />
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
