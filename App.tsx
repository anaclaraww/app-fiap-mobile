import LoginScreen from "./components/Login";
import "./styles/global.css"
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
 

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
    </View>
  );
}