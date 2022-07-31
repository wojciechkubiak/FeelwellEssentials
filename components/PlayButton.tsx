import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { Config } from "../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faPause } from "@fortawesome/free-solid-svg-icons/faPause";

interface IPlayButton {
  onPress: () => void;
  disabled?: boolean;
}

const PlayButton = ({ onPress, disabled = false }: IPlayButton) => {
  const ICON_SIZE = 32;

  return (
    <TouchableHighlight
      onPress={onPress}
      style={[
        styles.button,
        disabled ? styles.buttonDisabled : styles.buttonActive,
      ]}
      underlayColor={disabled ? Config.COLORS.GREEN50 : Config.COLORS.GREEN500}
    >
      <View style={styles.container}>
        <FontAwesomeIcon
          color={disabled ? Config.COLORS.GREEN400 : "white"}
          icon={disabled ? faPause : faPlay}
          size={ICON_SIZE}
        />
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
    borderRadius: 12,
    paddingVertical: 32,
    paddingHorizontal: 12,
    marginTop: 12,
    marginBottom: 12,
  },
  buttonDisabled: {
    elevation: 2,
    backgroundColor: "white",
  },
  buttonActive: {
    elevation: 8,
    backgroundColor: Config.COLORS.GREEN400,
  },
});

export default PlayButton;
