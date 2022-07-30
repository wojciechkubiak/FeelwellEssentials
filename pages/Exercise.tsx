import { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import BackgroundTimer from "react-native-background-timer";

const Exercise = () => {
  const [timer, setTimer] = useState<number>(36000);
  const tm = BackgroundTimer;

  console.log(tm);
  useEffect(() => {
    const loadInitTimer = () => setTimer(16000);

    loadInitTimer();
  }, []);

  const handleStart = () => {
    console.log(tm);
    tm.runBackgroundTimer(() => {
      setTimer(timer - 1000);
    }, 1000);
  };

  return (
    <View>
      <Text>{timer}</Text>
      <Button title="Start" onPress={handleStart} />
    </View>
  );
};

export default Exercise;
