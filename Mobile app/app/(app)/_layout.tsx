import { Redirect, router, Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AndroidButton } from "@/components/AndroidButton";
import { useAuth } from "../../util/AuthContext";
import { ThemedText } from "@/components/ThemedText";
import { Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import LottieSplashScreen from "@/components/LottieSplashScreen";

export default function AppLayout() {
	const { authState } = useAuth(); // Access auth state from context
	console.log("Auth state (app): ", authState);

	if (authState === null) {
		console.log("Checking authentication, showing loading state...");
		return (
			// <ThemedView
			// 	style={{
			// 		flex: 1,
			// 		justifyContent: "center",
			// 		alignItems: "center",
			// 		height: "100%",
			// 	}}
			// >
			// 	<ThemedText
			// 		style={{
			// 			fontSize: 20,
			// 			textAlign: "center",
			// 		}}
			// 	>
			// 		Loading...
			// 	</ThemedText>
			// </ThemedView>
			<LottieSplashScreen />
		);
	}

	if (!authState) {
		console.log("Redirecting to login...");
		return <Redirect href={"/Login"} />;
	}

	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="Traffic"
				options={{
					orientation: "portrait",
					headerTitle: "My Vehicles",
					headerTitleStyle: { fontSize: 18, fontWeight: "bold" },
					headerStyle: { backgroundColor: "#dbebffff" },
					headerLeft: () => (
						<AndroidButton
							onPress={() => router.back()}
							style={null}
							className="rounded-full ml-[-12] mr-1"
							rippleColor="#86aad4ff"
						>
							<Ionicons name="chevron-back" size={24} color="black" />
						</AndroidButton>
					),
				}}
			/>
			<Stack.Screen
				name="Lands"
				options={{
					orientation: "portrait",
					headerTitle: "My Lands",
					headerTitleStyle: { fontSize: 18, fontWeight: "bold" },
					headerStyle: { backgroundColor: "#dbebffff" },
					headerLeft: () => (
						<AndroidButton
							onPress={() => router.back()}
							style={null}
							className="rounded-full ml-[-12] mr-1"
							rippleColor="#86aad4ff"
						>
							<Ionicons name="chevron-back" size={24} color="black" />
						</AndroidButton>
					),
				}}
			/>
		</Stack>
	);
}
