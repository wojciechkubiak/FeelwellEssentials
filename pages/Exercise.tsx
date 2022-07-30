import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { Timer } from "../models/Timer";

const Exercise = () => {
  const timer: Timer = new Timer();

  useEffect(() => {
    console.log(timer);
  }, []);

  const handleStart = () => {};

  return (
    <View>
      <Text>{timer}</Text>
      <Button title="Start" onPress={handleStart} />
    </View>
  );
};

export default Exercise;
