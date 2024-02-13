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
import { Carousel, Card } from "react-native-ui-lib";
import Colors from "../Components/Colors";
import { logoutUser, fetchUserDetails, isSessionValid } from "../util/Api";
import FadedView from "../Components/FadeView";
import Traffic from "./Traffic";
import { BlurView } from "expo-blur";

export default function HomePage({ route, navigation }) {
	const items = [1, 2, 3, 4];

	const renderItem = (item, index) => {
		return (
			<View
				key={index}
				style={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Card>
					<Card.Section
						content={[{ text: `Card ${item}`, text70: true, white: true }]}
						contentStyle={{
							alignItems: "center",
							backgroundColor: "green",
							padding: 12,
							width: 370,
							height: 200,
							justifyContent: "center",
						}}
					/>
				</Card>
			</View>
		);
	};

	return (
		<>
			<ImageBackground
				source={require("../assets/Images/light.png")}
				resizeMode="cover"
				className="flex-1"
				opacity={0.85}
			>
				<View className="flex-1">
					<View className="p-4 pt-12 flex-row justify-between items-center ">
						<View className="flex-row justify-between items-center">
							{/* <Image
								source={require("../assets/Images/Emblem_of_India.png")}
								className="w-[12%] h-[100%]"
								tintColor={"#0062f5"}
							/> */}
							<Ionicons
								name="person-circle"
								size={26}
								color={Colors.primaryBlue}
								style={{ marginRight: 6 }}
							/>

							<Text className="text-primaryBlue text-lg text-center font-bold">
								Anti Corruptō
							</Text>
						</View>

						<View className="flex-row justify-between items-center">
							<MaterialIcons
								name="qr-code-scanner"
								size={24}
								color={Colors.primaryBlue}
								style={{ padding: 2, paddingHorizontal: 8 }}
							/>
							<Feather
								name="bell"
								size={24}
								color={Colors.primaryBlue}
								style={{ padding: 2, paddingHorizontal: 8 }}
							/>
							<AntDesign
								name="search1"
								size={24}
								color={Colors.primaryBlue}
								style={{ padding: 2, paddingHorizontal: 8, paddingRight: 2 }}
							/>
						</View>
					</View>

					<View className="border border-gray-400 px-3 py-1 rounded-lg mt-2 mb-1 mx-5">
						<TextInput placeholder="Search" />
					</View>

					<BlurView intensity={65} tint="light">
						<Text className=" text-base font-bold mx-2 p-4 ">Choose a category</Text>

						<ScrollView
							className=" space-y-5 px-4"
							showsVerticalScrollIndicator={false}
							// fadingEdgeLength={200}
						>
							<TouchableOpacity onPress={()=>{
								navigation.navigate("Traffic");
								}}>
								<BlurView
									intensity={77}
									tint="light"
									style={{
										borderTopLeftRadius: 16,
										borderBottomLeftRadius: 16,
										borderTopRightRadius: 16,
										borderBottomRightRadius: 16,
										overflow: "hidden",
										padding: 8,
										backgroundColor: "#0080a0ff",
										justifyContent: "center",
									}}
								>
									<Card>
										<Card.Image
											source={require("../assets/Images/traffic.jpg")}
											style={{ height: 170 }}
										/>
									</Card>

									<Text
										style={{
											textAlign: "center",
											padding: 8,
											paddingTop: 10,
											color: "white",
											fontSize: 18,
											fontWeight: "bold",
											textShadowColor: "rgba(0, 120, 194, 0.577)",
											textShadowRadius: 14,
											// borderWidth: 2,
										}}
									>
										Traffic
									</Text>
								</BlurView>
							</TouchableOpacity>

							<TouchableOpacity>
								<BlurView
									intensity={77}
									tint="light"
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
									<Card>
										<Card.Image
											source={require("../assets/Images/land.jpeg")}
											style={{ height: 170 }}
										/>
									</Card>

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
											// borderWidth: 2,
										}}
									>
										Land Registry
									</Text>
								</BlurView>
							</TouchableOpacity>

							<TouchableOpacity>
								<BlurView
									intensity={77}
									tint="light"
									style={{
										borderTopLeftRadius: 16,
										borderBottomLeftRadius: 16,
										borderTopRightRadius: 16,
										borderBottomRightRadius: 16,
										overflow: "hidden",
										padding: 8,
										backgroundColor: "#0000f5ff",
										justifyContent: "center",
									}}
								>
									<Card>
										<Card.Image
											source={require("../assets/Images/voting.jpeg")}
											style={{ height: 170 }}
										/>
									</Card>

									<Text
										style={{
											textAlign: "center",
											padding: 8,
											paddingTop: 10,
											color: "white",
											fontSize: 18,
											fontWeight: "bold",
											textShadowColor: "rgba(81, 0, 194, 0.577)",
											textShadowRadius: 14,
											// borderWidth: 2,
										}}
									>
										Voting
									</Text>
								</BlurView>
							</TouchableOpacity>

							<TouchableOpacity>
								<BlurView
									intensity={77}
									tint="light"
									style={{
										borderTopLeftRadius: 16,
										borderBottomLeftRadius: 16,
										borderTopRightRadius: 16,
										borderBottomRightRadius: 16,
										overflow: "hidden",
										padding: 8,
										backgroundColor: "#8f4a00ff",
										justifyContent: "center",
									}}
								>
									<Card>
										<Card.Image
											source={require("../assets/Images/contract.jpeg")}
											style={{ height: 170 }}
										/>
									</Card>

									<Text
										style={{
											textAlign: "center",
											padding: 8,
											paddingTop: 10,
											color: "white",
											fontSize: 18,
											fontWeight: "bold",
											textShadowColor: "rgba(194, 110, 0, 0.577)",
											textShadowRadius: 14,
											// borderWidth: 2,
										}}
									>
										Contracts
									</Text>
								</BlurView>
							</TouchableOpacity>

							<TouchableOpacity>
								<BlurView
									intensity={77}
									tint="light"
									style={{
										borderTopLeftRadius: 16,
										borderBottomLeftRadius: 16,
										borderTopRightRadius: 16,
										borderBottomRightRadius: 16,
										overflow: "hidden",
										padding: 8,
										backgroundColor: "#f50014ff",
										justifyContent: "center",
										marginBottom: 250,
									}}
								>
									<Card>
										<Card.Image
											source={require("../assets/Images/funds.jpeg")}
											style={{ height: 170 }}
										/>
									</Card>

									<Text
										style={{
											textAlign: "center",
											padding: 8,
											paddingTop: 10,
											color: "white",
											fontSize: 18,
											fontWeight: "bold",
											textShadowColor: "rgba(194, 0, 52, 0.577)",
											textShadowRadius: 14,
											// borderWidth: 2,
										}}
									>
										Funds
									</Text>
								</BlurView>
							</TouchableOpacity>
						</ScrollView>
					</BlurView>

					<View className="flex-1"></View>
				</View>
			</ImageBackground>
			<StatusBar style="dark" />
		</>
	);
}
