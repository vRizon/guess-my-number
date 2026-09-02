import { TextInput, View, Pressable, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        placeholder="51"
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center", //main axis
    alignItems: "center",
    //flex: 1, //ensures that this obj occupies as much space it can
    padding: 48,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#52092d",
    borderRadius: 8,
    elevation: 8,
    shadow: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    shadowOpacity: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginVertical: 16,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
