import { View } from "react-native";
import LottieView from "lottie-react-native";

import { Config } from "../config/config";
import Layout from "../components/Layout";
import Animation from "../assets/load.json";

const LoadingScreen = () => (
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

export default LoadingScreen;
