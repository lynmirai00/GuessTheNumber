import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import StartGameScreen from "./StartGameScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
type HomeProps = {
  navigation: NativeStackNavigationProp<any>;
};

const HomeScreen = ({ navigation }: HomeProps) => {
  const screenHeight = Dimensions.get("window").height;
  const lines = Array.from({ length: Math.ceil(screenHeight / 30) });

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
            top: 150, // Đặt vị trí cách trên cùng 20px
            textAlign: "center",
          }}
        >
          Guess the Number
        </Text>

        {/* Phần giới thiệu trò chơi */}
        <Text
          style={{
            fontFamily: "PlaywriteHRLijeva",
            fontSize: 18,
            position: "absolute",
            textAlign: "center",
            top: 270, // Đặt vị trí cách trên cùng 80px
            paddingHorizontal: 20,
          }}
        >
          Guess a 4-digit number. Each time you guess, the system will show you
          which number is in the correct position. Can you guess correctly? Try it!
        </Text>

        {/* Nút "Start Game" */}
        <TouchableOpacity
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            padding: 15,
            borderRadius: 8,
            borderColor: "black",
            borderWidth: 1,
            width: 300,
            height: 60,
            top: 500, // Khoảng cách từ phần giới thiệu đến nút "Start Game"
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("StartGameScreen")}
        >
          <Text
            style={{
              fontFamily: "PlaywriteHRLijeva",
              fontSize: 30,
              position: "absolute",
            }}
          >
            Start Game
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StartGameScreen"
        component={StartGameScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default App;
