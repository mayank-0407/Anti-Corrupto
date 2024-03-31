import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
	Ionicons,
	MaterialIcons,
	AntDesign,
	FontAwesome5,
	Octicons,
} from "@expo/vector-icons";
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
import MyVehicles from "./Screens/MyVehicles";
import { BlurView } from "expo-blur";
import Colors from "./Components/Colors";
import { NavigationContainer } from "@react-navigation/native";
// import { Provider } from "react-redux";
// import { store } from "./store/redux/store";

export default function App() {
	// const [currentScreen, setCurrentScreen] = useState(1);

	// const [id, setId] = useState(null);

	// function navigationHandler(num, token) {
	// 	setId(token);
	// 	console.log("appjs:", token);
	// 	setCurrentScreen(num);
	// }

	// const screens = [
	// 	<LoginSplash />,
	// 	<LoginScreen navigateTo={navigationHandler} />,
	// 	<SignUpPage />,
	// 	<HomePage token={id} />,
	// 	<Services />,
	// 	<MenuScreen navigateTo={navigationHandler} token={id}/>,
	// 	<MyVehicles token={id} navigateTo={navigationHandler}/>,
	// 	<Traffic token={id} navigateTo={navigationHandler}/>,
	// ];

	const BottomTab = () => {
		return (
			<View className=" m-2 absolute bottom-1 right-1 left-1">
				<BlurView
					intensity={100}
					tint="light"
					style={{
						borderTopLeftRadius: 16,
						borderBottomLeftRadius: 16,
						borderTopRightRadius: 16,
						borderBottomRightRadius: 16,
						overflow: "hidden",
						backgroundColor: "#dfdfdfaa",
						justifyContent: "center",
						flexDirection: "row",
						justifyContent: "space-evenly",
						elevation: 10,
					}}
				>
					<TouchableOpacity className=" p-2 px-6 items-center">
						<Ionicons name="home" size={26} color={"#0062f5"} />
						<Text className="text-primaryBlue text-xs">Home</Text>
					</TouchableOpacity>

					<TouchableOpacity className=" p-2 px-6 items-center">
						<Octicons name="apps" size={26} color={"#454545"} />
						<Text className="text-[#454545] text-xs">Services</Text>
					</TouchableOpacity>

					<TouchableOpacity className=" p-2 px-6 items-center">
						<Ionicons name="person" size={26} color={"#454545"} />
						<Text className="text-[#454545] text-xs">Menu</Text>
					</TouchableOpacity>
				</BlurView>
			</View>
		);
	};

	const Stack = createNativeStackNavigator();

	return (
		// <Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="LoginSplash" component={LoginSplash} />
					<Stack.Screen name="Login" component={LoginScreen} />
					<Stack.Screen name="SignUp" component={SignUpPage} />
					<Stack.Screen name="Home" component={HomePage} />
					<Stack.Screen name="Services" component={Services} />
					<Stack.Screen name="MenuScreen" component={MenuScreen} />
					<Stack.Screen name="MyVehicles" component={MyVehicles} />
					<Stack.Screen name="Traffic" component={Traffic} />
				</Stack.Navigator>
			</NavigationContainer>
		// </Provider>

		// <View className="flex-1">
		// 	{screens[currentScreen]}
		// 	{currentScreen > 2 && <BottomTab />}
		// </View>
	);
}
