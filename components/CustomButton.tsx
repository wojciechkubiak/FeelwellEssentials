import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { Config } from "../config/config";

interface ICustomButton {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  isAccentColor?: boolean;
}

const CustomButton = ({
  onPress,
  text,
  disabled = false,
  isAccentColor = false,
}: ICustomButton) => (
  <TouchableHighlight
    onPress={onPress}
    style={[
      styles.button,
      isAccentColor ? styles.buttonActive : styles.buttonDisabled,
    ]}
    underlayColor={
      isAccentColor ? Config.COLORS.GREEN500 : Config.COLORS.GREEN50
    }
    disabled={disabled}
  >
    <View style={styles.container}>
      <Text style={isAccentColor ? styles.textAccent : styles.textBasic}>
        {text}
      </Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 22,
    marginTop: 4,
    marginBottom: 4,
  },
  buttonDisabled: {
    elevation: 2,
    backgroundColor: "white",
  },
  buttonActive: {
    elevation: 8,
    backgroundColor: Config.COLORS.GREEN400,
  },
  textAccent: {
    color: "white",
  },
  textBasic: {
    color: "rgba(0, 0, 0, 0.87)",
  },
});

export default CustomButton;
