import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoadingScreen from "./pages/LoadingScreen";
import MenuScreen from "./pages/MenuScreen";
import Meditation from "./pages/Meditation";
import Fasting from "./pages/Fasting";
import Exercise from "./pages/Exercise";
import Water from "./pages/Water";
import Settings from "./pages/Settings";
import { Config } from "./config/config";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, Config.INITIAL_LOADING_TIME);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Meditation" component={Meditation} />
          <Stack.Screen name="Fasting" component={Fasting} />
          <Stack.Screen name="Exercise" component={Exercise} />
          <Stack.Screen name="Water" component={Water} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
