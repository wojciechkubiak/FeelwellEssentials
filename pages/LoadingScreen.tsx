import { View } from "react-native";
import LottieView from "lottie-react-native";
import Layout from "../components/Layout";
import Animation from "../assets/load.json";
import { Config } from "../config/config";

const LoadingScreen = () => {
  return (
    <Layout>
      <View>
        <LottieView
          style={{ height: Config.LOADING_SCREEN_ICON_SIZE }}
          source={Animation}
          autoPlay
          loop
        />
      </View>
    </Layout>
  );
};

export default LoadingScreen;
