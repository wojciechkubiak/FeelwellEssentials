import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import Layout from "../components/Layout";
import NavigationButton from "../components/NavigationButton";
import { ScreenNames, StackKey, StackParamList } from "../models/Page";

type IMenuScreen = NativeStackScreenProps<StackParamList, "Menu">;

const MenuScreen = ({ navigation }: IMenuScreen) => {
  const handleNavigate = (page: StackKey = "Menu", props: Object = {}) => {
    navigation.navigate(page, props);
  };

  return (
    <Layout>
      <View style={styles.menuButtons}>
        <NavigationButton
          onPress={() => {
            handleNavigate("Meditation");
          }}
          text={ScreenNames.Meditation}
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Fasting");
          }}
          text={ScreenNames.Fasting}
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Exercise");
          }}
          text={ScreenNames.Exercise}
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Water");
          }}
          text={ScreenNames.Water}
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Settings");
          }}
          text={ScreenNames.Settings}
          isWide
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  menuButtons: {
    width: "94%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default MenuScreen;
