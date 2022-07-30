import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { Config } from "../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface INavigationButton {
  onPress: () => void;
  text: string;
  isWide?: boolean;
  icon: IconDefinition;
}

const NavigationButton = ({
  onPress,
  text,
  isWide = false,
  icon,
}: INavigationButton) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.button, isWide ? styles.buttonWide : styles.buttonSmall]}
      underlayColor={isWide ? Config.ACCENT_COLOR_DARK : "#d8d8d8"}
    >
      <View style={styles.container}>
        <FontAwesomeIcon
          color={isWide ? "white" : "rgba(0, 0, 0, 0.6)"}
          icon={icon}
          size={32}
        />
        <Text
          style={[styles.text, isWide ? styles.textWide : styles.textSmall]}
        >
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    elevation: 8,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    paddingVertical: 32,
    paddingHorizontal: 12,
    marginTop: 12,
    marginBottom: 12,
  },
  buttonSmall: {
    backgroundColor: "#F8F8F8",
    width: "46%",
  },
  buttonWide: {
    backgroundColor: Config.ACCENT_COLOR,
    width: "100%",
  },
  text: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textSmall: {
    color: "rgba(0, 0, 0, 0.6)",
  },
  textWide: {
    color: "white",
  },
});

export default NavigationButton;
