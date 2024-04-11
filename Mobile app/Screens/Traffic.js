import {
	Image,
	ScrollView,
	Text,
	TextInput,
	SafeAreaView,
	View,
	Button,
	TouchableOpacity,
	ImageBackground,
	Modal,
	Pressable,
	TouchableHighlight,
} from "react-native";
import {
	Ionicons,
	MaterialIcons,
	AntDesign,
	Feather,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
// import { Carousel, Card } from "react-native-ui-lib";
import Colors from "../Components/Colors";
import { logoutUser, fetchUserDetails, isSessionValid } from "../util/Api";
import FadedView from "../Components/FadeView";
import { BlurView } from "expo-blur";
import { getUserVehicles } from "../util/vehicleApi";
import { getSessionToken } from "../util/tokenStore";

export default function Traffic({ navigation }) {
	const [vehicles, setVehicles] = useState([]);

	const getallvehicles = async () => {
		const token = await getSessionToken();
		const thisUser = await fetchUserDetails(token);
		console.log(thisUser.data.id);
		// setMyUser(thisUser.data.id);
		const myvehicles = await getUserVehicles(thisUser.data.id);
		console.log(myvehicles);
		setVehicles(myvehicles);
	};

	useEffect(() => {
		const checkSessionValidity = async () => {
			const sessionToken = await getSessionToken();
			try {
				// const checkLoginSession = isSessionValid(sessionToken);
				if (sessionToken) {
					console.log("get all vehicles : ", sessionToken);
					getallvehicles();
				} else {
					navigation.navigate("Login");
				}
			} catch (error) {
				console.log("Error:", error);
			}
		};

		// Check session validity initially
		checkSessionValidity();
		
	}, []);
	

	return (
		<>
			<View
				style={{
					flex: 1,
					overflow: "hidden",
					backgroundColor: "#dbebffff",
					justifyContent: "space-between",
				}}
			>
				<View className="mb-6">
					<Text className="mt-8 p-4 font-bold text-base">My Vehicles</Text>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						className="px-3 space-x-3"
					>
						{vehicles.map((vehicle, index) => (
							<TouchableOpacity>
								<View
									style={{
										borderTopLeftRadius: 16,
										borderBottomLeftRadius: 16,
										borderTopRightRadius: 16,
										borderBottomRightRadius: 16,
										overflow: "hidden",
										padding: 8,
										backgroundColor: "#0062f5ff",
										justifyContent: "center",
									}}
								>
									<Image
										source={require("../assets/Images/creta.webp")}
										style={{ height: 130, width: 300 }}
									/>
									<View className="justify-between flex-row">
										<Text
											style={{
												textAlign: "center",
												padding: 8,
												paddingTop: 10,
												color: "white",
												fontSize: 18,
												fontWeight: "bold",
												textShadowColor: "rgba(0, 52, 194, 0.577)",
												textShadowRadius: 14,
											}}
										>
											{vehicle.model}
										</Text>
										<Text
											style={{
												textAlign: "center",
												padding: 8,
												paddingTop: 10,
												color: "white",
												fontSize: 18,
												fontWeight: "bold",
												textShadowColor: "rgba(0, 52, 194, 0.577)",
												textShadowRadius: 14,
											}}
										>
											{vehicle.plateNumber}
										</Text>
									</View>
								</View>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>

				{/*/////////////////////////////////////////////////////////////////////////////////////////////// */}

				<View
					style={{
						borderTopRightRadius: 32,
						borderTopLeftRadius: 32,
						padding: 10,
						paddingTop: 16,
						paddingBottom: 0,
						overflow: "hidden",
						backgroundColor: "#003b93",
					}}
				>
					<View className="rounded-3xl overflow-hidden ">
						<ScrollView showsVerticalScrollIndicator={false}>
							<View
								style={{
									borderTopLeftRadius: 32,
									borderBottomLeftRadius: 16,
									borderTopRightRadius: 32,
									borderBottomRightRadius: 16,
									overflow: "hidden",
									padding: 8,
									backgroundColor: "#9ac3ffff",
									justifyContent: "center",
									// marginTop: 12,
								}}
							>
								<Text className=" text-base font-bold pt-1 px-3 pb-4">
									Vehicle Info
								</Text>

								<View className="flex-row justify-evenly space-x-4">
									<TouchableOpacity onPress={()=>{navigation.navigate("MyVehicles");}}>
										<View className="bg-primaryBlue rounded-lg p-4 ">
											<Ionicons
												name="language"
												size={24}
												color="white"
												style={{ padding: 2, paddingHorizontal: 8 }}
											/>
										</View>
										<Text className="text-center p-1">Traffic</Text>
									</TouchableOpacity>
									<TouchableOpacity>
										<View className="bg-primaryBlue rounded-lg p-4 ">
											<Ionicons
												name="language"
												size={24}
												color="white"
												style={{ padding: 2, paddingHorizontal: 8 }}
											/>
										</View>
										<Text className="text-center p-1">Land</Text>
									</TouchableOpacity>
									<TouchableOpacity>
										<View className="bg-primaryBlue rounded-lg p-4 ">
											<Ionicons
												name="language"
												size={24}
												color="white"
												style={{ padding: 2, paddingHorizontal: 8 }}
											/>
										</View>
										<Text className="text-center p-1">Funds</Text>
									</TouchableOpacity>
									<TouchableOpacity>
										<View className="bg-primaryBlue rounded-lg p-4 ">
											<Ionicons
												name="language"
												size={24}
												color="white"
												style={{ padding: 2, paddingHorizontal: 8 }}
											/>
										</View>
										<Text className="text-center p-1">Contracts</Text>
									</TouchableOpacity>
								</View>
							</View>

							<View
								intensity={70}
								tint="light"
								style={{
									borderTopLeftRadius: 16,
									borderBottomLeftRadius: 16,
									borderTopRightRadius: 16,
									borderBottomRightRadius: 16,
									overflow: "hidden",
									padding: 8,
									backgroundColor: "#9ac3ffff",
									justifyContent: "center",
									marginTop: 12,
								}}
							>
								<Text className=" text-base font-bold pt-1 px-3 pb-4">
									Chalaan History
								</Text>

								<View className="justify-evenly px-2">
									<Text className="p-2 border-b border-gray-600">1.</Text>
									<Text className="p-2 border-b border-gray-600">
										2. ₹2000 • Crossin red lights
									</Text>
									<Text className="p-2 ">3. ₹500 • No parking zone</Text>
								</View>
							</View>

							<View
								intensity={70}
								tint="light"
								style={{
									borderTopLeftRadius: 16,
									borderBottomLeftRadius: 16,
									borderTopRightRadius: 16,
									borderBottomRightRadius: 16,
									overflow: "hidden",
									padding: 8,
									backgroundColor: "#9ac3ffff",
									justifyContent: "center",
									marginTop: 12,
									marginBottom: 42,
								}}
							>
								<Text className=" text-base font-bold pt-1 px-3 pb-4">
									Chalaan History
								</Text>

								<View className="justify-evenly px-2">
									<Text className="p-2 border-b border-gray-600">
										1. ₹10000 • Overspeeding
									</Text>
									<Text className="p-2 border-b border-gray-600">
										2. ₹2000 • Crossin red lights
									</Text>
									<Text className="p-2 ">3. ₹500 • No parking zone</Text>
								</View>
							</View>
						</ScrollView>
					</View>
				</View>
			</View>

			<StatusBar style="dark" />
		</>
	);
}
