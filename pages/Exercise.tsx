import { useEffect, useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { Timer, TimerState } from "../models/Timer";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Config } from "../config/config";

const Exercise = () => {
  const INIT_DURATION = 18;
  const [timerState, setTimerState] = useState<TimerState>(TimerState.STOPPED);
  const [key, setKey] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleButtonPress = (timerState: TimerState, isPlaying: boolean) => {
    if (timerState === TimerState.STOPPED) {
      setKey((prev) => prev + 1);
    }

    setTimerState(timerState);
    setIsPlaying(isPlaying);
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
      <CountdownCircleTimer
        size={240}
        key={key}
        isPlaying={isPlaying}
        duration={INIT_DURATION}
        colors={[`#81c784`, `#66bb6a`, "#4caf50", "#43a047"]}
        colorsTime={[
          INIT_DURATION,
          INIT_DURATION * 0.66,
          INIT_DURATION * 0.33,
          0,
        ]}
      >
        {({ remainingTime }) => (
          <Text style={styles.timerText}>
            {Timer.getMinutesAndSeconds(remainingTime)}
          </Text>
        )}
      </CountdownCircleTimer>
      <View style={styles.btns}>
        <Button
          title="Start"
          onPress={() => handleButtonPress(TimerState.STARTED, true)}
          disabled={timerState === TimerState.STARTED}
        />
        <Button
          title="Pause"
          onPress={() => handleButtonPress(TimerState.PAUSED, false)}
          disabled={timerState === TimerState.PAUSED}
        />
        <Button
          title="Stop"
          onPress={() => handleButtonPress(TimerState.STOPPED, false)}
          disabled={timerState === TimerState.STOPPED}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 32,
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
  timerText: {
    textAlign: "center",
    fontSize: 52,
    color: "rgba(0, 0, 0, 0.6)",
  },
  btns: {
    marginTop: 24,
  },
});

export default Exercise;
