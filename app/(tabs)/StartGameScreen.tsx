import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const generateRandomNumber = () => {
  return Math.floor(1000 + Math.random() * 9000).toString(); // Số ngẫu nhiên 4 chữ số
};

const StartGameScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  const lines = Array.from({ length: Math.ceil(screenHeight / 30) });
  const [hiddenNumber, setHiddenNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState(""); // Số người chơi đoán
  const [result, setResult] = useState(""); // Kết quả kiểm tra
  const [attempts, setAttempts] = useState(0);

  const checkGuess = () => {
    if (guess.length !== 4 || isNaN(Number(guess))) {
      Alert.alert("Error", "Please enter a number with exactly 4 digits!");
      return;
    }
    setAttempts((prev) => prev + 1);
    let correctDigits = 0;
    for (let i = 0; i < 4; i++) {
      if (guess[i] === hiddenNumber[i]) {
        correctDigits++;
      }
    }

    if (guess === hiddenNumber) {
      Alert.alert(
        "Congratulations!",
        `This number is ${hiddenNumber}\nYou guessed it in ${attempts + 1} attempts! 🎉`
      );
      setHiddenNumber(generateRandomNumber()); // Tạo số mới để chơi tiếp
      setGuess("");
      setResult("");
      setAttempts(0);
    } else {
      setResult(`${correctDigits} correct digits`);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fdf5e6", // Nền màu kem
          padding: 10,
        }}
      >
        {/* Đường kẻ ngang */}
        {lines.map((_, index) => (
          <View
            key={index}
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#d3d3d3", // Màu đường kẻ ngang
              marginBottom: 30, // Khoảng cách giữa các dòng
            }}
          />
        ))}

        {/* Tiêu đề trò chơi */}
        <Text
          style={{
            fontFamily: "PlaywriteHRLijeva",
            fontSize: 35,
            position: "absolute",
            top: 110, // Đặt vị trí cách trên cùng 20px
            textAlign: "center",
          }}
        >
          Guess this Number
        </Text>
        {/* Số bí mật bị ẩn */}
        <Text
          style={{
            fontSize: 50,
            fontFamily: "PlaywriteHRLijeva",
            position: "absolute",
            top: 190, // Đặt vị trí cách trên cùng 20px
            color: "#333",
          }}
        >
          🌷🌷🌷🌷
        </Text>

        {/* Ô nhập số */}
        <TextInput
          style={{
            fontFamily: "PlaywriteHRLijeva",
            height: 60,
            width: 300,
            borderRadius: 8,
            borderColor: "black",
            borderWidth: 1,
            paddingHorizontal: 10,
            position: "absolute",
            fontSize: 20,
            textAlign: "center",
            top: 300, // Đặt vị trí cách trên cùng 20px
          }}
          value={guess}
          onChangeText={setGuess}
          keyboardType="numeric"
          maxLength={4}
          placeholder="Enter your number"
        />

<Text
          style={{
            fontSize: 50,
            fontFamily: "PlaywriteHRLijeva",
            position: "absolute",
            top: 360, // Đặt vị trí cách trên cùng 20px
            color: "#333",
          }}
        >
          🌷🌷🌷🌷
        </Text>

        {/* Nút kiểm tra */}
        <TouchableOpacity
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            padding: 15,
            borderRadius: 8,
            borderColor: "black",
            borderWidth: 1,
            top: 490, // Khoảng cách từ nút "Start Game" đến nút "History"
            width: 300,
            height: 60,
            alignItems: "center",
          }}
          onPress={checkGuess}
        >
          <Text
            style={{
              fontFamily: "PlaywriteHRLijeva",
              fontSize: 30,
              position: "absolute",
            }}
          >
            Check
          </Text>
        </TouchableOpacity>

        {/* Kết quả kiểm tra */}
        {result ? (
          <Text
            style={{
              fontFamily: "PlaywriteHRLijeva",
              fontSize: 18,
              top: 570, // Khoảng cách từ nút "Start Game" đến kết quả kiểm tra
              position: "absolute",
              color: "#333",
            }}
          >
            {result}
          </Text>
        ) : null}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default StartGameScreen;
