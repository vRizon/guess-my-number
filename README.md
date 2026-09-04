# 🎯 Guess My Number
 
A React Native game where you pick a secret number and the app tries to guess it using a binary search strategy — tap higher or lower until it finds your number.

---

## About
 
Guess My Number flips the classic number-guessing game: instead of you guessing a number the computer picked, **you** pick a number between 1 and 99, and the app has to figure it out. Each round, it makes a guess and you tell it whether the real number is higher or lower — the app narrows it down using a binary search algorithm until it lands on the right answer.

## Features
 
- 🔢 **Start screen** — enter your secret number with input validation (must be between 1 and 99)
- 🤖 **Computer guessing** — the app guesses using binary search, narrowing the range on each round
- ⬆️⬇️ **Higher / Lower controls** — guide the app toward your number
- 🎉 **Game over screen** — shows the number it took to guess correctly, with a confetti celebration
- 🔁 **Play again** — restart with a new secret number at any time
- 📱 **Responsive layout** — adapts between portrait and landscape orientation
## Tech stack
 
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- JavaScript (ES6+)
