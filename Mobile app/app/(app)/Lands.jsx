import { View, Text, TextInput, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import LandCard from "../../components/LandCard";
import { ThemedText } from "@/components/ThemedText";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { AndroidButton } from "../../components/AndroidButton";
import { FlashList } from "@shopify/flash-list";
import LandBuyersSheet from "../../components/LandBuyersSheet";

export default function Lands() {
	const [showSheet, setShowSheet] = useState(false);
	// ref
	const bottomSheetRef = useRef(null);
	const handleClosePress = () => bottomSheetRef.current?.close();
	const handleOpenPress = () => {
		setShowSheet(true);
		bottomSheetRef.current?.snapToIndex(0);
	};

	return (
		<View className="flex-1 bg-[#f5faffff]">
			<View className="flex-row gap-3 m-4">
				<View className="flex-row flex-1 items-center gap-2 border border-gray-400 bg-gray-100 px-4 py-2 rounded-full my-2">
					<AntDesign name="search1" size={17} color="gray" />
					<TextInput placeholder="Search" className="flex-1" />
				</View>
				<AndroidButton
					className="bg-blue-500 rounded-full my-2"
					rippleColor="#025ecf"
				>
					<View className="flex-row items-center gap-2 px-1">
						<FontAwesome name="sort" size={18} color="white" />
						<Text className="text-white">Sort</Text>
					</View>
				</AndroidButton>
			</View>

			<FlashList
				data={[
					{
						name: "Chache hora di dabbi hoyi jameen",
						type: "Agricultural",
						area: "40 Kille",
						location: "Bhadson Road",
						city: "Tarntaran",
						imgUri:
							"https://miro.medium.com/v2/resize:fit:800/1*PX_9ySeaKhNan-yPMW4WEg.jpeg",
					},
					{
						name: "Dahej aali jameen",
						type: "Commercial",
						area: "5 Kille",
						location: "GT Road",
						city: "Moosa",
					},
					{
						name: "Apni jameen",
						type: "Commercial",
						area: "50 Ghaj",
						location: "Pind",
						city: "Lachkani",
					},
					{
						name: "Virasaat wali jameen",
						type: "Residential",
						area: "15 Kille",
						location: "Tibbe te",
						city: "Sangrur",
					},
				]}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<LandCard {...item} onpress={() => handleOpenPress()} />
				)}
				estimatedItemSize={10}
				keyExtractor={(item, index) => index}
				ListFooterComponent={<View className="h-20" />}
			/>

			{showSheet && (
				<LandBuyersSheet
					closeSheet={() => handleClosePress()}
					ref={bottomSheetRef}
				/>
			)}
		</View>
	);
}
