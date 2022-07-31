import { useState } from "react";
import { TimerModel, TimerState } from "../models/Timer";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { StyleSheet, Button, Text, View } from "react-native";
import PlayButton from "./PlayButton";
import CustomButton from "./CustomButton";

const Timer = () => {
  const INIT_DURATION = 60;
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
});

export default Timer;
