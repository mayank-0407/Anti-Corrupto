import React, {
	forwardRef,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import {
	View,
	Text,
	useColorScheme,
	TextInput,
	Pressable,
	TouchableOpacity,
	Image,
} from "react-native";
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Collapsible } from "./Collapsible";

interface Props {
	closeSheet: () => void;
	refresh: () => void;
}
type Ref = BottomSheet;

const LandBuyersSheet = forwardRef<Ref, Props>((props, ref) => {
	const snapPoints = useMemo(() => ["80%", "95%"], []);

	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		console.log("BottomSheet:", index);
	}, []);

	const renderBackdrop = useCallback(
		(props: any) => (
			<BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
		),
		[]
	);

	const colorScheme = useColorScheme();
	const colors = {
		foreground: colorScheme === "dark" ? "#999999" : "#5f5f5f",
		background: colorScheme === "dark" ? "#2a2a2a" : "#ffffff",
		text: colorScheme === "dark" ? "#ffffff" : "#000000",
		button: colorScheme === "dark" ? "#4a4a4a" : "#5f5f5f",
		textInputBG: colorScheme === "dark" ? "#3a3a3a" : "#a7a7a7",
	};

	const data = [
		{
			name: "Pardhaan Saab",
			status: "Married",
			contact: "+91 9781454594",
			email: "TopG@gmale.com",
			note: "Hi, I am interested in this land. Please let me know the details.",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsUzwqXqCGeh7s4HhkfVCWFbSgfKHam7T0oBjoq9aOAymR1SjYI5uzQ9W4heuIgjPKNk&usqp=CAU",
		},
		{
			name: "Adani",
			status: "Married",
			contact: "+91 7465354678",
			email: "TopG@gmale.com",
			note: "Hi, I am interested in this land. No, I'm buying it!",
			img: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ef0e/live/9723a330-718c-11ef-8331-3bcdbb18c020.jpg.webp",
		},
		{
			name: "Web Dev Modi",
			status: "Unmarried",
			contact: "+91 983765467",
			email: "BottomG@gmale.com",
			note: "Hi, this is my land. Hand it over!",
			img: "https://img.etimg.com/thumb/width-420,height-315,imgsize-125238,resizemode-75,msid-113391389/industry/renewables/pm-modi-inaugurates-4th-global-renewable-energy-investors-meet-and-expo-re-invest-in-gandhinagar/pm-modi.jpg",
		},
	];

	return (
		<BottomSheet
			snapPoints={snapPoints}
			index={0}
			ref={ref}
			onChange={handleSheetChanges}
			enableOverDrag={false}
			enablePanDownToClose={true}
			backdropComponent={renderBackdrop}
			handleIndicatorStyle={{
				backgroundColor: colors.foreground,
			}}
			backgroundStyle={{
				backgroundColor: colors.background,
			}}
			style={{
				overflow: "hidden",
				borderTopRightRadius: 20,
				borderTopLeftRadius: 20,
			}}
		>
			<ThemedText type="subtitle" className="p-8 py-4 ">
				15 People Insterested
			</ThemedText>

			<BottomSheetScrollView
				showsVerticalScrollIndicator={false}
				style={{
					flex: 1,
					padding: 24,
					paddingTop: 10,
				}}
			>
				{data.map((item, index) => (
					<Collapsible
						titlerender={() => (
							<ThemedView className="flex-row ">
								<Image
									source={{
										uri: item.img,
									}}
									style={{ width: 70, height: 70, borderRadius: 35 }}
								/>
								<ThemedView className="pl-4 justify-center">
									<ThemedText type="defaultSemiBold">{item.name}</ThemedText>
									<ThemedText type="small">
										Stauts: <ThemedText type="link">{item.status}</ThemedText>
									</ThemedText>
								</ThemedView>
							</ThemedView>
						)}
						key={index}
					>
						<ThemedText type="small" className="pb-1">
							{item.note}
						</ThemedText>
						<ThemedText type="small" className="py-2 font-semibold">
							Contact Details:
						</ThemedText>
						<ThemedText type="link">{item.contact}</ThemedText>
						<ThemedText type="link">{item.email}</ThemedText>
					</Collapsible>
				))}

				<View style={{ padding: 50 }}></View>
			</BottomSheetScrollView>
		</BottomSheet>
	);
});

export default LandBuyersSheet;
