import {
	Image,
	ScrollView,
	Text,
	TextInput,
	SafeAreaView,
	View,
	Button,
	TouchableOpacity,
	Modal,
} from "react-native";
import {
	Ionicons,
	MaterialIcons,
	AntDesign,
	Feather,
	Octicons,
} from "@expo/vector-icons";
// import Card from "../Components/card";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Carousel, Card } from "react-native-ui-lib";
import Colors from "../Components/Colors";
import { logoutUser, fetchUserDetails, isSessionValid } from "../util/Api";
import FadedView from "../Components/FadeView";
import { BlurView } from "expo-blur";
import { getSessionToken } from "../util/tokenStore";

export default function HomePage({ route, navigation }) {
	const [myuser, setmyuser] = useState("");

	// const handleLogout = async () => {
	// 	try {
	// 		const loggedOut = await logoutUser(sessionToken);

	// 		if (loggedOut) {
	// 			navigation.navigate("Login");
	// 		} else {
	// 			console.log("Not logeed in");
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		const checkSessionValidity = async () => {
			const sessionToken = await getSessionToken();
			try {
				const sessionValid = await isSessionValid(sessionToken);
				if (!sessionValid) {
					// alert("Session Timed Out. Please Log In Again.");
					navigation.navigate("Login");
				} else {
					const userDetails = await fetchUserDetails(sessionToken);
					setmyuser(userDetails.data);
				}
			} catch (error) {
				console.log("Error:", error);
			}
		};

		// Check session validity initially
		checkSessionValidity();

		// // Set interval to check session validity periodically
		// const intervalId = setInterval(checkSessionValidity, 60000); // Check every 60 seconds

		// // Clean up the interval when the component unmounts
		// return () => clearInterval(intervalId);
	}, []);


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

	const renderItem = (item, index) => {
		return (
			<View className="justify-center items-center" key={index}>
				<Image
					source={item}
					style={{
						width: 380,
						height: 200,
						borderRadius: 15,
						// borderWidth: 0.5,
						// borderColor: "black",
					}}
				/>
			</View>
		);
	};

	return (
		<>
			<StatusBar style="light" />

			<FadedView>
				<View className="flex-1">
					<View className="p-4 pt-12 flex-row justify-between items-center ">
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
							<MaterialIcons
								name="qr-code-scanner"
								size={24}
								color={"white"}
								style={{ padding: 2, paddingHorizontal: 8 }}
							/>
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

					<ScrollView
						showsVerticalScrollIndicator={false}
						fadingEdgeLength={300}
						className="flex-1"
					>
						<View className=" p-1 ml-4 ">
							<Text className="text-white text-xl font-bold  pb-1">
								Welcome, {myuser.name}
							</Text>
						</View>

						<View className=" mt-4 z-0 ">
							<ScrollView
								horizontal={true}
								showsHorizontalScrollIndicator={false}
								className="px-3"
							>
								<Card width={300} height={150} className="mr-3 ">
									<Card.Section
										content={[{ text: "chalaan 1", text70: true, white: true }]}
										contentStyle={{
											alignItems: "center",
											backgroundColor: "maroon",
											padding: 12,
											width: "100%",
											height: "100%",
											justifyContent: "center",
										}}
									/>
								</Card>

								<Card width={300} height={150} className="mr-3">
									<Card.Section
										content={[{ text: "chalaan 2", text70: true, white: true }]}
										contentStyle={{
											alignItems: "center",
											backgroundColor: "maroon",
											padding: 12,
											width: "100%",
											height: "100%",
											justifyContent: "center",
										}}
									/>
								</Card>

								<Card width={300} height={150} className="mr-6">
									<Card.Section
										content={[{ text: "chalaan 3", text70: true, white: true }]}
										contentStyle={{
											alignItems: "center",
											backgroundColor: "maroon",
											padding: 12,
											width: "100%",
											height: "100%",
											justifyContent: "center",
										}}
									/>
								</Card>
							</ScrollView>
						</View>

						<BlurView
							intensity={85}
							tint="light"
							style={{
								borderTopRightRadius: 32,
								borderTopLeftRadius: 32,
								padding: 10,
								paddingTop: 3,
								paddingBottom: 50,
								overflow: "hidden",
								marginTop: 18,
							}}
						>
							<Text className=" text-base font-bold p-4">Services</Text>

							<View className="flex-row justify-evenly space-x-4">
								<TouchableOpacity>
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
									<Text className="text-center p-1">Voting</Text>
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
									<Text className="text-center p-1">Report</Text>
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
									<Text className="text-center p-1">Drive</Text>
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
									<Text className="text-center p-1">Explore</Text>
								</TouchableOpacity>
							</View>

							<Text className=" text-base font-bold p-4 mt-5">Updates</Text>

							<View>
								<Carousel
									animated={true}
									horizontal={true}
									loop={true}
									autoplay={true}
									containerStyle={{ borderRadius: 10 }}
									pageControlPosition="under"
								>
									{items.map((item, index) => renderItem(item, index))}
								</Carousel>
							</View>

							<Text className=" text-base font-bold p-4 ">Explore</Text>

							<View>
								<ScrollView
									horizontal={true}
									showsHorizontalScrollIndicator={false}
									className="px-3 space-x-3"
								>
									<TouchableOpacity className="border p-3 rounded-3xl flex-row justify-center items-center">
										<Ionicons
											name="language"
											size={18}
											color="black"
											style={{ padding: 2, paddingHorizontal: 6 }}
										/>
										<Text>My Activity</Text>
									</TouchableOpacity>
									<TouchableOpacity className="border p-3 rounded-3xl flex-row justify-center items-center">
										<Ionicons
											name="language"
											size={18}
											color="black"
											style={{ padding: 2, paddingHorizontal: 6 }}
										/>
										<Text>My Activity</Text>
									</TouchableOpacity>
									<TouchableOpacity className="border p-3 rounded-3xl flex-row justify-center items-center">
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
						</BlurView>
					</ScrollView>
				</View>
			</FadedView>

			<View className=" m-2 absolute bottom-1 right-1 left-1">
				<BlurView
					intensity={80}
					tint="light"
					style={{
						borderTopLeftRadius: 16,
						borderBottomLeftRadius: 16,
						borderTopRightRadius: 16,
						borderBottomRightRadius: 16,
						overflow: "hidden",
						backgroundColor: "#ffffff85",
						justifyContent: "center",
						flexDirection: "row",
						justifyContent: "space-evenly",
						elevation: 10,
					}}
				>
					<TouchableOpacity
						className=" p-2 px-6 items-center"
						onPress={() => {
							navigation.navigate("Home");
						}}
					>
						<Ionicons name="home" size={26} color={"#0062f5"} />
						<Text className="text-primaryBlue text-xs">Home</Text>
					</TouchableOpacity>

					<TouchableOpacity
						className=" p-2 px-6 items-center"
						onPress={() => {
							navigation.navigate("Services");
						}}
					>
						<Octicons name="apps" size={26} color={"#454545"} />
						<Text className="text-[#454545] text-xs">Services</Text>
					</TouchableOpacity>

					<TouchableOpacity className=" p-2 px-6 items-center">
						<Ionicons name="person" size={26} color={"#454545"} />
						<Text className="text-[#454545] text-xs">Menu</Text>
					</TouchableOpacity>
				</BlurView>
			</View>
		</>
	);
}
