import { ActivityIndicator, View } from "react-native";
import { Config } from "../config/config";
import Layout from "../components/Layout";

const LoadingScreen = () => {
  return (
    <Layout>
      <View>
        <ActivityIndicator
          size={Config.LOADING_SCREEN_ICON_SIZE}
          color="#00ff00"
        />
      </View>
    </Layout>
  );
};

export default LoadingScreen;
