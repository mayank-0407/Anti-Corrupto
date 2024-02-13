import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Screens/LoginScreen";
import LoginSplash from "./Screens/LoginSplash";
import SignUpPage from "./Screens/SignUp";
import HomePage from "./Screens/Home";
import MenuScreen from "./Screens/MenuScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomePage}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
				// initialParams={params}
			/>
			<Tab.Screen
				name="Menu"
				component={MenuScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="person" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="auto" />

			<NavigationContainer>
				<Stack.Navigator
					headerShown="false"
					screenOptions={{
						headerBackTitle: "Back",
					}}
				>
					<Stack.Screen
						name="Login/SignUp"
						component={LoginSplash}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Sign Up"
						component={SignUpPage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Home"
						component={HomePage}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
