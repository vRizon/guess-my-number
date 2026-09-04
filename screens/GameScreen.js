import { use, useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import GuessLogItem from "../components/GuessLogItem";

//utility func generates random number
function generateRandomBetween(min, max, exclude) {
  //excluse user input
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  //useEffect runs after component func has been exec
  //check if game is over
  useEffect(() => {
    if (currentGuess === userNumber) {
      //
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    //to execute the first time component mounts
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  //derives new random number
  function nextGuessHandler(direction) {
    //direction=> 'lower' or 'greater'
    if (
      (direction == "lower" && currentGuess < userNumber) ||
      (direction == "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie!", "You knw that this is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      //adjusting boundaries
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1; //because minBoundayr is included
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Heigher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 100, padding: 24 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
