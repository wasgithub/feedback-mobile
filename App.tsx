import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import "react-native-gesture-handler";
import { theme } from "./src/theme";
import Widget from "./src/components/Widget";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Widget />
    </View>
  );
}
