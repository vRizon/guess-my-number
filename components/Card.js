//this is a wrapper around any component, top create card
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
export default function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center", //main axis
    alignItems: "center",
    //flex: 1, //ensures that this obj occupies as much space it can
    padding: 48,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 8,
    shadow: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    shadowOpacity: 1,
  },
});
