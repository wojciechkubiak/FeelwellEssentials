import { StyleSheet, View } from "react-native";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
});

export default Layout;
