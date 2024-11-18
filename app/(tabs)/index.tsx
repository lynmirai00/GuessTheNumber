import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const lines = Array.from({ length: 50 }); // Số lượng dòng tùy theo độ cao màn hình

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
              marginBottom: 35, // Khoảng cách giữa các dòng
            }}
          />
        ))}

        {/* Tiêu đề trò chơi */}
        <Text
          style={{
            fontFamily: "PlaywriteHRLijeva",
            fontSize: 35,
            position: "absolute",
            top: 95, // Đặt vị trí cách trên cùng 20px
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
            top: 210, // Đặt vị trí cách trên cùng 80px
            paddingHorizontal: 20,
          }}
        >
          Hãy đoán một số có 4 chữ số. Mỗi lần đoán, hệ thống sẽ chỉ cho bạn con
          số nào đang đứng đúng vị trí. Bạn có thể đoán đúng không? Hãy thử sức
          và kiểm tra lịch sử nhé!
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
            top: 450, // Khoảng cách từ phần giới thiệu đến nút "Start Game"
            alignItems: "center",
          }}
          onPress={() => alert("Start Game")}
        >
          <Text style={{ fontFamily: "PlaywriteHRLijeva", fontSize: 30, position: "absolute" }}>
            Start Game
          </Text>
        </TouchableOpacity>
  
        {/* Nút "History" */}
        <TouchableOpacity
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            padding: 15,
            borderRadius: 8,
            borderColor: "black",
            borderWidth: 1,
            top: 450, // Khoảng cách từ nút "Start Game" đến nút "History"
            width: 300,
            height: 60,
            alignItems: "center",
            marginTop: 110, // Khoảng cách từ nút "Start Game" đến nút "History"
          }}
          onPress={() => alert("History")}
        >
          <Text style={{ fontFamily: "PlaywriteHRLijeva", fontSize: 30, position: "absolute" }}>
            History
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;