import { ActivityIndicator, Text, View } from "react-native";
import Layout from "../components/Layout";

const LoadingScreen = () => {
  return (
    <Layout>
      <View>
        <ActivityIndicator size={112} color="#00ff00" />
      </View>
    </Layout>
  );
};

export default LoadingScreen;
