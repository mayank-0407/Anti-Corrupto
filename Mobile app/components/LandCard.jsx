import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
	ImageBackground,
	Text,
	View,
	useWindowDimensions,
	Image,
	TouchableOpacity,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { Feather, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { AndroidButton } from "./AndroidButton";

export default function LandCard({
	name = "Chache hora di dabbi hoyi jameen",
	type = "Agricultural",
	area = "40 Kille",
	location = "Bhadson Road",
	city = "Tarntaran",
	imgUri = "https://rismedia.com/wp-content/uploads/2021/03/luxury_real_estate_1150278000.jpg",
	onpress,
}) {
	// const { height, width } = useWindowDimensions();

	return (
		<TouchableOpacity activeOpacity={0.85} onPress={onpress}>
			<ImageBackground
				source={{
					uri: imgUri,
				}}
				style={{
					// width: width,
					// height: width / 2,
					marginHorizontal: 16,
					marginVertical: 8,
					flexDirection: "row",
					borderRadius: 16,
					overflow: "hidden",
					elevation: 5,
				}}
			>
				<LinearGradient
					colors={["#f5faffff", "#ffffff00"]}
					start={{ x: 0.47, y: 0 }}
					end={{ x: 0.9, y: 0 }}
					style={{
						flex: 1,
						padding: 16,
						gap: 4,
					}}
				>
					<ThemedText type="subtitle" className="pb-1 mr-32">
						{name}
					</ThemedText>
					<ThemedText type="small">{type}</ThemedText>
					<ThemedText type="small">Area: {area}</ThemedText>
					<ThemedText type="small">
						{location + ",  "}
						<FontAwesome6 name="location-dot" size={13} color="black" />
						{" " + city}
					</ThemedText>

					<View className="flex-row border-t border-gray-300 mt-2 pt-3 justify-between items-center">
						<View className="flex-row justify-center items-center ">
							<Image
								source={{
									uri: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202201/sukhbir_singh_badal-sixteen_nine.jpg?size=948:533",
								}}
								style={{
									width: 35,
									height: 35,
									borderRadius: 18,
									borderWidth: 1.5,
									borderColor: "white",
								}}
							/>
							<Image
								source={{
									uri: "https://pbs.twimg.com/profile_images/1172074434712129537/TUPmgKjk_400x400.jpg",
								}}
								style={{
									width: 35,
									height: 35,
									borderRadius: 18,
									borderWidth: 1.5,
									borderColor: "white",
									marginLeft: -10,
								}}
							/>
							<Image
								source={require("../assets/images/profile.png")}
								style={{
									width: 35,
									height: 35,
									borderRadius: 18,
									borderWidth: 1.5,
									borderColor: "white",
									marginLeft: -10,
								}}
							/>
							<View
								style={{
									width: 35,
									height: 35,
									borderRadius: 18,
									borderWidth: 1.5,
									borderColor: "white",
									marginLeft: -10,
									backgroundColor: "#e1e1e1",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<ThemedText style={{ fontSize: 11, textAlign: "center" }}>
									+12
								</ThemedText>
							</View>
						</View>

						<View className="flex-row gap-3">
							<TouchableOpacity className="p-2 rounded-full bg-[#eeeeeece]">
								<Feather name="heart" size={20} color="black" />
							</TouchableOpacity>

							<TouchableOpacity className="p-2 rounded-full bg-[#eeeeeece]">
								<Feather name="share" size={20} color="black" />
							</TouchableOpacity>
						</View>
					</View>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	);
}
