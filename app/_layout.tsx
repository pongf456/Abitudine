import "../assets/global.css";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";
import {
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_600SemiBold,
  LexendDeca_700Bold,
} from "@expo-google-fonts/lexend-deca";
import { colors } from "@/constants/Theme";
import useNotifications from "@/hooks/useNotifications";
import useHabitsNotifications from "@/hooks/useHabitsNotifications";
// Prevent the splash screen from auto-hiding before asset loading is complete.

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useNotifications();
  useHabitsNotifications();
  const [loaded] = useFonts({
    "Playfair-400": PlayfairDisplay_400Regular,
    "Playfair-500": PlayfairDisplay_500Medium,
    "Playfair-600": PlayfairDisplay_600SemiBold,
    "Playfair-700": PlayfairDisplay_700Bold,
    "Lexend-400": LexendDeca_400Regular,
    "Lexend-500": LexendDeca_500Medium,
    "Lexend-600": LexendDeca_600SemiBold,
    "Lexend-700": LexendDeca_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  } else
    return (
      <GestureHandlerRootView>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            animation: "fade",
            headerShown: false,
            contentStyle: {
              backgroundColor: colors.background,
            },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="start" />
          <Stack.Screen name="(home)" />
        </Stack>
      </GestureHandlerRootView>
    );
}
