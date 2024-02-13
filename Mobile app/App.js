import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import {
	Ionicons,
	MaterialIcons,
	AntDesign,
	FontAwesome5,
} from "@expo/vector-icons";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Screens/LoginScreen";
import LoginSplash from "./Screens/LoginSplash";
import SignUpPage from "./Screens/SignUp";
import HomePage from "./Screens/Home";
import MenuScreen from "./Screens/MenuScreen";
import Services from "./Screens/Services";
import Report from "./Screens/Report";
import Traffic from "./Screens/Traffic";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

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
				/>

				<Tab.Screen
					name="Services"
					component={Services}
					options={{
						headerShown: false,
						tabBarIcon: ({ color, size }) => (
							<AntDesign name="switcher" size={size} color={color} />
						),
					}}
				/>

				<Tab.Screen
					name="Report"
					component={Report}
					options={{
						headerShown: false,
						tabBarIcon: ({ color, size }) => (
							<FontAwesome5 name="fist-raised" size={size} color={color} />
						),
					}}
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

	// function HomeStack() {
	// 	return (
	// 		<Stack.Navigator>
	// 			<Stack.Screen
	// 				name="HomeTab"
	// 				component={HomePage}
	// 				options={{ headerShown: false }}
	// 			/>
	// 		</Stack.Navigator>
	// 	);
	// }

	// function ServicesStack() {
	// 	return (
	// 		<Stack.Navigator>
	// 			<Stack.Screen
	// 				name="ServicesTab"
	// 				component={Services}
	// 				options={{ headerShown: false }}
	// 			/>
	// 			<Stack.Screen
	// 				name="TrafficTab"
	// 				component={Traffic}
	// 				// options={{ headerShown: false }}
	// 			/>
	// 		</Stack.Navigator>
	// 	);
	// }

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Dashboard">
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
					name="Dashboard"
					component={BottomTab}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Traffic"
					component={Traffic}
					options={{ headerTransparent: true }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
