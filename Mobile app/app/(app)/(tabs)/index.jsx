import {
	Image,
	ScrollView,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	useColorScheme,
} from "react-native";
import {
	Ionicons,
	MaterialIcons,
	AntDesign,
	Feather,
	Octicons,
} from "@expo/vector-icons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Animated, { useSharedValue } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import Carousel from "react-native-reanimated-carousel";
import FadedView from "../../../components/FadeView";
import { useAppKit } from "@reown/appkit-wagmi-react-native";
import { router } from "expo-router";
import { useAuth } from "../../../util/AuthContext";

export default function HomePage() {
	const width = Dimensions.get("window").width;
	const progressValue = useSharedValue(0);
	const { open } = useAppKit();
	const colorScheme = useColorScheme() ?? "light";
	const { userData } = useAuth();

	const items = [
		{
			uri: "https://static.theprint.in/wp-content/uploads/2018/08/Modi-Ujjawala.jpg",
		},
		{
			uri: "https://wallpapers.com/images/hd/narendra-modi-india-flag-8rwmh1jtmbmtvmh7.jpg",
		},
		{
			uri: "https://thedailyguardian.com/wp-content/uploads/2022/08/Modi-birthday-1.jpeg",
		},
		{
			uri: "https://cdn.zeebiz.com/sites/default/files/2021/11/24/166989-pm-modi.jpeg",
		},
		{
			uri: "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202202/modi-pti_1200x768.jpeg?VersionId=ipAZl_bHB8k412gUoI81QCKUIWdfKuEs",
		},
	];

	return (
		<>
			<StatusBar style="light" />
			<View
				style={{
					backgroundColor: { light: "#1e00c7", dark: "#1e00c7" }[colorScheme],
				}}
				className="p-4 pt-12 flex-row justify-between items-center "
			>
				<View className="flex-row justify-between items-center">
					{/* <Image
								source={require("../assets/Images/Emblem_of_India.png")}
								className="w-[12%] h-[100%]"
								tintColor={"#0062f5"}
							/> */}
					<Ionicons
						name="person-circle-outline"
						size={26}
						color={"white"}
						style={{ marginRight: 6 }}
					/>

					<Text className="text-white text-lg text-center font-bold">
						Anti Corruptō
					</Text>
				</View>

				<View className="flex-row justify-between items-center">
					<TouchableOpacity onPress={() => open()}>
						<Ionicons
							name="wallet-outline"
							size={25}
							color={"white"}
							style={{ padding: 2, paddingHorizontal: 8 }}
						/>
					</TouchableOpacity>

					<Feather
						name="bell"
						size={24}
						color={"white"}
						style={{ padding: 2, paddingHorizontal: 8 }}
					/>
					<AntDesign
						name="search1"
						size={24}
						color={"white"}
						style={{ padding: 2, paddingHorizontal: 8, paddingRight: 0 }}
					/>
				</View>
			</View>

			<ParallaxScrollView
				headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
				headerImage={
					<FadedView>
						<View className=" p-1 ml-4 ">
							<Text className="text-white text-xl font-bold  pb-1">
								Welcome, {userData?.name}
							</Text>
						</View>

						<View className=" mt-4 ">
							<ScrollView
								horizontal={true}
								showsHorizontalScrollIndicator={false}
								className="px-3"
							>
								<View
									className="mr-3 bg-amber-500 rounded-2xl"
									style={{ width: 300, height: 150 }}
								></View>
								<View
									className="mr-3 bg-amber-500 rounded-2xl"
									style={{ width: 300, height: 150 }}
								></View>
								<View
									className="mr-3 bg-amber-500 rounded-2xl"
									style={{ width: 300, height: 150 }}
								></View>
								<View className="mx-2"></View>
							</ScrollView>
						</View>
					</FadedView>
				}
			>
				{/* <StatusBar style="light" /> */}

				<View className="flex-1 bg-[#efedff]">
					{/* <View className="p-4 pt-12 flex-row justify-between items-center ">
							<View className="flex-row justify-between items-center">
								<Image
								source={require("../assets/Images/Emblem_of_India.png")}
								className="w-[12%] h-[100%]"
								tintColor={"#0062f5"}
							/> 
								<Ionicons
									name="person-circle-outline"
									size={26}
									color={"white"}
									style={{ marginRight: 6 }}
								/>

								<Text className="text-white text-lg text-center font-bold">
									Anti Corruptō
								</Text>
							</View>

							<View className="flex-row justify-between items-center">
								<TouchableOpacity onPress={() => open()}>
									<Ionicons
										name="wallet-outline"
										size={25}
										color={"white"}
										style={{ padding: 2, paddingHorizontal: 8 }}
									/>
								</TouchableOpacity>

								<Feather
									name="bell"
									size={24}
									color={"white"}
									style={{ padding: 2, paddingHorizontal: 8 }}
								/>
								<AntDesign
									name="search1"
									size={24}
									color={"white"}
									style={{ padding: 2, paddingHorizontal: 8, paddingRight: 0 }}
								/>
							</View>
						</View> */}

					<ScrollView
						showsVerticalScrollIndicator={false}
						fadingEdgeLength={300}
						className="flex-1"
					>
						{/* <View className=" p-1 ml-4 ">
								<Text className="text-white text-xl font-bold  pb-1">
									Welcome, {myuser.name}
								</Text>
							</View>

							<View className=" mt-4 ">
								<ScrollView
									horizontal={true}
									showsHorizontalScrollIndicator={false}
									className="px-3"
								>
									<View
										className="mr-3 bg-amber-500 rounded-2xl"
										style={{ width: 300, height: 150 }}
									></View>
									<View
										className="mr-3 bg-amber-500 rounded-2xl"
										style={{ width: 300, height: 150 }}
									></View>
									<View
										className="mr-3 bg-amber-500 rounded-2xl"
										style={{ width: 300, height: 150 }}
									></View>
									<View className="mx-2"></View>
								</ScrollView>
							</View> */}

						<View
							style={{
								borderTopRightRadius: 32,
								borderTopLeftRadius: 32,
								padding: 10,
								paddingTop: 3,
								paddingBottom: 50,
								overflow: "hidden",
								// marginTop: 18,
								backgroundColor: "#ffffffe4",
							}}
						>
							<Octicons
								name="dash"
								size={38}
								color="#4a4a4a"
								className="self-center"
							/>

							<Text className=" text-base font-bold p-4 pt-1">Services</Text>

							<View className="flex-row justify-evenly space-x-4">
								<TouchableOpacity
									onPress={() => {
										router.navigate("AddVehicles");
									}}
								>
									<View className="bg-primaryBlue rounded-lg p-4 ">
										<Ionicons
											name="language"
											size={24}
											color="white"
											style={{ padding: 2, paddingHorizontal: 8 }}
										/>
									</View>
									<Text className="text-center text-sm p-1">Traffic</Text>
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
									<Text className="text-center text-sm p-1">Land</Text>
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
									<Text className="text-center text-sm p-1">Funds</Text>
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
									<Text className="text-center text-sm p-1">Contracts</Text>
								</TouchableOpacity>
							</View>

							<View className="flex-row justify-evenly space-x-4 mt-4">
								<TouchableOpacity>
									<View className="bg-primaryBlue rounded-lg p-4 ">
										<Ionicons
											name="language"
											size={24}
											color="white"
											style={{ padding: 2, paddingHorizontal: 8 }}
										/>
									</View>
									<Text className="text-center text-sm p-1">Voting</Text>
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
									<Text className="text-center text-sm p-1">Report</Text>
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
									<Text className="text-center text-sm p-1">Drive</Text>
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
									<Text className="text-center text-sm p-1">Explore</Text>
								</TouchableOpacity>
							</View>

							<Text className=" text-base font-bold p-4 mt-5">Updates</Text>

							<View className=" mt-[-8] justify-center items-center">
								<Carousel
									loop
									width={width}
									height={width * 0.58}
									pagingEnabled={true}
									snapEnabled={true}
									autoPlay={true}
									autoPlayInterval={3000}
									onProgressChange={(_, absoluteProgress) =>
										(progressValue.value = absoluteProgress)
									}
									mode="parallax"
									modeConfig={{
										parallaxScrollingScale: 0.9,
										parallaxScrollingOffset: 50,
									}}
									data={items}
									scrollAnimationDuration={1000}
									renderItem={({ item }) => (
										<View>
											<Image
												source={{ uri: item.uri }}
												style={{
													width: "100%",
													height: "100%",
													borderRadius: 15,
													padding: 4,
												}}
											/>
										</View>
									)}
								/>
							</View>

							<Text className=" text-base font-bold p-4 ">Explore</Text>

							<View className="mb-10">
								<ScrollView
									horizontal={true}
									showsHorizontalScrollIndicator={false}
									className="px-3 space-x-3 overflow-visible"
								>
									<TouchableOpacity className="border mr-2 p-3 rounded-3xl flex-row justify-center items-center">
										<Ionicons
											name="language"
											size={18}
											color="black"
											style={{ padding: 2, paddingHorizontal: 6 }}
										/>
										<Text>My Activity</Text>
									</TouchableOpacity>
									<TouchableOpacity className="border mr-2 p-3 rounded-3xl flex-row justify-center items-center">
										<Ionicons
											name="language"
											size={18}
											color="black"
											style={{ padding: 2, paddingHorizontal: 6 }}
										/>
										<Text>My Activity</Text>
									</TouchableOpacity>
									<TouchableOpacity className="border mr-2 p-3 rounded-3xl flex-row justify-center items-center">
										<Ionicons
											name="language"
											size={18}
											color="black"
											style={{ padding: 2, paddingHorizontal: 6 }}
										/>
										<Text>My Activity</Text>
									</TouchableOpacity>
									<TouchableOpacity className="border p-3 mr-6 rounded-3xl flex-row justify-center items-center">
										<Ionicons
											name="language"
											size={18}
											color="black"
											style={{ padding: 2, paddingHorizontal: 6 }}
										/>
										<Text>My Activity</Text>
									</TouchableOpacity>
								</ScrollView>
							</View>
						</View>
					</ScrollView>
				</View>
			</ParallaxScrollView>
		</>
	);
}
