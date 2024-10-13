import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AndroidButton } from "@/components/AndroidButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "../util/AuthContext";
import Web3 from "@/Metamask/WalletConnect";

export default function RootLayout() {
	const colorScheme = useColorScheme();

	return (
		<Web3>
			<AuthProvider>
				<GestureHandlerRootView style={{ flex: 1 }}>
					<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
						<Slot />
					</ThemeProvider>
				</GestureHandlerRootView>
			</AuthProvider>
		</Web3>
	);
}
