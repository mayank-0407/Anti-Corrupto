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
	MaterialCommunityIcons,
	Feather,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Carousel, Card, Switch } from "react-native-ui-lib";
import Colors from "../Components/Colors";
import { logoutUser, fetchUserDetails, isSessionValid } from "../util/Api";
import FadedView from "../Components/FadeView";
import Traffic from "./Traffic";
import { BlurView } from "expo-blur";
import PrimaryButton from "../Components/primaryButton";

export default function HomePage({ navigateTo, token }) {
	const [Notifications, setNotifications] = useState(true);
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
					<BlurView intensity={90}>
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

						<TouchableOpacity className="p-4 m-3 mb-4 mt-[-1] rounded-2xl ">
							<View className="flex-row justify-end items-center">
								<Feather name="edit" size={15} color={"black"} />
							</View>

							<View className="mt-[-2] ml-1 flex-row justify-start items-center">
								<Image
									source={require("../assets/Images/modi.jpeg")}
									style={{
										width: 120,
										height: 120,
										borderRadius: 60,
										borderWidth: 2,
										borderColor: "#696969ff",
									}}
								/>
								<View>
									<Text className=" text-xl font-bold ml-4">Dr. Narendra Modi</Text>
									<Text className=" text-xs ml-4">Web Developer</Text>
								</View>
							</View>
						</TouchableOpacity>
					</BlurView>

					{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

					<BlurView
						intensity={88}
						tint="light"
						style={{
							flex: 1,
							borderTopLeftRadius: 32,
							borderTopRightRadius: 32,
							overflow: "hidden",
							paddingTop: 6,
							elevation: 30,
							// borderWidth: 2,
						}}
					>
						<ScrollView
							className="space-y-4 rounded-3xl overflow-hidden mx-2 p-3 "
							showsVerticalScrollIndicator={false}
							// fadingEdgeLength={200}
						>
							<TouchableOpacity className="flex-row justify-between items-center">
								<View className="flex-row items-center">
									<BlurView
										intensity={88}
										tint="light"
										style={{
											borderTopLeftRadius: 16,
											borderBottomLeftRadius: 16,
											borderTopRightRadius: 16,
											borderBottomRightRadius: 16,
											overflow: "hidden",
											backgroundColor: "#0052ceff",
											height: 50,
											width: 50,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Feather name="activity" size={24} color={Colors.primaryBlue} />
									</BlurView>
									<Text className="text-base font-medium mx-2 p-4 ">My Activity</Text>
								</View>
								<View>
									<MaterialIcons name="keyboard-arrow-right" size={24} />
								</View>
							</TouchableOpacity>

							<TouchableOpacity onPress={()=> navigateTo(6)} className="flex-row justify-between items-center">
								<View className="flex-row items-center">
									<BlurView
										intensity={88}
										tint="light"
										style={{
											borderTopLeftRadius: 16,
											borderBottomLeftRadius: 16,
											borderTopRightRadius: 16,
											borderBottomRightRadius: 16,
											overflow: "hidden",
											backgroundColor: "#0052ceff",
											height: 50,
											width: 50,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<MaterialCommunityIcons
											name="car-multiple"
											size={24}
											color={Colors.primaryBlue}
										/>
									</BlurView>
									<Text className="text-base font-medium mx-2 p-4 ">My Vehicles</Text>
								</View>
								<View>
									<MaterialIcons name="keyboard-arrow-right" size={24} />
								</View>
							</TouchableOpacity>

							<TouchableOpacity className="flex-row justify-between items-center">
								<View className="flex-row items-center">
									<BlurView
										intensity={88}
										tint="light"
										style={{
											borderTopLeftRadius: 16,
											borderBottomLeftRadius: 16,
											borderTopRightRadius: 16,
											borderBottomRightRadius: 16,
											overflow: "hidden",
											backgroundColor: "#0052ceff",
											height: 50,
											width: 50,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Ionicons name="language" size={24} color={Colors.primaryBlue} />
									</BlurView>
									<Text className="text-base font-medium mx-2 p-4 ">Language</Text>
								</View>
								<View>
									<MaterialIcons name="keyboard-arrow-right" size={24} />
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								className="flex-row justify-between items-center"
								onPress={() => {
									setNotifications(!Notifications);
								}}
							>
								<View className="flex-row items-center">
									<BlurView
										intensity={88}
										tint="light"
										style={{
											borderTopLeftRadius: 16,
											borderBottomLeftRadius: 16,
											borderTopRightRadius: 16,
											borderBottomRightRadius: 16,
											overflow: "hidden",
											backgroundColor: "#0052ceff",
											height: 50,
											width: 50,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Feather name="bell" size={24} color={Colors.primaryBlue} />
									</BlurView>
									<Text className="text-base font-medium mx-2 p-4 ">Notifications</Text>
								</View>
								<View className="mx-1">
									<Switch
										value={Notifications}
										onValueChange={() => {
											setNotifications(!Notifications);
										}}
										onColor={Colors.primaryBlue}
									/>
								</View>
							</TouchableOpacity>

							<TouchableOpacity className="flex-row justify-between items-center">
								<View className="flex-row items-center">
									<BlurView
										intensity={88}
										tint="light"
										style={{
											borderTopLeftRadius: 16,
											borderBottomLeftRadius: 16,
											borderTopRightRadius: 16,
											borderBottomRightRadius: 16,
											overflow: "hidden",
											backgroundColor: "#0052ceff",
											height: 50,
											width: 50,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Feather name="unlock" size={24} color={Colors.primaryBlue} />
									</BlurView>
									<Text className="text-base font-medium mx-2 p-4 ">
										Change Password
									</Text>
								</View>
								<View>
									<MaterialIcons name="keyboard-arrow-right" size={24} />
								</View>
							</TouchableOpacity>

							<TouchableOpacity className="flex-row justify-between items-center">
								<View className="flex-row items-center">
									<BlurView
										intensity={88}
										tint="light"
										style={{
											borderTopLeftRadius: 16,
											borderBottomLeftRadius: 16,
											borderTopRightRadius: 16,
											borderBottomRightRadius: 16,
											overflow: "hidden",
											backgroundColor: "#0052ceff",
											height: 50,
											width: 50,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Feather name="help-circle" size={24} color={Colors.primaryBlue} />
									</BlurView>
									<Text className="text-base font-medium mx-2 p-4 ">Help</Text>
								</View>
								<View>
									<MaterialIcons name="keyboard-arrow-right" size={24} />
								</View>
							</TouchableOpacity>

							<TouchableOpacity className="flex-row justify-between items-center mb-3">
								<View className="flex-row items-center">
									<BlurView
										intensity={88}
										tint="light"
										style={{
											borderTopLeftRadius: 16,
											borderBottomLeftRadius: 16,
											borderTopRightRadius: 16,
											borderBottomRightRadius: 16,
											overflow: "hidden",
											backgroundColor: "#0052ceff",
											height: 50,
											width: 50,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<MaterialIcons
											name="error-outline"
											size={24}
											color={Colors.primaryBlue}
										/>
									</BlurView>
									<Text className="text-base font-medium mx-2 p-4 ">Report</Text>
								</View>
								<View>
									<MaterialIcons name="keyboard-arrow-right" size={24} />
								</View>
							</TouchableOpacity>

							<View className="mb-8">
								<PrimaryButton>
									<View className="flex-row items-center justify-center space-x-4">
										<Feather name="log-out" size={20} color={"white"} />
										<Text className="text-base text-center font-medium text-white">
											Log Out
										</Text>
									</View>
								</PrimaryButton>
							</View>
						</ScrollView>
					</BlurView>
				</View>
			</ImageBackground>
			<StatusBar style="dark" />
		</>
	);
}
