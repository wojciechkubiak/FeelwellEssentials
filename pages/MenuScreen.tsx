import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import Layout from "../components/Layout";
import NavigationButton from "../components/NavigationButton";
import { ScreenNames, StackKey, StackParamList } from "../models/Page";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons/faHeartbeat";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faTint } from "@fortawesome/free-solid-svg-icons/faTint";
import { faCutlery } from "@fortawesome/free-solid-svg-icons/faCutlery";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";

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
          icon={faLeaf}
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Fasting");
          }}
          text={ScreenNames.Fasting}
          icon={faCutlery}
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Exercise");
          }}
          text={ScreenNames.Exercise}
          icon={faHeartbeat}
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Water");
          }}
          text={ScreenNames.Water}
          icon={faTint}
        />
        <NavigationButton
          onPress={() => {
            handleNavigate("Settings");
          }}
          text={ScreenNames.Settings}
          icon={faCog}
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
