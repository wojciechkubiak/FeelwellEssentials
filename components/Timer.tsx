import { useState } from "react";
import { TimerModel, TimerState } from "../models/Timer";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { StyleSheet, Text, View } from "react-native";
import PlayButton from "./PlayButton";
import CustomButton from "./CustomButton";
import { Config } from "../config/config";

interface ITimer {
  onUpdate: (n: number) => void;
  duration: number;
  isCompleted: boolean;
}

const Timer = ({ onUpdate, duration, isCompleted }: ITimer) => {
  const [timerState, setTimerState] = useState<TimerState>(TimerState.STOPPED);
  const [key, setKey] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleButtonPress = (timerState: TimerState) => {
    if (timerState === TimerState.STOPPED) {
      setKey((prev) => prev + 1);
      setIsPlaying(false);
    } else if (timerState === TimerState.PAUSED) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
    setTimerState(timerState);
  };

  const isStarted = timerState === TimerState.STARTED;

  return (
    <View>
      <CountdownCircleTimer
        size={240}
        key={key}
        isPlaying={isPlaying}
        duration={duration}
        colors={[`#81c784`, `#66bb6a`, "#4caf50", "#43a047"]}
        colorsTime={[duration, duration * 0.66, duration * 0.33, 0]}
        onUpdate={(remainingTime: number) => {
          onUpdate(remainingTime);

          if (!remainingTime) {
            handleButtonPress(TimerState.STOPPED);
          }
        }}
      >
        {({ remainingTime }) => (
          <Text style={styles.timerText}>
            {TimerModel.getMinutesAndSeconds(remainingTime)}
          </Text>
        )}
      </CountdownCircleTimer>
      <View style={styles.btns}>
        <PlayButton
          onPress={() =>
            handleButtonPress(
              isStarted ? TimerState.PAUSED : TimerState.STARTED
            )
          }
          disabled={isStarted}
        />
        <CustomButton
          text="Stop"
          onPress={() => handleButtonPress(TimerState.STOPPED)}
          disabled={timerState === TimerState.STOPPED}
        />
      </View>
      {isCompleted && (
        <Text style={styles.completedText}>ALREADY COMPLETED</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  timerText: {
    textAlign: "center",
    fontSize: 52,
    color: "rgba(0, 0, 0, 0.6)",
  },
  btns: {
    marginTop: 24,
  },
  completedText: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: Config.COLORS.GREEN600,
  },
});

export default Timer;
