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
import { ScreenNames } from "./models/Page";
import { getDBConnection } from "./services/Database";
import { createExercisesTable } from "./services/Exercise";

const Stack = createNativeStackNavigator();

const BASE_STYLE = {
  navigationBarColor: "black",
  statusBarColor: "white",
  headerTitleStyle: { color: "white" },
};

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initializeDb = async (): Promise<void> => {
      createExercisesTable();
    };

    initializeDb();

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
            name={ScreenNames.Menu}
            component={MenuScreen}
            options={{ ...BASE_STYLE, headerShown: false }}
          />
          <Stack.Screen
            name={ScreenNames.Meditation}
            component={Meditation}
            options={{
              ...BASE_STYLE,
            }}
          />
          <Stack.Screen
            name={ScreenNames.Fasting}
            component={Fasting}
            options={{
              ...BASE_STYLE,
            }}
          />
          <Stack.Screen
            name={ScreenNames.Exercise}
            component={Exercise}
            options={{
              ...BASE_STYLE,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name={ScreenNames.Water}
            component={Water}
            options={{
              ...BASE_STYLE,
            }}
          />
          <Stack.Screen
            name={ScreenNames.Settings}
            component={Settings}
            options={{
              ...BASE_STYLE,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
