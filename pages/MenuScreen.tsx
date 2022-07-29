import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import Layout from "../components/Layout";
import NavigationButton from "../components/NavigationButton";
import { StackKey, StackParamList } from "../models/Page";

type IMenuScreen = NativeStackScreenProps<StackParamList, "Menu">;

const MenuScreen = ({ navigation }: IMenuScreen) => {
  const handleNavigate = (
    page: StackKey = "Menu",
    props: Object | undefined = {}
  ) => {
    navigation.navigate(page, props);
  };

  return (
    <Layout>
      <View style={styles.menuButtons}>
        <NavigationButton
          onPress={() => {
            handleNavigate("Meditation");
          }}
          text="Meditate"
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Fasting");
          }}
          text="Fasting"
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Exercise");
          }}
          text="Exercise"
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Water");
          }}
          text="Water"
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Settings");
          }}
          text="Settings"
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
