import { StyleSheet, TouchableHighlight, Text } from "react-native";

interface INavigationButton {
  onPress: () => void;
  text: string;
  isWide?: boolean;
}

const NavigationButton = ({
  onPress,
  text,
  isWide = false,
}: INavigationButton) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.button, isWide ? styles.buttonWide : styles.buttonSmall]}
      underlayColor="#d8d8d8"
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    paddingVertical: 42,
    paddingHorizontal: 12,
    marginTop: 12,
    marginBottom: 12,
  },
  buttonSmall: {
    width: "46%",
  },
  buttonWide: {
    width: "100%",
  },
  text: {
    fontSize: 18,
    letterSpacing: 1,
    color: "rgba(0, 0, 0, 0.67)",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default NavigationButton;
