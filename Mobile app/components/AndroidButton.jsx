import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Pressable, useColorScheme, View } from "react-native";

export function AndroidButton({
	onPress,
	children = (
		<Ionicons
			name="add"
			size={32}
			color={useColorScheme() === "dark" ? "white" : "black"}
		/>
	),
	style,
	className,
	rippleColor = "#86aad4ff",
}) {
	return (
		<View className={`overflow-hidden ${className}`} style={style}>
			<Pressable
				className="p-4"
				android_ripple={{ color: rippleColor }}
				onPress={onPress}
			>
				{children}
			</Pressable>
		</View>
	);
}
